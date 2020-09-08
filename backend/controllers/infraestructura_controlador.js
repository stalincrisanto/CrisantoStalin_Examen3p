const Sede = require('../models/infraestructura.js');
//SEDES
exports.encontrarSedes = (req,res)=>{
    Sede.obtenerSedes((err,data)=>{
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

exports.encontrarSedeId = (req,res)=>{
    Sede.obtenerSedeId(req.params.cod_sede,(err,data)=>{
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(404).send({
                    message: `No se encuenta la sede con el Código: ${req.params.cod_sede}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "Error al recuperar la sede con el código: "+ req.params.cod_sede
                });
            }
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevaSede = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const sede = {
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        codigo_postal: req.body.codigo_postal
    }
    Sede.agregarSede(sede,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar nueva Sede"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarSede = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const sede = {
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        codigo_postal: req.body.codigo_postal
    }
    Sede.modificarSedeId(
        req.params.cod_sede,
        sede,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentra el producto con el codigo ${req.params.cod_sede}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar la sede con el código: "+req.params.cod_sede
                    });
                }
            }
            else
            {
                res.send(data);
            }
        }
    );
};

exports.eliminarSede = (req,res)=>{
    Sede.removerSede(req.params.cod_sede,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado la sede con el código: ${req.params.cod_sede}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar la sede: "+req.params.cod_sede
                });
            }
        }
        else
        {
            res.send({message:`Sede eliminado correctamente`});
        }
    });
}