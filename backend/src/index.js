// -> Importar "express" para utilzar seus recursos na app.
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

// -> Aceitar json na api, importante inicializar antes de declarar as rotas.
app.use(express.json());
app.use(routes);

app.listen(3333);