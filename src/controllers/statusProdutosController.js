import statusProdutos from "../models/Status_Produtos.js";


class StatusProdutos{

    static listaStatusProdutos = (req, res)=>{

        statusProdutos.find((err, statusProdutos)=>{
            res.status(200).json(statusProdutos)
        })
    }

    static cadastraStatus = (req, res)=>{

        const statusProduto = new statusProdutos(req.body);

        statusProduto.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadstrar uma categoria`})
            }else{
                res.status(201).send(statusProduto.toJSON())
            }
        })
    }

    static atualizarStatus = (req, res) => {
        const { id } = req.params;
        statusProdutos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaStatus = (req, res) => {
        const { id } = req.params;
        statusProdutos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Status removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }

    
}


export default StatusProdutos