'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    image: DataTypes.STRING,
    move1cost1: DataTypes.STRING,
    move1cost2: DataTypes.STRING,
    move1name: DataTypes.STRING,
    move1power: DataTypes.STRING,
    move2cost1: DataTypes.STRING,
    move2cost2: DataTypes.STRING,
    move2cost3: DataTypes.STRING,
    move2name: DataTypes.STRING,
    move2power: DataTypes.STRING,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreatcost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps: false
  });
  return Pokemon;
};