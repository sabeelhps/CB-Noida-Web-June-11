const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const io = new Server(server);

const users = new Map();

io.on('connection', (socket) => {
    console.log(`connection estabised with client with clientId :: ${socket.id}`);
    socket.emit('connection-open', { message: 'connection establised', socketId: socket.id });
    socket.on('send-msg', (data) => {
        io.emit('received-msg', { message: data.message, username: users.get(socket.id) });
    });

    socket.on('user-login', (data) => {
        const { username } = data;
        users.set(socket.id, username);
        socket.emit('loggged-in', { username });
    })
});


app.get('/', (req, res) => {
    res.render('index');
})



server.listen(process.env.PORT || 3000,()=>{
  console.log('server started at port 3000');
});