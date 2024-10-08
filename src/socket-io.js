import { io } from 'socket.io-client';
const socketIo = io('http://localhost:3000');

export default socketIo;