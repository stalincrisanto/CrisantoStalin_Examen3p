const db = require('../util/conexion.js');

exports.obtenerCategorias = result=>{
    db.query('SELECT * FROM categoria',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Categoria: ",res);
        result(null,res);
    });
}