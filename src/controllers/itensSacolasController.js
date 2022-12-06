import itensSacolas from "../models/itensSacola.js";


class ItensSacolas{


    static listaItens = async(req, res)=>{

        const { id } = req.params
        //const id = "638f0f1a55bf3c0a773cf585"

       itensSacolas.find()
        .limit(20)
        .populate({
            path:'sacola',
            populate:'usuario',
            
            match:{
                _id:id
            }
        })
        .populate({
            path:'produto',
            populate:{
                path: 'status'
            }
        })
        //.populate('status')
        .exec((err, items)=>{

           //console.log(items[0].sacola);
            const listaNaSacola  = []
            

            for(var i = 0; i < items.length;i++){

                try {
                    if(items[i].sacola !== null){

                        listaNaSacola.push(items[i])
                    }
                } catch (error) {
                    
                    
                    res.status(500).json({message: `${err.message} - aconteceu algum problema`})
                    return
                    
                }
                
                
            }
            res.status(200).json(listaNaSacola)
        })

    }

    static adicionaItems = async(req, res)=>{

        const itemSacola = new itensSacolas(req.body)

        

        

        itemSacola.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - aconteceu algum problema ao adicionar este item`})
            }else{
                res.status(201).send(itemSacola.toJSON())
            }
        })
    }

    static excluiItem = (req, res)=>{
        const { id } = req.params

        itensSacolas.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: "Item excluido da sacola"})

            }else{
                res.status(500).send({message: `${err.message} - nao foi possivel excluir o item da sacola`})
            }
        })        
    }

    static alteraQuantidade = (req, res)=>{
        const { id } = req.params
        const quantidade = req.body
        console.log(quantidade);

        itensSacolas.findByIdAndUpdate(id, { $set: quantidade}, (err)=>{
            if(!err){
                res.status(200).send({message: `item alterado com sucesso`})
            }else{
                res.status(500).send({message: `${err.message} - não foi possivel alterar a quantiodade de produtos`})
            }
        })
    }
}


export default ItensSacolas