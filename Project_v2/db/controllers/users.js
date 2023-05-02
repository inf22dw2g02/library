// Incluir as bibliotecas
// Gerencia as requisicoes, rotas e urls, entre outras funcionalidades
const express = require('express');

// chamar a funcao express 
const router= express.Router();

// Incluir o arquivo que possui a conexao com a base de dados
const db = require('./../models')


// criar rota get
router.get("/users", async (req, res) => {
        //Listar todos os usuarios do banco de dados
        const users = await db.Users.findAll({

            //Indicar quais colunas Listar
            attributes: ['id', 'name', 'email'],

            //Ordenar os registos pela coluna id na forna decrescente
            order:[['id', 'DESC' ]] 
        });

        // Acessa o IF se encontrar o registo no banco de dados
        if (users){
            // Pausar o processamento e retornar os dados em formato de objecto
            return res.json({
                users
            });

        }else{
            // Pausar o processamento e retornar o erro
            return res.status(400).json({
                mensagem: "Erro: Nenhum usuario encontrado!"
            });
        } 
});


// Tem que se criar a rota para registo
// Endereco para acessar atraves da aplicacao externa http://localhost:8080/users
/*
A aplicacao externa deve indicar que esta enviando em formato objeto
para isso vamos a header e colocamos:
Content-Type: application/json

De seguida vamos ao body colocamos em raw depois em formato json
// Dados em formato do objecto
{
    "name": "Bruno",
    "email" "bruno@project.com"
}
*/
router.post("/users", async (req, res) => {

    //RECEBER OS DADOS ENVIADOS NO CORPO DA REQUISICAO
    var dados = req.body;
    console.log(dados);

    // Guardar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objecto
        return res.json({
            mensagem: "Usuario registado com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        // Pausar o processamento e retornar o erro
        return res.json({
            mensagem: "Erro: Usuario nao registado com sucesso!"
        });
    });    
});

module.exports = router;