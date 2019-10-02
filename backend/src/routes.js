const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const routes = express.Router();//Express router
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);//Method to be acessed by the user request
routes.get('/spots', SpotController.index);//Get route to exibit the spots of application
routes.post('/spots',upload.single('thumbnail'),SpotController.store);//Passing the path, the field of file and the controller to deal with that file


//Exporting the routes
module.exports = routes;