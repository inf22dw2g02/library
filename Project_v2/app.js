// Incluir as bibliotecas
// Gerencia as requisicoes, rotas e urls, entre outras funcionalidades
const express = require('express');

// chamar a funcao express
const app = express();

// Criar um middleware para receber os daods no corpo da reuisicao 
app.use(express.json());


// Incluir controllers
const users = require('./db/controllers/users');
const livro = require('./db/controllers/livro');
const autor = require('./db/controllers/autor');
const autorLivro = require('./db/controllers/autorLivro');
const livroAutor = require('./db/controllers/livroAutor');

// Incluir o arquivo swagger
const swaggerSpec = require('./db/controllers/SwaggerSpecs');

// Incluir o arquivo swaggerUi
const swaggerUi = require('swagger-ui-express')



//criar rotas
app.use('/', users);
app.use('/', livro);
app.use('/', autor);
app.use('/', autorLivro);
app.use('/', livroAutor);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Incluir o arquivo que possui a conexao com a base de dados
const db = require("./db/models");

const cors = require('cors');

const cookieSession = require('cookie-session');

const passport = require('passport');

const router = require('./routers/router');
// require('./passport/passport');







require('./passport/passport');

app.use(cookieSession({
    name: 'Bruno-session',
    keys: ['key1','key2']
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(router);






app.listen(8080, ()=> {
    console.log("Acesse a rota http://localhost:8080/auth/google para efetuar o login!");
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/docs");
});