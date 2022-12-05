import express from 'express';
import StatusProdutos from "../controllers/statusProdutosController.js";


const router = express.Router();

router
    .get('/statusProdutos', StatusProdutos.listaStatusProdutos)
    .post('/stausProdutos', StatusProdutos.cadastraStatus)


export default router

