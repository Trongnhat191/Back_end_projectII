'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '123456',
      firstName: 'John',
      lastName: 'Doe',
      address: 'PhuTho',
      phonenumber:'123456',
      gender: true,
      image:'1',
      roleId:'1',
      positionId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
