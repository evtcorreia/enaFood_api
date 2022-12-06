import status_pedidos from "../models/Status_Pedido.js";


class Status_PedidoController{

    static listaStatusPedido = async (req, res)=>{

        status_pedidos.find()        
            .exec((err, status) => {

            res.status(200).json(status)
        })
    }


    static cadastrarStatusPedido = (req, res) => {
        let status_pedido = new status_pedidos(req.body);

        status_pedido.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar status_pedidos` })
            } else {
                res.status(201).send(status_pedido.toJSON())
            }
        })
    }

    static atualizarStatusPedido = (req, res) => {
        const { id } = req.params;
        status_pedidos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaStatusPedido = (req, res) => {
        const { id } = req.params;
        status_pedidos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
}


export default Status_PedidoController