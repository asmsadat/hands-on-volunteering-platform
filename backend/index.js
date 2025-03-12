const express = require("express");
const cors = require("cors");
require('dotenv').config();

const eventRoutes = require("./routes/eventRoutes");
const helpRoutes = require("./routes/helpRoutes");
const commentRoutes = require("./routes/commentRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const pool = require("./config/db");
const PORT = process.env.PORT || 5000;

app.use("/api/events", eventRoutes);
app.use("/api/helps", helpRoutes);
app.use("/api/helps/comments", commentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));