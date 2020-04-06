/*
    Arquivo criado para rodar somente em ambiente de PRD ou DEV.
    
    Importando o arquivo app.js da pasta raiz, arquivo este responsável por subir o server de fato,
    podemos fazer com que os teste não exergue a porta ou suba a aplicação no mesmo ambiente de PRD ou DEV.
    
    A porta '3333' sondada nesse arquivo será visível, por exemplo, quando executarmos o script 'start' para subir
    a aplicação.
    
 */

const app = require('./app');

app.listen(3333);