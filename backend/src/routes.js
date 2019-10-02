const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();//Express router

routes.post('/sessions',SessionController.store);//Method to be acessed by the user request



//Exporting the routes
module.exports = routes;