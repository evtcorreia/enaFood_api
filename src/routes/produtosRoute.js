import  express  from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();


router
    .get("/produtos/:id", ProdutoController.listaProdutos)
    .post("/produto", ProdutoController.cadastraProduto)
    .put("/produto/:id", ProdutoController.atualizarProduto)
    .delete("/produto/:id", ProdutoController.deletaProduto)



export default router;
