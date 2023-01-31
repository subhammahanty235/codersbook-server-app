const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  notificationtext: {
    type: String,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
    default:Date.now()
  }
});

const Notification  = mongoose.model("notification", notificationSchema);
module.exports = Notification;
