
import mongoose from 'mongoose';

const TodoItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String
})

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

export default TodoItem;