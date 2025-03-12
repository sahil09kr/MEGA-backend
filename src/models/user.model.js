import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const UserSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,//cloudinary URL
            required:true,
        },
        coverImage:{
            type:String,//cloudinary URL
        },
        waTchHistory:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
            required:[true,'Password is required'],
        },
        refreshTokens: {
            type:String
        }
        
    },{timestamps: true})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
// return next(); ensures next() is only called once
    this.password=await bcrypt.hash(this.password,10);
    //bcrypt.hash() returns a promise 
    //therefore await required
    next();
})

UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}//password as a argument should be passed as a string
//returns true or false

UserSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        username:this.username,
        fullName:this.fullName
     },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
     })
}

UserSchema.methods.generateRefreshToken=function(){
    jwt.sign({
        _id:this._id,
    },process.env.ACCESS_REFRESH_TOKEN,{
        expiresIn:process.env.ACCESS_REFRESH_EXPIRY
    })
}

export const User = mongoose.model("User",UserSchema);