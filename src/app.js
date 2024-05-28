import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
 
const app = express();

// learn Middleware and cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// json data
app.use(express.json({
    limit: '50kb'
}))

// urldata
app.use(express.urlencoded({
    extended: true,
    limit: '50kb'
}))

// store static files
app.use(express.static('public'))

// cookie parser
app.use(cookieParser())

export {app}