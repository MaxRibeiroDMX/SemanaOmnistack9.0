// Importing modules
const express = require('express');

const app = express();//Create a express application

//Get defines the route ta receive the get request, and the action to perform for the request
app.get('/',(req,res)=>{
    return res.json({message : 'Hello World!'});//To work with rest api we have to send objects
});

app.listen(3333);//Defines in which port the server will be listen