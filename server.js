// const express = require("express");
// const path = require('path');
// const dishesRouter = require('./routes/dishesRoutes');
import express from "express"; 
import path from 'path';
import  router from './routes/dishesRoutes.js';
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/error.js";
import AuthRouter from "./routes/authRoutes.js";
import notFound from "./middlewares/notFound.js";
import { fileURLToPath } from 'url';

const app = express();
const Port = process.env.PORT || 8000;
// setup static folder


// get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
app.use(express.static(path.join(__dirname,'public')))
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// global middlewares
app.use(logger);

// routes
app.use('/api/auth',AuthRouter);
app.use('/api/dishes',router);

// error Handler Middlewares
app.use(notFound)
app.use(errorHandler);


app.listen(Port,()=>{
    console.log('server is running on port '+Port);
})

