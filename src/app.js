const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// mongo
mongoose.connect('mongodb://localhost:27017/projetoEstoque', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Conectado ao mongoDB');
}).catch((err) => {
    console.log('Erro ao se conectar ao mongoDB: '+err);
})

// rotas
const estoque = require('./routes/estoqueRoute');
const usuarios = require('./routes/usuarioRouter');
const produtos = require('./index')

app.use(bodyParser.json());

app.use((res, req, next) => {
    res.header("Access-Control-Allow-Origin", "*") // permite que pessoas acessem a api
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use(express.static('doc'))
app.get('/api-doc', (req, res) => {
    res.sendFile(path.join(__dirname + "/../doc/index.html"));
})

app.use('/estoque', estoque);
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.set('view engine', 'ejs');
app.set('views', './src/views');

module.exports = app;