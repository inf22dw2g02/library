// Incluir arquivo com as variaveis de ambiente
require('dotenv').config();

// Exportar as credencias do banco de dados
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_USER,
    database: process.env.DB_USER,
    host: process.env.DB_USER,
    dialect: process.env.DB_USER
  }
};
