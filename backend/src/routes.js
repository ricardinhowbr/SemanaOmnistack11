const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

// -> ONGs
routes.get('/ongs', OngController.Index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    }),
}), OngController.Create);

// -> Profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.Index);

// -> Session
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}), SessionController.Create);

// -> Casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.Index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
}), IncidentController.Create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.Delete)


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