import usuarios from "../models/Usuario.js";


class UsuarioController{

    static listaUsuarios = (req, res)=>{

        usuarios.find((err, usuarios)=>{
            res.status(200).json(usuarios)
        })
    }

    static cadastrarUsuario =(req, res)=>{
        
        let usuario = new usuarios(req.body);

        usuario.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao tentar realizar seu cadastro`})
            }else{
                res.status(201).send(usuario.toJSON())
            }
        })
    }
}


export default UsuarioController