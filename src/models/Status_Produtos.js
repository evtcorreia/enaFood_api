import mongoose from "mongoose";

const statusProdutoSchema = new mongoose.Schema(
    {
        id:{
            type:String
        },
        status:{
            type:String,
            required: true
        }
    }
)

const statusProdutos = mongoose.model("statusProdutos", statusProdutoSchema)

export default statusProdutos