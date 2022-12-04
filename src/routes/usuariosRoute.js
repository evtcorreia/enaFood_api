import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'

const router = express.Router()

router
    .get('/usuarios', UsuarioController.listaUsuarios)


export default router
