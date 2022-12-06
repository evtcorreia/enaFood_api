import produtos from "../models/Produto.js";


class ProdutoController{



    static listaProdutos = (req, res)=>{

        const {id} = req.params
        produtos.find( {loja: id})
            .where('estoque').gt(0)
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

    static abataerEstoque = (lista)=>{

        
       
        console.log(lista[0].quantidadePedido);


        for(var i = 0; i < lista.length;i++){
            produtos.findById(lista[i].idProduto)
                .exec((err, produto)=>{
         
            
            
            const estoqueAtual = produto.estoque - parseInt(lista[0].quantidadePedido)
            const id = produto._id.valueOf()

            const estoque  = parseInt(estoqueAtual)

            console.log('lista');
                    console.log(id);

            produtos.findByIdAndUpdate(id, { estoque: estoque}, (err)=>{
                if(!err){

                    console.log( {message:  'produto alterado com sucesso'})
                    
                }else{
                    return console.log( {message:  `${err.message} - não foi possivel alterar a quantiodade de produtos` })
                }
            })

        })

        }

        
    }

    static atualizarProduto = (req, res) => {
        const { id } = req.params;
        produtos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Produto atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaProduto = (req, res) => {
        const { id } = req.params;
        produtos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Produto removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
    
}

export default ProdutoController