const express = require('express');
const routes = express.Router();
const OrientationController = require('./controllers/OrientationController');
const UserController = require('./controllers/UserController');
const OrientadorController = require('./controllers/OrientadorController');
const OrientadoController = require('./controllers/OrientadoController');
const OrientacaoController = require('./controllers/OrientacaoController');

routes.get('/orientation', OrientationController.index);
routes.get('/orientation/:id', OrientationController.view);
routes.post('/orientation', OrientationController.create);
routes.put('/orientation/:id', OrientationController.update);
routes.delete('/orientation/:id', OrientationController.delete);

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.view);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);
routes.get('/user', UserController.search);

routes.get('/orientador', OrientadorController.index);
routes.get('/orientador/:id', OrientadorController.view);
routes.post('/orientador', OrientadorController.create);
routes.put('/orientador/:id', OrientadorController.update);
routes.delete('/orientador/:id', OrientadorController.delete);

routes.get('/orientado', OrientadoController.index);
routes.get('/orientado/:id', OrientadoController.view);
routes.post('/orientado', OrientadoController.create);
routes.put('/orientado/:id', OrientadoController.update);
routes.delete('/orientado/:id', OrientadoController.delete);

routes.get('/orientacao', OrientacaoController.index);
routes.get('/orientacao/:id', OrientacaoController.view);
routes.post('/orientacao', OrientacaoController.create);
routes.put('/orientacao/:id', OrientacaoController.update);
routes.delete('/orientacao/:id', OrientacaoController.delete);

module.exports = routes;