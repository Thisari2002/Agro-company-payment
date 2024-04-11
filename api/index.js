import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect("mongodb+srv://payment:payment@payment.ql1rh7o.mongodb.net/Payment?retryWrites=true&w=majority&appName=Payment").then(()=> {
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})





const app= express();

app.listen(3000,() => {
    console.log('Server is running on port 3000!');
    }
);