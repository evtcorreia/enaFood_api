import produtos from "../models/Produto.js";


class ProdutoController{



    static listaProdutos = (req, res)=>{

        const {id} = req.params
        produtos.find( {loja: id})
            //.populate('loja' /* {_id:id} */ )
            //.populate('categoria')
            //.populate('statusProdutos')                
            .exec((err, produtos)=>{

            console.log(produtos);
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