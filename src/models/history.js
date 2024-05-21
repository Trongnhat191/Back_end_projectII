'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    customerId: DataTypes.STRING,
    fieldId: DataTypes.STRING,
    description: DataTypes.TEXT,
    files: DataTypes.TEXT,
    // timeType: DataTypes.STRING,
    // phonenumber: DataTypes.STRING,
    // gender: DataTypes.STRING,
    // image: DataTypes.STRING,
    // roleId: DataTypes.STRING,
    // positionId: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};