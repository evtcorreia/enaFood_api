import mongoose from "mongoose";

const itensSacolaSchema = mongoose.Schema(

    {
        id:{
            type:String
        },
        sacola:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'sacolas',
            required: true,
        },
        produto:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'produtos',
            required: true,
        },
        quantidade:{
            type:Number,
            required: true
        },
        valor:{
            type:mongoose.Schema.Types.Decimal128,
            required: true
        }
    }
)

const itensSacolas = mongoose.model('itensSacolas', itensSacolaSchema)

export default itensSacolas