import express from "express";
//import livros from "./livrosRoutes.js";
//import autores from "./autoresRoutes.js"
import categorias from "./categoriasRoute.js"
import produtos from "./produtosRoute.js"
import statusProdutos from "./statusProdutosRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "ENAFOOD: V1 " })
    })

    app.use(
        express.json(),
        categorias,
        produtos,
        statusProdutos
       
    )
} 

export default routes;