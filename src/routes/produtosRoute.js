import  express  from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();


router
    .get("/produtos", ProdutoController.listaProdutos)



export default router;
