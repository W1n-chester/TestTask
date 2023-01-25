const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];
const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];
const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));

// попытка 2
function calculateTeamFinanceReport(salaries, team) {
  // полные зарплаты
  for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
      salaries[key] =
        (salaries[key].salary / 100) * Number.parseInt(salaries[key].tax) +
        salaries[key].salary;
    }
  }
  // console.log(salaries);
  // сделал масив с обектами по типу команды + новый ключ с зарплатой
  const newTeam = [];
  team.map((employee) => {
    const obj = {
      fullSalary: salaries[employee.specialization],
      name: employee.name,
      specialization: employee.specialization,
    };
    newTeam.push(obj);
  });
  // console.log(newTeam);
  //Создал обект форму ответа прербрав новую команду
  const objectReply = {
    totalBudgetTeam: 0,
  };
  // console.log(objectReply);
  newTeam.map((worker) => {
    if (salaries.hasOwnProperty(worker.specialization)) {
      const objectKeyName = `totalBudget${worker.specialization}`;
      objectReply[objectKeyName] = 0;
    }
  });
  // console.log(objectReply);
  //перебрал точно так же чтоб добавить значения ключей ( при создании += не принимало)
  newTeam.map((worker) => {
    if (salaries.hasOwnProperty(worker.specialization)) {
      const objectKeyName = `totalBudget${worker.specialization}`;
      objectReply[objectKeyName] += worker.fullSalary;
    }
  });
  // перебрал еще раз чтоб посчитать полную зарплату команды и записал в ключ
  newTeam.map((employee) => {
    if (employee.fullSalary) {
      objectReply.totalBudgetTeam += employee.fullSalary;
    }
  });
  // финальный объект
  // console.log(objectReply);
  return objectReply;
}

// попытка1
// function calculateTeamFinanceReport(salaries, team) {
//   const value = team.map((s) => s.specialization);
//   console.log(value);
//   const sum = value.map(
//     (s) => (salaries[s].salary / 100) * Number.parseInt(1 + salaries[s].tax)
//   );
//   console.log(sum);
// }

// попытка 3
// function calculateTeamFinanceReport(salaries, team) {
//   const objectReply = {
//     totalBudgetTeam: 0,
//     };
//     console.log(object);
//     team.map(worker => {
//         if (salaries.hasOwnProperty(worker.specialization)) {
//           const objectKeyName = `totalBudget${worker.specialization}`;
//           object[objectKeyName] = 0;
//         }
//     })
//     console.log(object);
// }
