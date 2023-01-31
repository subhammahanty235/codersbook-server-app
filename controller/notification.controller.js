const Notification = require('../models/notifications')

const newnotification = async()=>{
    sender= req.user.id;
    const notification = new Notification({
      notificationtext: req.body.type,
      sender: sender,
      receiver: req.body.receiver,
      item: req.body.item
    });
    try {
      const newNotification = await notification.save();
      io.emit("new notification", newNotification);
      res.status(201).json(newNotification);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

const getallnotification = async()=>{

    const id = req.user.id;
    try {
        const notifications = await Notification.find({receiver:id})
        res.status(200).json(notifications);
        
    } catch (error) {
        res.status(400).json({ message: err.message });
    }

  }



  module.exports = {newnotification , getallnotification};