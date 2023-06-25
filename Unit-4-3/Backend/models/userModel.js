var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  is_verified: {
    type: Boolean,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
