import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/api/auth/register', async (req, res) => {
    try {
        const { firstName, lastName, age, email, username, password } = req.body;
        const user = new User({ firstName, lastName, age, email, username, password });
        const newUser = await user.save();

        res.status(201).json(newUser);

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

export default router;