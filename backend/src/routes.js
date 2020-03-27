const express = require("express");

const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

// -> ONGs
routes.get('/ongs', OngController.Index);
routes.post('/ongs', OngController.Create);

// -> Profile
routes.get('/profile', ProfileController.Index);

// -> Session
routes.post('/sessions', SessionController.Create);

// -> Casos
routes.get('/incidents', IncidentController.Index);
routes.post('/incidents', IncidentController.Create);
routes.delete('/incidents/:id', IncidentController.Delete)


module.exports = routes;

/**
 *  Métodos HTTP:
 *  
 *   GET: Buscar/Listar uma informação do back-end;
 *   POST: Criar uma informação do back-end;
 *   PUT: Alterar uma informação do back-end;
 *   DELETE: Deletar uma informação do back-end;
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: 
  *     - No objeto "request" é acessado na propriedade "query": reques.query
  *     - Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação, etc...);
  *
  *  Route Params: 
  *     - No objeto request é acessado na propriedade "params": reques.params
  *     - Parâmetros utilizados para identificar recursos.
  * 
  * Request Body: 
  *     - No objeto "request" é acessado na propriedade "body": request.body
  *     - Conteúdo do corpo da requisiçã0
  */