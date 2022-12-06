import lojas from "../models/Loja.js";

class LojaController{

    static listaLojas = (req, res)=>{

        lojas.find((err, lojas)=>{
            res.status(200).json(lojas)
        })
    }


    static cadastraLoja = async (req, res)=>{
        
        let loja = new lojas(req.body)

        loja.save((err)=>{
            if(err){

                res.status(500).send({message: `${err.message} - Nao foi possivel cadstrar a loja` })

            }else{
                res.status(201).send(loja.toJSON())
            }

        })
    }

    static listaProdutosPorLoja = async (req, res)=>{

        const id = '638d603141fab5af269d4e4b'

        lojas.findById({_id: id})
            .populate('produto')
            //.populate('categoria')
            //.populate('statusProdutos')                
            .exec((err, lojas)=>{
                res.status(200).json(lojas)
            })
    }
}


export default LojaController