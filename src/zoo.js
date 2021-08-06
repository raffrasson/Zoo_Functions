const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((elem) => ids.includes(elem.id)); // filter cria um novo array com os elementos que retornem true no teste. No caso, o teste vê se o id do elemento está dentro dos ids passados por
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((el) => el.name === animal); // salva um objeto com os dados da espécie de animal passada por parâmetro.
  return specie.residents.every((el) => el.age > age); // retorna o resultado da comparação de idade dos animais da referida espécie
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}; // se não for passado parametro, o retorno é um objeto vazio
  }
  return data.employees.find((el) => el.firstName === employeeName || el.lastName === employeeName); // retorna o objeto que contenha o primeiro ou o segundo nome igual ao parametro passado
}

function createEmployee(personalInfo, associatedWith) {
  const newCollab = { ...personalInfo, ...associatedWith }; // cria objeto com os parâmetros.
  return newCollab;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id)); // acessa os funcionários e busca pelo id passado nos campos de gerentes.
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
