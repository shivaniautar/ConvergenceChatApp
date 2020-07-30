const express = require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser')
require('dotenv').config({path: __dirname + '/../.env'})
require('./config/mongoose.config');
const userRoutes=require('./routes/users.routes')
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));
userRoutes(app);

const server = app.listen(4000)

const io = require('socket.io')(server);

let connectedClients=0;
let userName= 'Please enter a username...';
let chatMessages=[];




io.on('connection', socket=>{
    connectedClients++
    console.log('We have '+connectedClients+' connected!');

    socket.on('new message', data => {
      chatMessages.push(data)
        io.emit('updated thread', data)
    console.log(data)
})
        
    

    socket.on('disconnect', ()=>{
        connectedClients--;
        socket.broadcast.emit("user left the chat room")
        console.log('We have '+connectedClients+' connected!');
    })

});