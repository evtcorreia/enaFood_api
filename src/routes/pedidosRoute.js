import express from 'express';
import PedidosController from '../controllers/pedidosController.js';


const router = express.Router();


router
    .get("/pedidos", PedidosController.listaPedidos)
    .post("/pedido",PedidosController.adicionaPedido )
    .put('/pedido/:id', PedidosController.atualizarPedido)
    .delete('/pedido/:id', PedidosController.deletaPedido)



    export default router