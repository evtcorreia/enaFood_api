import express from 'express'
import Status_PedidoController from '../controllers/statusPedidoController.js'


const router =  express.Router()

router
    .get('/lista-status-pedidos', Status_PedidoController.listaStatus)


export default router