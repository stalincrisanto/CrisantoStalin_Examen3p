const Categorias = require('../models/categorias.js');

exports.encontrarCategorias = (req,res)=>{
    Categorias.obtenerCategorias((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else
        {
            res.send(data);
        }
    });
};