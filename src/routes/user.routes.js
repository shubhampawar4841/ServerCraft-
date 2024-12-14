import express from 'express';
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = Router();

// User Registration Route
router.route("/register").post(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '1h' }
        );

        // Respond with success
        res.status(201).json({
            message: "User registered successfully.",
            user: { id: newUser._id, name: newUser.name, email: newUser.email },
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

export default router;
