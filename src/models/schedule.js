'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Schedule.init({
        status: DataTypes.BOOLEAN,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        fieldId: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};