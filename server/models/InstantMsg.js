let mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName required, Dummy"]
    },
    context: {
        type: String,
    },
    likes: {
        type: Number
    }
}, {
    timestamps: true
})

mongoose.model('Message', MessageSchema);