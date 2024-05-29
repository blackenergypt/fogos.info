const fs = require('node:fs');
const http = require('node:http');

const express = require('express');
const app = express();

// Carregar certificados SSL
//const options = {
//    key: fs.readFileSync('./http/certs/key.pem'),
//    cert: fs.readFileSync('./http/certs/cert.pem')
//};

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Servidor HTTPS está rodando!');
});

// Criar servidor HTTPS
const server = http.createServer(app);
// const server =  https.createServer(options, app);
module.exports = server;