'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      Name: 'John',
      email: 'jhon@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Bruno',
      email: 'bruno@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Evinilson',
      email: 'evinilson@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Zidane',
      email: 'zidane@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Diogo',
      email: 'diogo@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Goncalo',
      email: 'goncalo@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Alessandro',
      email: 'alessandro@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'David',
      email: 'david@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Tiago',
      email: 'tiago@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Denilson',
      email: 'denilson@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Etson',
      email: 'etson@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Edgar',
      email: 'edgar@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Marcos',
      email: 'marcos@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Paulo',
      email: 'paulo@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Khamal',
      email: 'khamal@project.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
