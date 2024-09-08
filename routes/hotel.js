const express=require('express');
const router=express.Router();
const Hotel=require('../modules/hotel.js');


router.post('/',async (req,res)=>{
   try {
    const newHotel = new Hotel(req.body);

    const saveHotel =   await newHotel.save();
    return res.json(saveHotel);  
   } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
   }    
});

module.exports = router;

