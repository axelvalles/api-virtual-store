const {Sequelize} = require('sequelize')
const {database} = require('./config')

const sequelize = new Sequelize(
    database.db,
    database.user,
    database.pass,
    {
        host:database.host,
        dialect: 'mysql'
    }
)

module.exports = sequelize