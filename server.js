const express = require("express");

const app = express();

const Port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send('hello world from express and node.js and mongo db with mongoose and monogodb atl')
})
app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})