import { io } from 'socket.io-client';
const socketIo = io('http://localhost:3000',{
    autoConnect: false,
});

export default socketIo;