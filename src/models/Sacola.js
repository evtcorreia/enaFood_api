import mongoose from "mongoose";

const sacolaSchema = mongoose.Schema(

    {
        id:{
            type:String
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuarios',
            required: true
        },
        loja:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'lojas',
            required:true
        },
        total:{
            type: mongoose.Schema.Types.Decimal128,
            required:true
        }
    }
)

const sacolas = mongoose.model('sacolas', sacolaSchema)

export default sacolas