import express from "express";
import CategoriaController from "../controllers/categoriaController.js";


const  router = express.Router();

router
    .get("/categorias",CategoriaController.listarCategorias)
    .get("/categoria/:id", CategoriaController.buscaCategoriaPorId)
    .post("/categoria", CategoriaController.adicionaCategoria)
    .put("/categoria/:id", CategoriaController.alteraCategoria)
    .delete("/categoria/:id", CategoriaController.deletaCategoria) 





export default router;