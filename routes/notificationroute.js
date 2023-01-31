const router = require('express').Router();
const notificationcontroller = require('../controller/notification.controller')
const fetchuser = require('../middlewares/userverify')
router.post('/newnotification' ,fetchuser, notificationcontroller.newnotification );
router.get('/allnotifications' , fetchuser , notificationcontroller.getallnotification);

module.exports = router;