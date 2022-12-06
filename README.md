# enaFood_api
 

API desenvolvida para sistema de deliverym ENAFOOD

##  Implementação

    O projeto foi desenvolvido utilizando Javascript,  e o ODM Mongoose  para realizar as conexoes e requisições com o banco de dados MongoDB
desenvolido utilizando o padrao MVC, a utilização do ODM mongoose se fez necessaria pela sua facilidade em criações de modelo e utilização das conjsultas para o mongoDB.
    Tambem foi utilizado no sistema o Express que se faz necessario devido as funcionalidade de requisições http, facilitando assim o processo de roteamneto da aplicação 
abaixo teremos uma explicação da aplicação e suass principais funcionalidades
    O banco de dados utilizando assim como informado anteriromente foi o mongoDB, para utilização foi utilizada uma versão em nuvem pela plataforma Atlas, para execução do projeto 
execute o na porta 3000 atraves do comando npm run dev.

###  Pré-requisitos

Para a execução do projeto são necessarias as seguintes ferramentas.

JavaScript
MongoDB
Express
NodeJs
Mongoose


 ### Classes

 Obs: todas as classes possuem a função de vincular o Model a uma coleção no banco de dados, utlizando schemas

Categorias: 
    Responsavel por gerencias as categorias de produtos no sistema

Sacola: 
    Gerencia os itens que fazem parte de um pedido

itensSacola: 
    Gerencia os itens que são inseridos nas sacolas no momento qm que o usuario inicia uma compra

Loja:
    Gerencia as lojas que são cadastradas no sistema ENAFFOD

Pagamentos:
    Gerencia todos os pagamentos que são recebvidos pelo sistema, aplicando um status apo pagamento

Pedido:
    Após o pagamento ser concluido é gerado uma referncia a sacola criada para o usuario junto a coleção de pedido

Status_Pagamento:
    Modelo responsavel pelos metodos de pagamento 

Staus_Produtos:
    Modelo de criação de status de produtos

Tipo Pagamentos:
    Modelo responsavel pelos tipos de pagamento disponiveis no sistema

Usuarios:
    Responsavel pelos Usuario que o sisme vai possuir, difinindo usuarios como clientes que utilizam o sistema



###  Controllers

Classes responsaveis pelo gerenciamento das informaçõe e regras de negocio da aplicação, todos os controllers recebem uma importacam  do controller correspondente a sua função
realizando operaçõe de inserção, atualização deleção e leitura das inmformações.


###  Routes

São os pontos de entrada da api, são responsaveis por estabelecer uma rota para cada requisição recebida pelo sistema, definindo para cada uma seu respectivo controller 






