import produtos from "../models/Produto.js";


class ProdutoController{



    static listaProdutos = (req, res)=>{

        produtos.find()
            .populate('loja')
            .populate('categoria')
            //.populate('statusProduto')                
            .exec((err, produtos)=>{
            res.status(200).json(produtos)
        })
    }

    static cadastraProduto = (req, res)=>{
        const produto = new produtos(req.body);

        produto.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadasrar o produto`})
            }else{
                res.status(201).send(produto.toJSON())
            }
        })
    }
}

export default ProdutoController