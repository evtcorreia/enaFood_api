import express from 'express';
import PedidosController from '../controllers/pedidosController.js';


const router = express.Router();


router
    .get("/pedidos", PedidosController.listaPedidos)


    export default router