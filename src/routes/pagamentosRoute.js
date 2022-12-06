import express from 'express'
import PagamentoController from '../controllers/pagamentosController.js'



const router = express.Router()


router
    .get('/pagamentos', PagamentoController.listaPagamentos)
    .post('/pagamento', PagamentoController.fazerPagamento)
    .put('/pagamento/:id', PagamentoController.atualizarPagamento)
    .delete('/pagamento/:id', PagamentoController.deletaPagamento)



    export default router