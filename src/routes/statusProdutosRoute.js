import express from 'express';
import StatusProdutos from "../controllers/statusProdutosController.js";


const router = express.Router();

router
    .get('/statusProdutos', StatusProdutos.listaStatusProdutos)
    .post('/stausProdutos', StatusProdutos.cadastraStatus)
    .put('/stausProdutos/:id', StatusProdutos.atualizarStatus)
    .delete('/stausProdutos/:id', StatusProdutos.deletaStatus)


export default router

