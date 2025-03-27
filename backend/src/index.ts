import { Socket } from "socket.io";
import http from "http";

import express from 'express';
import { Server } from 'socket.io';
import { UserManager } from "./managers/UserManagers";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;


const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const userManager = new UserManager();

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  userManager.addUser("randomName", socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
    userManager.removeUser(socket.id);
  })
});

server.listen(port, () => {
    console.log('listening on *:3000');
});