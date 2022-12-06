import pagamentos from "../models/Pagamentos.js";

class PagamentoController{


    static listaPagamentos = async (req, res)=>{

        console.log('pagamentos');
    }


    static fazerPagamento = (req, res)=>{

        const pagamento = new pagamentos(req.body)

        pagamento.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o pagamento`})
            }else{
                res.status(201).send(pagamento.toJSON())
            }
        })
    }

    
        

}

export default PagamentoController