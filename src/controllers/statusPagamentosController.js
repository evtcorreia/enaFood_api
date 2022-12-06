import status_pagamento from "../models/Status_Pagamento.js";


class StatussPagamento{


    static listarStatus = (req, res) => {

        livros.find()            
            .exec((err, status) => {

                res.status(200).json(status)
            })
    }


    static cadastraStatus = (req, res)=>{

        const status = new status_pagamento(req.body)

        status.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao gravar o novop status`})
            }else{
                res.status(200).send(status.toJSON())
            }
        })


    }

    static atualizarStatus = (req, res) => {
        const { id } = req.params;
        status_pagamento.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaStatus = (req, res) => {
        const { id } = req.params;
        status_pagamento.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
}

export default StatussPagamento