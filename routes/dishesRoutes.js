// const express = require('express');
// const { dishes } = require('../data');
import express from 'express';
import { dishes } from '../data.js';
import { json } from 'stream/consumers';
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json(dishes);
});

// add new dish
router.post('/', (req, res) => {
    
    res.status(201).json({ 
        body: req.body,
        message: 'Dish added successfully' 
    });
});


export default router;