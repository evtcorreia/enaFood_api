import express from 'express';
import SacolaController from '../controllers/sacolaController.js';


const router = express.Router();

router
    .get('/sacolas', SacolaController.listaSacolas )
    .post('/sacola', SacolaController.criaSacola )
    .get('/sacola/abertas/:usuario', SacolaController.listaSacolasAbertas )
    .delete('/sacola/:id', SacolaController.deletaSacola)


    export default router