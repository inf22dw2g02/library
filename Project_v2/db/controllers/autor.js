// Incluir as bibliotecas
// Gerencia as requisicoes, rotas e urls, entre outras funcionalidades
const express = require('express');

// chamar a funcao express 
const router= express.Router();

// Incluir o arquivo que possui a conexao com a base de dados
const db = require('./../models');
const { where } = require('sequelize');


// criar rota get
router.get("/autor", async (req, res) => {
    const autor = await db.Autor.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'nacionalidade']
    });

    if (autor){
        return res.json(autor);
    }else{
        return res.status(400).json({
            mensagem: "Erro: Nenhum Autor encontrado!"
        });
    } 
});


// criar rota post
router.post("/autor", async (req, res) => {
    try {
      const { nome, sobrenome, nacionalidade } = req.body;
      const {dados} = req.body;
      console.log(dados)
 
      const autor = await db.Autor.create({ nome, sobrenome, nacionalidade });
  
      return res.json(autor);
    } catch (error) {
      return res.status(400).json({
        mensagem: "Erro ao criar Autor!"
      });
    }
});
  

// criar rota get by id
router.get("/aurtor/:id", async (req, res) => {
    const {id} = req.params;
    const aurtor = await db.Autor.findOne({
        attributes: ['id', 'nome', 'sobrenome', 'nacionalidade'],
        where: {id},
    })

    if (aurtor) {
        return res.json(aurtor);
    }else{
        return res.status(404).json({ error: 'Autor não encontrado' });
    }
})

// criar a rota put 
router.put('/autor/:id', async (req, res) => {
    const {id} = req.params;
    var  { nome, sobrenome, nacionalidade } = req.body;
    await db.Autor.update({nome: nome, sobrenome: sobrenome, nacionalidade: nacionalidade}, {where:{id}})
    .then(()=>{
        return res.json({mensagem: 'Dados do Autor atualizado'});
    }).catch(()=>{
        return res.status(404).json({error: 'Não foi possivel atualizar dados do Autor'});
    })
    
});
  
// 
router.delete('/autor/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await db.Autor.destroy({
        where: { id }
      });
      res.status(200).json({ message: 'Autor foi apagado' });
    } catch (error) {
      res.status(404).json({ message: 'Não foi possivel apagar o Autor' });
    }
});


module.exports = router;