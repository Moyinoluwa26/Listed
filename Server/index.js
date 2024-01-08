import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import itemRoute from './Routes/todoItems.js';
import Register from './Routes/auth.js';
//import verifyToken from './Middleware/auth.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', itemRoute)
app.use('/', Register)


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        /*User.insertMany(users);
        Post.insertMany(posts);*/
    })
}).catch((err) => {
    return console.log(`${err} did not connect`)
})

