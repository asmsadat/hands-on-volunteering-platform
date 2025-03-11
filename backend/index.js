const express = require("express");
const cors = require("cors");
require('dotenv').config();
const eventRoutes = require("./routes/eventRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const pool = require("./config/db");
const PORT = process.env.PORT || 5000;

app.use("/api/events", eventRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));