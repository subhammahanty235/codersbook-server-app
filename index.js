require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
// const socket = require("socket.io");


app.use(express.json());
// app.use(cors());
mongoose.connect(process.env.MONGODB_URI).then(console.log("Database is connected")).catch((err) => { console.log(err) })
const whitelist = ["https://codersbook.netlify.app", "http://localhost:3000" , "http://192.168.157.205:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.get("/", (req, res) => {
    res.send("Hi, I am live ");
});
app.use('/api/auth', require('./routes/userroute'))
app.use('/api/post', require('./routes/postroute'))
app.use("/api/notification" , require('./routes/notificationroute'))


// io.on("connection", socket => {
//     console.log("a user connected");
//   });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`)
})

// const io = socket(server , {
//     cors:{
//         origin:"https://loca"
//     }
// })