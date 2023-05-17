// Incluir as bibliotecas
// Gerencia as requisicoes, rotas e urls, entre outras funcionalidades
const express = require('express');

// chamar a funcao express 
const router= express.Router();

// Incluir o arquivo que possui a conexao com a base de dados
const db = require('./../models');
const users = require('../models/users');
const { where } = require('sequelize');


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
        return res.json(users);

    }else{
        // Pausar o processamento e retornar o erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum usuario encontrado!"
        });
    } 
});


// criar rota post
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

// criar rota get by id
router.get("/users/:id", async (req, res) => {
    const {id} = req.params;

    const user = await db.Users.findOne({
        attributes: ['id', 'name', 'email'],

        where: {id},
    })


    if (user) {
        return res.json(user);

    }else{
        return res.status(404).json({ error: 'User not found' });
    }
})

// criar a rota put (atualizar o usuario)  
router.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    var  { name, email} = req.body;
    await db.Users.update({name: name, email: email}, {where:{id}})
    .then(()=>{
        return res.json({message: 'User has been updated'});
    }).catch(()=>{
        return res.status(400).json({error: 'User has not been updated'});
    })
    
});
  

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await db.Users.destroy({
        where: { id }
      });
      res.status(200).json({ message: 'User has been deleted' });
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
});
  
  
  
  


module.exports = router;