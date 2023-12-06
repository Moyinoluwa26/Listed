import mongoose from 'mongoose';



const NotificationSchema = mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        required: true
    }

});


const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;