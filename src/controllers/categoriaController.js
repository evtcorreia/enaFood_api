import categorias from "../models/Categoria.js"

class CategoriaController{

    static listarCategorias = async (req, res)=>{

        categorias.find((err, categorias)=>{
            res.status(200).json(categorias)
        })

    }

    static adicionaCategoria = async (req, res)=>{

        const categoria = new categorias(req.body)

        categoria.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar categoria`})
            }else{
                res.status(201).send(categoria.toJSON())
            }
        })

    }

    static buscaCategoriaPorId = async(req, res)=>{

        const { id } = req.params

        categorias.findById(id,(err, categorias)=>{
            if (err) {
                res.status(400).send({ message: `${err.message} - categoria nao encontrada` })
            } else {
                res.status(200).send(categoria)
            }
        })

    }

    static alteraCategoria = async(req, res)=>{

        const { id } = req.params;
        categorias.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "categoria atualizada com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })

    }

    static deletaCategoria = async(req, res)=>{

        const { id } = req.params;
        categorias.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Categoria removida sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })

    }
}

export default CategoriaController