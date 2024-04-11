import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    customerID:{
        type:String,
        required:true,
        unique:true,
    },
    transactionID:{
        type:String,
        require:true,
        uniqued:true,
    },
    paymentAmount:{
        type:String,
        
    },
    paymentDate:{
        type:String,
        required:true,
    },
},{timestamps:true});

const Payment=mongoose.model('Payment',paymentSchema);

export default Payment;