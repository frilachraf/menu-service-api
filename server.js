const express = require("express");
const path = require('path');
const { dishes } = require("./data");
const app = express();

const Port = process.env.PORT || 8000;
// setup static folder

// app.use(express.static(path.join(__dirname,'public')))

app.get('/api/dishes', (req,res)=>{
    console.log(req.query)
    res.json(dishes)
})
app.get('/api/dishes/:id',(req,res)=>{
    console.log(req.params);
    res.json(dishes[0])
})
app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})

