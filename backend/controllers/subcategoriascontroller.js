const Subcategoria = require('../models/subcategoria.js');

exports.encontrarSubCategorias= (req,res)=>{
    Subcategoria.obtenerSubcategorias(req.params.cod_categoria,(err,data)=>{
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
