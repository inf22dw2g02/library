'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Livro.belongsTo(models.Autor, { foreignKey: 'autorId' });
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    autorId: { // Adiciona a coluna autorId como chave estrangeira
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Autor', // Nome do modelo da tabela de autores
        key: 'id', // Coluna da tabela de autores a ser referenciada
      },
    },
    anoPublicacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};