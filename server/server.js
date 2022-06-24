const http = require('http');
const app = require('./app');
const SocketServer = require('socket.io');
const {Message} = require('./models');
const {port, SOCKET_EVENTS} = require('./configs');
const cors = {
    origin: '*'
}

const server = http.createServer(app);

const io = SocketServer(server, {cors});

io.on('connection', socket => {
    console.log('connection is on');
    socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (newMessage) => {
        console.log(newMessage);
        try{
            const savedMessage = await Message.create(newMessage);
            io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage);
        } catch(error) {
            io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
        }
    });

    socket.on('disconnect', (reason) => {
        console.log(reason);
    })
})

server.listen(port, () => {
    console.log('Am alive')
})