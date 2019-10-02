const express = require('express');

const routes = express.Router();//Express router

routes.post('/users',(req,res)=>{
    return res.json(req.body);
});

//Exporting the routes
module.exports = routes;