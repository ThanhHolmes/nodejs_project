'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      students.belongsTo(models.classes, {foreignKey: 'class_id', as: 'b'})
    }
  }
  students.init({
    id: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};