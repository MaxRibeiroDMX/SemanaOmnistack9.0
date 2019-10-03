// Importing modules
const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const routes = require('./routes');//Importing routes to aplication

const app = express();//Create a express application

mongoose.connect('mongodb+srv://user:pass123456@cluster0-twa8e.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
//GET, POST. PUT, DELETE

//req,query = Access query params to filter
//req.params = Acess route params to edit and delete
//req.body = Acess body elements in a POST request

app.use(cors());
//For POST JSON Objects, Express will need this configuration below
app.use(express.json());
//Load routes from application
app.use(routes);

app.listen(3333);//Defines in which port the server will be listen