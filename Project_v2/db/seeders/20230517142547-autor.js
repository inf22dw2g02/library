'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Autors', [{
      nome: 'John',
      sobrenome: 'Doe',
      nacionalidade: 'Americano',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Gaspar',
      sobrenome: 'Teixeira',
      nacionalidade: 'Frances',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Rosalia',
      sobrenome: 'Melo',
      nacionalidade: 'Italiana',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Jose',
      sobrenome: 'Barros',
      nacionalidade: 'Caboverdiano',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Baltasar',
      sobrenome: 'Lopes',
      nacionalidade: 'Caboverdiano',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Paulo',
      sobrenome: 'Pinto',
      nacionalidade: 'Portugues',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Joao',
      sobrenome: 'De Burgo',
      nacionalidade: 'Espanhol',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Chamber',
      sobrenome: 'Devour',
      nacionalidade: 'Frances',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Ze',
      sobrenome: 'Catota',
      nacionalidade: 'Portugues',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Djonsa',
      sobrenome: 'Mendonsa',
      nacionalidade: 'Cubano',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Zeca',
      sobrenome: 'Lopes',
      nacionalidade: 'Portugues',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'David',
      sobrenome: 'Jones',
      nacionalidade: 'Americano',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Autors', null, {});
  }
};