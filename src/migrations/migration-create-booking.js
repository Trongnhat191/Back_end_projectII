// statusId: DataTypes.STRING,
//     fieldId: DataTypes.STRING,
//     customerId: DataTypes.STRING,
//     date: DataTypes.DATE,
//     timeType: DataTypes.STRING
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('booking', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            statusId: {
                type: Sequelize.STRING
            },
            fieldId: {
                type: Sequelize.STRING
            },
            customerId: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            timeType: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('booking');
    }
};