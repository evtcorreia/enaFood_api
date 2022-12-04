import express from 'express';
import SacolaController from '../controllers/sacolaController.js';


const router = express.Router();

router
    .get('/sacolas', SacolaController.listaSacolas )


    export default router