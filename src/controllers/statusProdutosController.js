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
}


export default StatusProdutos