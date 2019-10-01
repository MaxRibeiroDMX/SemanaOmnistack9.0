// Importing modules
const express = require('express');

const app = express();//Create a express application

app.post('/users',(req,res)=>{//Post route to send a post request using the insominia application
    return res.json({message : 'Hello World!'});//To work with rest api we have to send objects
});

app.listen(3333);//Defines in which port the server will be listen