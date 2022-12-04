import express from 'express'
import ItensSacolas from '../controllers/itensSacolasController.js'


const router = express.Router()


router
    .get('/lista-itens', ItensSacolas.listaItens)


export default router

