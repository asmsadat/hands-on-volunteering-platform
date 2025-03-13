const express = require("express");
const cors = require("cors");
require('dotenv').config();
const http = require("http");
const socketIo = require("socket.io");

const eventRoutes = require("./routes/eventRoutes");
const helpRoutes = require("./routes/helpRoutes");
const commentRoutes = require("./routes/commentRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const pool = require("./config/db");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use("/api/events", eventRoutes);
app.use("/api/helps", helpRoutes);
app.use("/api/helps/comments", commentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

io.on("connection", (socket) => {
    console.log("User connected");
    
    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", message);
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));