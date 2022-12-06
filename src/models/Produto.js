import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(

    {
        id: {type: String},
        produto: {
            type:String, 
            required: true
        },
        valor: {
            type: mongoose.Types.Decimal128,
            required: true
        },
        status: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"statusProdutos",
            required:true
        },
        estoque:{
            type: Number,
            required: true
        },
        categoria:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"categorias",
            required:true
        },
        loja:{
            type: String,
            /* type:mongoose.Schema.Types.ObjectId,
            ref:"lojas", */
            required:true
        },

        D_E_L_E_T: {
            type: String
        }
    }
)


const produtos = mongoose.model('produtos', produtoSchema);

export default produtos

