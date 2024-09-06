const express =require('express')
const router =  express.Router();

router.get('/user',async(req,res)=>{
    const user=req.body.user;
})

module.exports=router;