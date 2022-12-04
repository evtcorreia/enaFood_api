import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(

    {
        id:{
            type:String
        },
        nome:{
            type:String,
            required:true,
        },
        cpf:{
            type:String,
            required: true
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
        },
        usuario:{
            type: String,
            required:true
        },
        senha:{
            type: String,
            required:true
        }


    }
)

const usuarios = mongoose.model("usuarios", usuarioSchema)

export default usuarios