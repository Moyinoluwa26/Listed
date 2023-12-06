import express from 'express';
import User from '../models/user.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/api/auth/register', async (req, res) => {
    try {
        const { firstName, lastName, age, email, username, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ firstName, lastName, age, email, username, password: hashedPassword });
        const newUser = await user.save();

        res.status(201).json(newUser);

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

router.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) { return res.status(404).json({ message: "User Not Found" }); }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ messages: "Invalid Password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ user, token });
    }
    catch (err) {
        res.status(400).json({
            messages: err.message
        })
    }
});

export default router;