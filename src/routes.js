const express = require('express');
const ScoreController = require('./controllers/ScoreController');
const VehiclesController = require('./controllers/VehiclesController');
const routes = express.Router();

routes.get('/score', ScoreController.index)
routes.get('/vehicles', VehiclesController.index)

module.exports = routes;