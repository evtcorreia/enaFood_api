import mongoose from "mongoose";

const pagamentosSchema = mongoose.Schema(

    {
        id: {type:String},
        sacola:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'sacolas',
            required:true
        },
        data:{
            type:String,
            required:true
        },
        valor:{
            type:mongoose.Schema.Types.Decimal128
        },
        tipo_pagamento:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'tipo_pagamentos',
            required:true
        },
        status:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'status_pagamentos',
            required:true
        }
    }

)

const pagamentos = mongoose.model('pagamentos', pagamentosSchema)

export default pagamentos