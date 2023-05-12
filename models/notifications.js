const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  notificationtext: {
    type: String,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  created:{
    type:Date,
    default:new Date()
  }
});

const Notification  = mongoose.model("notification", notificationSchema);
module.exports = Notification;
