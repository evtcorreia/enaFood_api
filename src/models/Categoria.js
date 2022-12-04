import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(

    {
        id: {type: String},
        categoria: {type: String, required: true},
        D_E_L_E_T: {type: String, requires:true}
    }
)

const categorias = mongoose.model('categorias', categoriaSchema)

export default categorias