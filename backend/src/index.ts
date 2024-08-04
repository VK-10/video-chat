import { Socket } from "socket.io";
import http from "http";
const express = require('express');
const { createServer } = require('http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(http);

const io = new Server(server);

app.get('/', (req: any, res: any) => { 
  res.sendFile(join(__dirname, 'index.html'));
});


io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });