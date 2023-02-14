require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


// const SocketServer = require('./SocketServer')
// const server = require("http").createServer(app);
// const io = require("socket.io")


app.use(express.json());
// app.use(cors());
mongoose.connect(process.env.MONGODB_URI).then(console.log("Database is connected")).catch((err) => { console.log(err) })
const whitelist = ["https://codersbook.netlify.app", "http://localhost:3000" , "http://192.168.1.15:3000"]
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

// const http = require('http').createServer(app);
// const io = require('socket.io')(http , {
//     handlePreflightRequest: (req, res) => {
//         const headers = {
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//             "Access-Control-Allow-Origin":"http://localhost:3000" , //or the specific origin you want to give access to,
//             "Access-Control-Allow-Credentials": true
//         };
//         res.writeHead(200, headers);
//         res.end();
//     }
// } )

// io.on('connection' , socket => {
//     console.log(socket.id + 'connected')
//     SocketServer(socket)
// })


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
// server.listen(PORT, () => {
//     console.log(`App is running on port : ${PORT}`)
// });


app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`)
})





// http.listen(PORT, () => {
//     console.log('Server is running on port', PORT)
// })


// const io = socket(server , {
//     cors:{
//         origin:"http://localhost:3000",
//         credentials:true
//     }
// });

// io.on('connection',(socket)=>{
//     // let data = JSON.stringify(socket)
//     console.log('Connected')
//     socket.on('new-notification' , (data)=>{
//     // //     console.log("new Notification")
//     // //     console.log(data);
//         socket.emit("notification-recieve" , data)
//     })
// })
// app.use((req, res, next) => {
//     req.io = io;
//     next();
// });