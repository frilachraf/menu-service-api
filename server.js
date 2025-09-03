const express = require("express");
const path = require('path')
const app = express();

const Port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send({message: 'hello message changed'});
})

app.get('/about',(req,res)=>{
    // res.sendFile(__dirname + '/public/index.html')
    res.sendFile(path.join(__dirname ,'public', 'index.html'))
})
app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})