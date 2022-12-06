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

    static atualizarTipoPagamento = (req, res) => {
        const { id } = req.params;
        tipo_pagamentos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "TipoPagamento atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaTipoPagamento = (req, res) => {
        const { id } = req.params;
        tipo_pagamentos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "TipoPagamento removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
}


export default Tipo_PagamentoController