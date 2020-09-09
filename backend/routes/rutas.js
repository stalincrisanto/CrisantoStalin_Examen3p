module.exports = app=>{
    const categorias = require("../controllers/categorias_controller.js");
    const subcategorias = require("../controllers/subcategoriascontroller.js");
    app.get("/categorias",categorias.encontrarCategorias);
    app.get("/subcategorias/:cod_categoria",subcategorias.encontrarSubCategorias);
    /**app.get("/sedes/:cod_sede",infraestructura.encontrarSedeId);
    app.post("/sedes/",infraestructura.nuevaSede);
    app.put("/sedes/:cod_sede",infraestructura.modificarSede);
    app.delete("/sedes/:cod_sede",infraestructura.eliminarSede);**/
}