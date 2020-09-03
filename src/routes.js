const express = require('express');
const ScoreController = require('./controllers/ScoreController')
const routes = express.Router();

routes.get('/score', ScoreController.index)

module.exports = routes;