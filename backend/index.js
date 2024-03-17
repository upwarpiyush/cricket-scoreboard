const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(cors());

// DataBase Connection
const connectDB = require("./db_connection/db");

connectDB();

app.listen(PORT, () => {
  console.log("Backend Server is running on Port ->", PORT);
});
