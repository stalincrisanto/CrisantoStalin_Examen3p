const mysql = require('mysql2');

const mysqlConexion = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'examen3',
    password:''
});

module.exports = mysqlConexion;