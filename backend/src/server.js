// Importing modules
const express = require('express');

const app = express();//Create a express application
//GET, POST. PUT, DELETE

//req,query = Access query params to filter
//req.params = Acess route params to edit and delete
//req.body = Acess body elements in a POST request

//For POST JSON Objects, Express will need this configuration below
app.use(express.json());
app.post('/users',(req,res)=>{
    return res.json(req.body);
});

app.listen(3333);//Defines in which port the server will be listen