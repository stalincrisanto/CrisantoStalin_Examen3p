const mysql = require('mysql2');

const mysqlConexion = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'colegioresp',
    password:''
});

module.exports = mysqlConexion;