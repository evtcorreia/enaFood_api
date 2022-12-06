import status_pagamento from "../models/Status_Pagamento.js";


class StatussPagamento{


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
}

export default StatussPagamento