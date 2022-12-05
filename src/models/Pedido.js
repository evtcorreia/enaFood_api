import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema(
    {
        id:{
            type:String
        },

        pagamento:{
            type:mongoose.Types.ObjectId,
            ref:'pagamentos',
            required:true
        },
        sacola:{
            type:mongoose.Types.ObjectId,
            ref:'sacolas',
            required:true
        },
        logradouro:{
            type: String,
            required:true
        },
        bairro:{
            type: String,
            required:true
        },
        cidade:{
            type: String,
            required:true
        },
        numero:{
            type: String,
            required:true
        },
        uf:{
            type: String,
            required:true
        },
        cep:{
            type: String,
            required:true
        },
        referencia:{
            type: String,
            required:true
        },
        telefone:{
            type: String,
            required:true
        }
    }
)

const pedidos = mongoose.model('pedidos', pedidoSchema)

export default pedidos