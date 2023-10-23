import http from 'http'; 
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.status(200).send({message : "Olá"});
});

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  // Evento personalizado para receber mensagens do cliente
  socket.on('chat message', (msg) => {
    console.log('Mensagem recebida: ' + msg);
    // Emitir a mensagem de volta para todos os clientes conectados
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });
});

server.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});

