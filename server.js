const express = require("express");
const path = require('path')
const app = express();

const Port = process.env.PORT || 8000;
// setup static folder

app.use(express.static(path.join(__dirname,'public')))

app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})