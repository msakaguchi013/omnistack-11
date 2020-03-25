const express = require('express');
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
routes.post('/ongs', OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


routes.get('/profile',ProfileController.index);
module.exports = routes;