const express = require('express')

const ScoreController = require('./controllers/ScoreController')
const UsersController = require('./controllers/UsersController')
const VehiclesController = require('./controllers/VehiclesController')

const routes = express.Router();

routes.get('/score', ScoreController.index)
routes.get('/vehicles', VehiclesController.index)
routes.get('/user', UsersController.show)

module.exports = routes;