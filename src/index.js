// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import connectDB from "./db/index.js";
import { app } from './app.js';


// dotenv.config({
//     path:'/.env'
// })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server listening on ${process.env.PORT}`);
    })

}).catch((error)=>{
    console.log(`MONGODB CONNECTION FAILED`,error);
})


/*
import express from "express"
const app=express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port
                ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR",error);
        throw error;
    }
})()//IIFE


  "scripts": {
    "dev": "nodemon -r dotenv/config--experimental-json-modules src/index.js"
  },

  nodemon → Automatically restarts the server when files change.
-r dotenv/config → Preloads dotenv to load environment variables from .env.
--experimental-json-modules → Enables support for importing .json files in ES modules (type: "module" in package.json).
src/index.js → Starts your server from index.js.
*/
 