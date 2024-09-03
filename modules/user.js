const mongoose=require('mongoose');

const {Schema}=mongoose;

const userSchema=new Schema(
    {
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    gender:{type:String,required:true},
    role:{type:String,enum: ["USER", "ADMIN"],default: "USER",required:true,},
    isActive:{type:Boolean,required:true,default:false}
   },
   {
    timestamps: true,
});

const User = mongoose.model("user", userSchema);

module.exports = User;