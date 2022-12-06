import express from "express";
import categorias from "./categoriasRoute.js"
import produtos from "./produtosRoute.js"
import statusProdutos from "./statusProdutosRoute.js"
import usuarios from "./usuariosRoute.js"
import sacolas from "./sacolasRoute.js"
import itensSacolas from "./itensSacolasRoute.js"
import pagamentos from "./pagamentosRoute.js"
import tipoPagamento from "./tipoPagamentosRoute.js"
import statusPedido from "./statusPedidoRoute.js"
import pedidos from "./pedidosRoute.js"
import lojas from "./lojasRoute.js"
import statusPagamento from "./statusPagamentoRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "ENAFOOD: V1 " })
    })

    app.use(
        express.json(),
        categorias,
        produtos,
        statusProdutos,
        usuarios,
        sacolas,
        itensSacolas,
        pagamentos,
        tipoPagamento,
        statusPedido, 
        pedidos,
        lojas,
        statusPagamento
       
    )
} 

export default routes;