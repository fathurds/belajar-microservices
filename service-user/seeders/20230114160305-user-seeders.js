'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Fathurrachman',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'adminmicro@gmail.com',
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Doe',
        profession: 'Frontend Developer',
        role: 'student',
        email: 'johndoe@gmail.com',
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
