import express from 'express'
import Tipo_PagamentoController from '../controllers/tipoPgamentosController.js';


const router = express.Router();

router
    .get("/tipos-pagamentos", Tipo_PagamentoController.listarPagamentos)
    .post("/tipo_pagamento", Tipo_PagamentoController.inserirTipoPagamento)
    .delete("/tipo_pagamento/:id", Tipo_PagamentoController.deletaTipoPagamento)
    .put("/tipo_pagamento/:id", Tipo_PagamentoController.atualizarTipoPagamento)


    export default router