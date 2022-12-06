import express from 'express'
import ItensSacolas from '../controllers/itensSacolasController.js'


const router = express.Router()


router

    .get('/lista-itens/:id', ItensSacolas.listaItens)
    .post('/adiciona-item', ItensSacolas.adicionaItems)
    .delete('/item/:id', ItensSacolas.excluiItem)
    .put('/item/quantidade/:id', ItensSacolas.alteraQuantidade)


export default router

