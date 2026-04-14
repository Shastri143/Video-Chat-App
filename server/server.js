const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", {
      signal: signalData,
      from,
      name,
    });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));