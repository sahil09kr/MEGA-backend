import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";   

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,//POINTS FROM WHERE FRONTEND CAN SEND/RECIEVE DATA
    credentials:true//ALLOWS COOKIES AND AUTHENTICATION HEADERS CAN BE SENT
}))

app.use(express.json({limit: "18kb"}))//JSON DATA ACCEPTED & BIGGER THAN 18KB WONT BE ACCEPTED
app.use(express.urlencoded({extended: true,//DATA FROM URL ACCEPTED AND NESTES OBJECTS ACCEPTED
    limit:"16kb"
}))
app.use(express.static("public"))//SERVES STATIC(STORED) FILE FROM THE SERVER
app.use(express.cookieParser())//CRUD OPERATIONS ON USER COOKIES
//ACCESS AND SET COOKIES WE CAN KEEP SECURE COOKIES WHICH CAN ONLY BE READ & SERVED BY SERVER 
export { app };














