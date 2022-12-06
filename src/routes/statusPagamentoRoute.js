import express from 'express'
import StatussPagamento from '../controllers/statusPagamentosController.js'



const router = express.Router()

router
    .post("/status-pagamento", StatussPagamento.cadastraStatus)
    .get("/status-pagamento", StatussPagamento.listarStatus)
    .put("/status-pagamento/:id", StatussPagamento.atualizarStatus)
    .delete("/status-pagamento/:id", StatussPagamento.deletaStatus)


    export default router