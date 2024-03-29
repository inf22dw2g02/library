const express = require('express');
const app = express();
const passport = require('passport');
const router = express.Router();

// Incluir o arquivo users em models
const { User } = require('../db/models/users');

const users = require('../db/controllers/users');
const livro = require('../db/controllers/livro');
const autor = require('../db/controllers/autor');
const autorLivro = require('../db/controllers/autorLivro');
const livroAutor = require('../db/controllers/livroAutor');

app.use('/', users);
app.use('/', livro);
app.use('/', autor);
app.use('/', autorLivro);
app.use('/', livroAutor);




router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


router.post('/users', async (req, res) => {
    const { name, email, createAt, updateAt} = req.body;
    const user = await User.create({ name, email, createAt, updateAt });
    res.json(user);
});



router.get('/users/{id}', async (req, res) => {
    const { id } = req.body;
    console.log(id)
    const user = await User.findByPk();
    res.json(user);
  
    // if (!user) {
    //   return res.status(404).json({ error: 'User not found' });
    // }
  
    // res.json(user);
});
  
router.put('/users/{id}', async (req, res) => {
    const { id } = req.body.id;
    const { name, email } = req.body;
    const user = await User.findByPk(id);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    user.name = name;
    user.email = email;
    await user.save();
  
    res.json(user);
 });
  
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    await user.destroy();
  
    res.status(204).send();
  });  

  const auth = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // If the user is not authenticated, return a 401 Unauthorized response
    // res.redirect("/auth/google");
    res.status(401).json({ error: 'Unauthorized' });
};

app.use('/protected', auth, function (req, res) {
    res.sendFile(__dirname + "/public/protected.html");
});


app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/public/login.html");
});

app.get("/", auth, function (req, res) {
    res.sendFile(__dirname + "/public/protected.html");
});

app.get('/logado', (req, res) => {
    res.send(`Bem vindo ${req.user._json.name} !
    <br>
    <img src='${req.user._json.picture}'/>`);
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        }
        res.redirect("/login");
    });
});

//${res.json(req.user)}
app.get('/erro', (req, res) => res.send("Erro ao logar"));
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/erro' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/logado');
    });

app.get('/sair', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
});

module.exports = app;