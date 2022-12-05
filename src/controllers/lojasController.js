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
}


export default LojaController