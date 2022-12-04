import express from "express";
//import livros from "./livrosRoutes.js";
//import autores from "./autoresRoutes.js"
import categorias from "./categoriasRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "ENAFOOD: V1 " })
    })

    app.use(
        express.json(),
        categorias
       
    )
} 

export default routes;