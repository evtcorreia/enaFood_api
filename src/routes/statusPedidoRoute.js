import express from 'express'
import Status_PedidoController from '../controllers/statusPedidoController.js'


const router =  express.Router()

router
    .get('/lista-status-pedidos', Status_PedidoController.listaStatusPedido)
    .put('/lista-status-pedidos/:id', Status_PedidoController.atualizarStatusPedido)
    .post('/lista-status-pedidos', Status_PedidoController.cadastrarStatusPedido)
    .delete('/lista-status-pedidos/:id', Status_PedidoController.deletaStatusPedido)


export default router