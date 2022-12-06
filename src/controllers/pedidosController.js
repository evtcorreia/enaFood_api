import pedidos from "../models/Pedido.js";
import ItensSacolas from "./itensSacolasController.js";

class PedidosController{

    static listaPedidos = async (req, res)=>{
        
        pedidos.find()
        .populate('pedido')
        .exec((err, pedidos)=>{
            res.status(200).json(pedidos)
        })
    }

    static adicionaPedido(req, res){

        const pedido = new pedidos(req.body)

        pedido.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - nao foi possivel cadastrar a venda verifique as informações`})
            }else{

                console.log(pedido.sacola.valueOf());
                ItensSacolas.itensSacola(pedido.sacola.valueOf())
                res.status(201).send(pedido.toJSON())
            }
        })

    }

    static atualizarPedido = (req, res) => {
        const { id } = req.params;
        pedidos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pedido atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaPedido = (req, res) => {
        const { id } = req.params;
        pedidos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pedido removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
}

export default PedidosController