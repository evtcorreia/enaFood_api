import mongoose from "mongoose";

const statusPedidoSchema = mongoose.Schema(
    {
        id:{
            type:String
        },
        status:{
            type:String
        }
    }
)

const status_pedidos = mongoose.model('status_pedidos', statusPedidoSchema);

export default status_pedidos