import mongoose from "mongoose";

const statusPagamentoSchema = mongoose.Schema(
    {
        id:{
            type:String
        },
        statusPagamento:{
            type:String,
            required:true
        }
    }
)

const status_pagamento = mongoose.model('status_pagamento', statusPagamentoSchema)

export default status_pagamento