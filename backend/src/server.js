// Importing modules
const express = require('express');

const app = express();//Create a express application
//GET, POST. PUT, DELETE

//req,query = Access query params to filter
//req.params = Acess route params to edit and delete

app.put('/users/:id',(req,res)=>{
    return res.json({id : req.params.id});//Req query get query paramns
});

app.listen(3333);//Defines in which port the server will be listen