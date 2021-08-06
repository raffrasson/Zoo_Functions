const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((elem) => ids.includes(elem.id)); // filter cria um novo array com os elementos que retornem true no teste. No caso, o teste vê se o id do elemento está dentro dos ids passados por
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((el) => el.name === animal);
  return specie.residents.every((el) => el.age > age);
}

// const specie = data.species.find((el) => el.name === animal);
//   const nameCheck = (a) => a.name === animal;
//   const ageCheck = (x) => x.residents.every((resident) => resident.age > age);
//   if (nameCheck(specie) === true && ageCheck(specie) === true) {
//     return true;
//   }
//   return false;
// }

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}; // se não for passado parametro, o retorno é um objeto vazio
  }
  return data.employees.find((el) => el.firstName === employeeName || el.lastName === employeeName); // retorna o objeto que contenha o primeiro ou o segundo nome igual ao parametro passado
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
