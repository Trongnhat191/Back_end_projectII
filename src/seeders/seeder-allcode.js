'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('allcode', [{
      key:'1',
      type:'2',
      value:'3'
    }]);
  },//up là việc thêm dữ liệu như bình thường
  //còn down dùng cho việc roll back. Ví dụ là khi bị lỗi có thể back lại

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
