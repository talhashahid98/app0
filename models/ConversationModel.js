const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const ConversationSchema = new Schema({
    Recipients: [{
         type: Schema.Types.ObjectId,
          ref: 'User'
           }],
    BlockedUser: [{
         type: Schema.Types.ObjectId,
          ref: 'User'
           }],
    User: {
         type: Schema.Types.ObjectId,
          ref: 'User'
           },

});

module.exports = Conversation = mongoose.model('Conversation',ConversationSchema);
