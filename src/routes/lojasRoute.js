import express from 'express'
import LojaController from "../controllers/lojasController.js";

const router = express.Router()

router
    .get('/lojas', LojaController.listaLojas)
    .post('/loja', LojaController.cadastraLoja)
    .get('/loja/produtos', LojaController.listaProdutosPorLoja)
    .put('/loja/:id', LojaController.atualizaLoja)
    .delete('/loja/:id', LojaController.deletaLoja)


    export default router