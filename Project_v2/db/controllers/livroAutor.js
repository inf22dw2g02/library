const express = require('express');
const router = express.Router();
const { Livro, Autor } = require('../models');

router.get('/livrosAutor/:Id', async (req, res) => {
  try {
    const { Id } = req.params;

    const autor = await Autor.findByPk(Id);

    if (!autor) {
      return res.status(404).json({ error: 'Autor não encontrado' });
    }

    const livros = await Livro.findAll({
      where: {autorId: Id},
      attributes: ['id', 'titulo', 'anoPublicacao'],
    });

    return res.json(livros);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar os livros do autor' });
  }
});

module.exports = router;
