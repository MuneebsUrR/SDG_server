const express = require('express');
const router = express.Router();
const Quote = require('../Model/Quote');

//route to add quotes in db
router.post('/add',async(req,res)=>{
    const quotes = req.body;
    try {
        const createdQuotes = await Quote.insertMany(quotes);
        res.status(201).json({message:'Quotes created successfully!',quotes:createdQuotes})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error creating quotes',error})
    }
})

//route to get all quotes
router.get('/get-all',async(req,res)=>{
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes)
    } catch (error) {
        res.status(500).json({message:'Error getting quotes',error})
    }
})  

//route to get a last added latest single quote
router.get('/get-latest',async(req,res)=>{
    try {
        const quote = await Quote.findOne().sort({date: -1});
        res.status(200).json(quote)
    } catch (error) {
        res.status(500).json({message:'Error getting quote',error})
    }
})

module.exports = router;