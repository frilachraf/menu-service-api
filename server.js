const express = require("express");
const path = require('path');
const { dishes } = require("./data");
// const dishesRoutes = require('./routes/dishes')

const app = express();
const Port = process.env.PORT || 8000;
// setup static folder

// app.use(express.static(path.join(__dirname,'public')))

// routes
// app.use('/api/dishes',dishesRoutes)


app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})

