require('dotenv').config();
const server = require('./http/server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
