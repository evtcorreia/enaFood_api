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

    static atualizarPagamento = (req, res) => {
        const { id } = req.params;
        pagamentos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pagamentoo com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static deletaPagamento = (req, res) => {
        const { id } = req.params;
        pagamentos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pagamento removido com sucesso" })
            } else {
                res.send(500).send(err.message)
            }
        })
    }
    
        

}

export default PagamentoController