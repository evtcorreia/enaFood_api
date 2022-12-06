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
}

export default PedidosController