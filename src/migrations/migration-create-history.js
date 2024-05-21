// statusId: DataTypes.STRING,
//     fieldId: DataTypes.STRING,
//     customerId: DataTypes.STRING,
//     date: DataTypes.DATE,
//     timeType: DataTypes.STRING
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('history', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.STRING
            },
            fieldId: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            files: {
                type: Sequelize.TEXT
            },
            createdAt:{
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt:{
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('history');
    }
};