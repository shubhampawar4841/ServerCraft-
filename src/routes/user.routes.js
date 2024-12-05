import express from 'express';
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router = Router()

router.route("/register").post(
    res.status(201).json({
        message:"USer succesug";
    });
    )

router.route("/signup").post(
    res.status(201).json({
        message:"USer succesug";
    });
    )





export default router;