import mongoose from "mongoose";


const lojaSchema = mongoose.Schema(
    {
        id:{
            type:String
        },
        loja:{
            type:String,
            required:true
        },
        cidade:{
            type:String,
            required:true
        },
        uf:{
            type:String,
            required:true
        }
    }
)

const lojas = mongoose.model('lojas', lojaSchema)

export default lojas