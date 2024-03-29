'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associação com o modelo Livro
      Autor.hasMany(models.Livro, { foreignKey: 'autorId' });
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    nacionalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};