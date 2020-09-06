const express = require('express')

const LimitController = require('./controllers/LimitController')
const UsersController = require('./controllers/UsersController')

const routes = express.Router();

routes.get('/user', UsersController.show)
routes.get('/limit', LimitController.show)

module.exports = routes;