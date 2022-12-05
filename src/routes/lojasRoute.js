import express from 'express'
import LojaController from "../controllers/lojasController.js";

const router = express.Router()

router
    .get('/lojas', LojaController.listaLojas)
    .post('/loja', LojaController.cadastraLoja)


    export default router