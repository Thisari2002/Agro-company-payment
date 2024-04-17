import express from 'express';
import {payment} from '../controllers/auth.controller.js'

const router=express.Router();

router.post("/payment",payment)

export default router;