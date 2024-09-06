const mongoose=require('mongoose');
const {Schema} =mongoose;

const hotelSchema=new Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    rooms:{type:Number, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    photos:{type:String, required:true},
     rooms:[String],
     cheapestPrice:{type:Number, required:true},
    rating:{type:Number, min:0,max:5},
    features:{type:Boolean, required:true},
 },{
    timestamps: true,
 
});

const Hotel=mongoose.model('hotel',hotelSchema);

module.exports=Hotel;