// Importing modules
const express = require('express');

const app = express();//Create a express application
//GET, POST. PUT, DELETE

//req,query = Access query params   

app.get('/users',(req,res)=>{
    return res.json({idade : req.query.idade});//Req query get query paramns
});

app.listen(3333);//Defines in which port the server will be listen