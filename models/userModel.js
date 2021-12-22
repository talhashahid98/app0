const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String,
    lowercase: true,
  },
  PhoneNumber: {
    type: String,
  },
  Bio: {
    type: String,
  },
  Image: {
    type: String,
  },

},
  {
    timestamps: true,
  });


const User = mongoose.model("User", userSchema);
module.exports = User;
