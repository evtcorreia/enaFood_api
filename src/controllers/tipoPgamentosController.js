import tipo_pagamentos from "../models/Tipo_Pagamento.js";

class Tipo_PagamentoController{

    static listarPagamentos = async (req, res)=>{
        
        tipo_pagamentos.find()
        .exec((err, tipo)=>{
            res.status(200).json(tipo)
        })
    }

    static inserirTipoPagamento = (req, res)=>{

        const tipo = new tipo_pagamentos(req.body)

        tipo.save((err)=>{

            if(err){

                res.status(500).send({message: `${err.message} - nao foi possivel criar um novo tipo de pagamento`})

            }else{
                res.status(201).send(tipo.toJSON())
            }
        })
    }
}


export default Tipo_PagamentoController