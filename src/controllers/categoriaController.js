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

        categorias.findById

    }

    static alteraCategoria = async(req, res)=>{

    }

    static deletaCategoria = async(req, res)=>{

    }
}

export default CategoriaController