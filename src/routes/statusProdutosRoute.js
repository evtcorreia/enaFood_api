import express from 'express';
import StatusProdutos from "../controllers/statusProdutosController.js";


const router = express.Router();

router
    .get('/stausProdutos', StatusProdutos.listaStatusProdutos)


export default router

