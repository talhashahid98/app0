const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
 
    To: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    From: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Body: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
     isRead: {
        type: Boolean,
        default:false
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});


const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
