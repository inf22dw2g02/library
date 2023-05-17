const express = require('express');
const router = express.Router();
const { Livro, Autor } = require('../models');

router.get('/autorlivro/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const livro = await Livro.findByPk(id, {
      attributes: ['autorId'],
    });

    if (livro) {
      const autor = await Autor.findByPk(livro.autorId, {
        attributes: ['id', 'nome', 'sobrenome', 'nacionalidade'],
      });

      if (autor) {
        return res.json(autor);
      } else {
        return res.status(404).json({ error: `Autor do livro${id} não encontrado` });
      }
    } else {
      return res.status(404).json({ error: `Livro${id} não encontrado`});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Erro ao buscar o autor do livro${id}` });
  }
});

module.exports = router;
