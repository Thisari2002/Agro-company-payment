import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/payment.route.js';
import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect("mongodb+srv://Payment:payment@payment.wikrzzj.mongodb.net/?retryWrites=true&w=majority&appName=Payment").then(()=> {
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})





const app= express();

app.use(express.json());


app.listen(3000,() => {
    console.log('Server is running on port 3000!');
    }
);

app.use("/api/payment",userRouter);
app.use("/api/auth",authRouter);