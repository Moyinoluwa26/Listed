import express from 'express';
import TodoItem from '../models/todoItem.js';



const router = express.Router();

router.post('/api/item', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const item = new TodoItem({ name, age, email });
        await item.save();
        res.status(201).json(item);


    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get('/api/item', async (req, res) => {
    res.send("Hello World")
})


export default router;