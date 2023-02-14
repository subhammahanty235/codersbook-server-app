const Notification = require('../models/notifications')
const io = require("socket.io")

const newnotification = async (req, res) => {
  sender = req.user.id;

  const notification = new Notification({
    notificationtext: req.body.type,
    sender: sender,
    receiver: req.body.receiver,
    post: req.body.post
  });
  try {
    const newNotification = await notification.save();
    //   io.emit("new-notification", newNotification);
    if (newNotification) {
      // io.emit("notification-recieve",newNotification);
      res.status(201).json(newNotification);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
    // res.send(err)
    // next()
  }
}

const getallnotification = async (req, res) => {

  const id = req.user.id;
  try {
    const notifications = await Notification.find({ receiver: id }).sort({created: -1});
    res.status(200).json(notifications);

  } catch (error) {
    res.status(400).json({ message: err.message });
  }

}



module.exports = { newnotification, getallnotification };