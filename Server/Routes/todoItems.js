import express from 'express';
import TodoItem from '../models/todoItem.js';



const router = express.Router();

router.post('/api/item', async (req, res) => {
    try {
        /*const { name, age, email } = req.body;
        const item = new TodoItem({ name, age, email });
        await item.save();
        res.status(201).json(item);*/
        const { userId, item } = req.body;

        const newItem = new TodoItem({
            userId: userId,
            item: item
        })
        await newItem.save();
        res.status(200).json(newItem);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get('/api/item/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const items = await TodoItem.find({ userId: userId });
        res.status(201).json(items)


    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})


router.patch('/api/item/:id', async (req, res) => {
    const { id } = req.params;
    const { item } = req.body
    try {

        /*onst timeID = await TodoItem.find({
            _id: id

        });
        if (!timeID) {
            return res.status(404).json({ message: "User Not Found" })
        }
        timeID.item = item;
        const Updated = await timeID.save();

        res.send(Updated);*/
        const editItem = await TodoItem.findByIdAndUpdate(id, { item: item }, { new: true })
        res.status(200).json(editItem);

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

});
router.delete('/api/item/:id', async (req, res) => {
    const itemId = req.params.id;
    try {

        const timeID = await TodoItem.findById(itemId);

        if (!timeID) {
            return req.status(400).json({ message: "Not Found" })
        }

        await TodoItem.deleteOne({ _id: timeID });





        const TodoItems = await TodoItem.find();
        res.status(201).json(TodoItems)

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

export default router;