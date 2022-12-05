import mongoose from "mongoose";


const tipoPagamentoSchema = mongoose.Schema(

    {
        id:{
            type:String
        },
        tipo_pagamento:{
            type:String,
            required:true
        }
    }
)

const tipo_pagamentos = mongoose.model('tipo_pagamentos', tipoPagamentoSchema)

export default tipo_pagamentos