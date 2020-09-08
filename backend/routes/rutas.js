module.exports = app=>{
    //Sede
    const infraestructura = require("../controllers/infraestructura_controlador.js");
    app.get("/sedes",infraestructura.encontrarSedes);
    /**app.get("/sedes/:cod_sede",infraestructura.encontrarSedeId);
    app.post("/sedes/",infraestructura.nuevaSede);
    app.put("/sedes/:cod_sede",infraestructura.modificarSede);
    app.delete("/sedes/:cod_sede",infraestructura.eliminarSede);**/
}