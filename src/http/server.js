const http = require('node:http');
const path = require('node:path');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');

const app = express();

// Configuração de Middleware
app.set('views', path.join(__dirname, '..', 'views')); // Atualiza o caminho
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

const pagesRouter = require('../routers/pagesRouter');

app.use('/', pagesRouter);

// Criar servidor HTTP
const server = http.createServer(app);
module.exports = server;
