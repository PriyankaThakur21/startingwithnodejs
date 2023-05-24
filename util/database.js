const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-start', 'root', '218priya', {
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize;