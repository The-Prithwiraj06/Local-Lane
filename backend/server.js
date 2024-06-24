import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
// import donationRoutes from "./routes/donationRoutes.js";
// import ngoroutes from "./routes/ngoroutes.js";

import connectDB from "./config/db.js";

import bookRoutes from './routes/bookRoutes.js'

dotenv.config();

const port = process.env.PORT || 3001;

connectDB();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());


app.use("/api/users", userRoutes);

app.use("/api/donate", bookRoutes);

// app.use("/api/donation", donationRoutes);

// app.use("/api/ngo", ngoroutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});