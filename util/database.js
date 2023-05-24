const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-start',
    password:'218priya'
})

module.exports=pool.promise();