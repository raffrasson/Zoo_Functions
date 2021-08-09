const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((elem) => ids.includes(elem.id)); // filter cria um novo array com os elementos que retornem true no teste. No caso, o teste vê se o id do elemento está dentro dos ids passados por parâmetro.
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((el) => el.name === animal); // salva um objeto com os dados da espécie de animal passada por parâmetro.
  return specie.residents.every((el) => el.age > age); // retorna o resultado da comparação de idade dos animais da referida espécie.
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}; // se não for passado parametro, o retorno é um objeto vazio.
  }
  return data.employees.find((el) => el.firstName === employeeName || el.lastName === employeeName); // retorna o objeto que contenha o primeiro ou o segundo nome igual ao parametro passado.
}

function createEmployee(personalInfo, associatedWith) {
  const newCollab = { ...personalInfo, ...associatedWith }; // cria objeto com os parâmetros.
  return newCollab;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id)); // acessa as pessoas funcionárias e busca pelo id passado nos campos de pessoas gerentes.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { // cria objeto com dados da nova pessoa funcionária.
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  return data.species.find((typeOfAnimal) => typeOfAnimal.name === species).residents.length;
}

// if (species === undefined) {
//   let names = data.species.map((animal) => ` ${animal.name}: ${animal.residents.length}`);
//   names = { ...`${names.toString()}` };
//   return names;
// }
// return data.species.find((typeOfAnimal) => typeOfAnimal.name === species).residents.length;
// }

function calculateEntry(entrants) {
  // depois de muita dificuldade consegui achar o meu erro referenciando a solução do Leonardo Bermejo, da turma 14A.
  // minha falha foi não perceber a possibilidade de usar a notação objeto[chave] para acessar o valor da chave.
  if (entrants === undefined || Object.keys(entrants).length === 0) { // retorna 0 caso não haja parametro ou o objeto seja vazio (tamanho 0)
    return 0;
  }
  return Object.keys(entrants).reduce( // Object.keys faz um array, partindo do objeto passado, com o tipo de pessoa (adullto, idoso ou criança).
    (sum, person) => sum + (entrants[person] * data.prices[person]), 0, // Usando o tipo, podemos acessar o objeto-parametro e o objeto que guarda o preço, multiplicando-os e armazenando a soma num reduce.
  );
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((person) => person.id === id);
  const specie = data.species.find((animal) => animal.id === employee.responsibleFor[0]);
  const oldestAge = specie.residents.reduce((acc, res) => ((res.age > acc) ? res.age : acc), 0);
  const oldestAnimal = specie.residents.find((animal) => animal.age === oldestAge);
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

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
