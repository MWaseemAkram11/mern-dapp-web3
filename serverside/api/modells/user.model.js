const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String
    },
    type: { 
      type: Number,  // 1 = User, 2 = Admin,
      default: 1 
    }, 
    lastName: {
      type: String,
      default: ''
    },
    country: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    status: {
      type: Boolean,
      default: false,
      // required: true
    },
  }, {
  timestamps: true,
});

/**
 * @typedef User
 */

 module.exports = mongoose.model('User', UserSchema);