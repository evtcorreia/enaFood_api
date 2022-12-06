import express from 'express'
import StatussPagamento from '../controllers/statusPagamentosController.js'



const router = express.Router()

router
    .post("/status-pagamento", StatussPagamento.cadastraStatus)


    export default router