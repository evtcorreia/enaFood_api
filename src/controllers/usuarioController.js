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

    static atualizarUsuario = (req, res) => {
        const { id } = req.params;
        usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Usuario atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaUsuario = (req, res) => {
        const { id } = req.params;
        usuarios.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Usuario removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
}


export default UsuarioController