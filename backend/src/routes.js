const express = require('express');
const {celebrate, Segments, Joi }= require('celebrate');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

/**
 * Rota/Recurso
 */

 /**
  * Tipos de Parâmetros:
  * Query Params: parâmetros nomeados enviados na rota após ? -> Filtros, Paginação
  * Route params: parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilzado para criar ou alterar recursos
  */

routes.post('/session',SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}) ,OngController.create);

routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),IncidentController.index);

routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}) ,IncidentController.delete);


routes.get('/profile',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),ProfileController.index);

module.exports = routes;