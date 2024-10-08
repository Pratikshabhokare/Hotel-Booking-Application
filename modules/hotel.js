const mongoose=require('mongoose');
const {Schema} =mongoose;

const hotelSchema=new Schema({
    name:{type:String, required:true},
    type:{type:String, required:true},
    address:{type:String, required:true},
    distance:{type:String, required:true},
    city:{type:String, required:true},
    title:{type:String, required:true},
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