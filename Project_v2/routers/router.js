const express = require('express');
const app = express();
const passport = require('passport');
const router = express.Router();

// Incluir o arquivo users em models
const { User } = require('../db/models/users');


router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


router.post('/users', async (req, res) => {
    const { name, email, createAt, updateAt} = req.body;
    const user = await User.create({ name, email, createAt, updateAt });
    res.json(user);
});



const auth = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/auth/google");
}

app.get('/protected', auth, function (req, res) {
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