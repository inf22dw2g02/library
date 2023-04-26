const Sequelize = require('sequelize');
const configDB = require('../config/database')
const UserModel = require('../models/User')
const connection = new Sequelize(configDB)

UserModel.init(connection)
module.exports = connection