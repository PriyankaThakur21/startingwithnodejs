const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const cartItems = sequelize.define('cartItems',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

module.exports = cartItems;;
