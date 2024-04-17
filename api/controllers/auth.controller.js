import Payment from "../models/payment.model.js";
import bcryptjs from 'bcryptjs';

export const payment= async (req,res)=>{

    const {customerID,transactionID,paymentAmount,paymentDate}=req.body;
    const newPayment = new Payment({customerID,transactionID,paymentAmount,paymentDate});
    try {
        await newPayment.save();
        res.status(201).json('User created successfully!'); 
    } catch (error) {
        res.status(500).json(error.message);
    }
   
} 