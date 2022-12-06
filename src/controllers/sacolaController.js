import sacolas from "../models/Sacola.js";
import ItensSacolas from "./itensSacolasController.js";

class SacolaController{


    static listaSacolas = (req, res)=>{
        sacolas.find()
            .populate('usuario')
            .populate('loja')
            .exec((err, sacolas) => {

                res.status(200).json(sacolas)
            })
    }
    
    
    static criaSacola = (req, res)=>{
        
        const sacola = new sacolas(req.body);

        sacola.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - voce nao pegou uma sacola no caixa, pegue uma!!!`})
            }else{
                res.status(201).send(sacola.toJSON())
            }
        })
    }

    static listaSacolasAbertas = (req, res)=>{

        //const usuario = "638d4a13cbb37475b8c79b17";
        const { usuario } = req.body

        

        sacolas.find()
            .populate(/* 'usuario', {_id: usuario, nome:1 } */
            {
                path:'usuario',
              
                match:{
                    _id: usuario
                }
            }
            )
            //.populate('')
            .populate('loja')
            .exec((err, sacolas) => {

                try {

                    const usuarioSacola = (sacolas[0].usuario._id.valueOf())

                } catch (err) {
                    
                    res.status(500).send({message: `${err.message} - nao foi possivel encontarr uma sacola vinculada ao seu usuario`})
                    return
                }

                res.status(200).json(sacolas)
            })
    }

    static deletaSacola = (req, res)=>{
        const { id } = req.params

        sacolas.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message:"Sacola removida com sucesso"})
                
            }else{
                res.status(500).send({message: "nao foi possivel"}) 
            }
        })
    }

    
}

export default SacolaController