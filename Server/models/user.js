import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    /* name: {
         type: String,
         required: true
     },*/
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    age: Number,
    email: String,

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    }

})

const User = mongoose.model('User', UserSchema);

export default User;
