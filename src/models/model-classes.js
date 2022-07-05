'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      classes.hasMany(models.students, {foreignKey: 'class_id', as: 'a'})
    }
  }
  classes.init({
    id: DataTypes.INTEGER,
    classcode: DataTypes.STRING,
    classname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};