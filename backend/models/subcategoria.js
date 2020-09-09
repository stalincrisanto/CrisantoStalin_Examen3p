const db = require('../util/conexion.js');

exports.obtenerSubcategorias = (cod_categoria,result)=>{
    db.query('SELECT * FROM subcategoria WHERE COD_CATEGORIA=?',[cod_categoria],(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Sede: ",res);
        result(null,res);
    });
}