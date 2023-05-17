// Incluir as bibliotecas
// Gerencia as requisicoes, rotas e urls, entre outras funcionalidades
const express = require('express');

// chamar a funcao express 
const router= express.Router();

// Incluir o arquivo que possui a conexao com a base de dados
const db = require('./../models');
const { where } = require('sequelize');


// criar rota get
router.get("/livro", async (req, res) => {
    const livro = await db.Livro.findAll({
        attributes: ['id', 'titulo', 'autorId', 'anoPublicacao']
    });

    if (livro){
        return res.json(livro);
    }else{
        return res.status(400).json({
            mensagem: "Erro: Nenhum Livro encontrado!"
        });
    } 
});


// criar rota post
router.post("/livro", async (req, res) => {
    try {
      const { titulo, autorId, anoPublicacao } = req.body;
      const {dados} = req.body;
      console.log(dados)

  
      // Cria um novo usuário no banco de dados
      const livro = await db.Livro.create({ titulo, autorId, anoPublicacao });
  
      // Retorna o novo usuário criado
      return res.json(livro);
    } catch (error) {
      // Retorna um erro caso ocorra algum problema
      return res.status(400).json({
        mensagem: "Erro ao criar livro!"
      });
    }
});
  

// criar rota get by id
router.get("/livro/:id", async (req, res) => {
    const {id} = req.params;
    const livro = await db.Livro.findOne({
        attributes: ['id', 'titulo', 'autorId', 'anoPublicacao'],
        where: {id},
    })

    if (livro) {
        return res.json(livro);
    }else{
        return res.status(404).json({ error: 'Livro não encontrado' });
    }
})

// criar a rota put 
router.put('/livro/:id', async (req, res) => {
    const {id} = req.params;
    var  { titulo, autorId, anoPublicacao } = req.body;
    await db.Livro.update({titulo: titulo, autorId: autorId, anoPublicacao: anoPublicacao}, {where:{id}})
    .then(()=>{
        return res.json({mensagem: 'Dados do livro atualizado'});
    }).catch(()=>{
        return res.status(404).json({error: 'Não foi possivel atualizar dados do Livro'});
    })
    
});
  
// 
router.delete('/livro/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await db.Livro.destroy({
        where: { id }
      });
      res.status(200).json({ message: 'Livro foi apagado' });
    } catch (error) {
      res.status(404).json({ message: 'Não foi possivel apagar o Livro' });
    }
});


module.exports = router;