const express=require('express');
const router=express.Router();
const Hotel=require('../modules/hotel');


router.post('/saveHotel',async (req,res)=>{
    const newhotel=new Hotel(req.body);

    try {
        const savedHotel=await newhotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

module.exports = router;

