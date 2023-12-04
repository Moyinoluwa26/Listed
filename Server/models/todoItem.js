
import mongoose from 'mongoose';

const TodoItemSchema = mongoose.Schema({
    /* name: {
         type: String,
         required: true
     },
     age: Number,
     email: String*/
    userId: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    }

})


const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

export default TodoItem;