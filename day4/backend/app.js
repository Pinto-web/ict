require('dotenv').config(); // MUST BE LINE 1

const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes/userRoutes');
const connectDb = require('./db');

app.use(express.json());

// Initialize connection safely after envs have loaded
connectDb();

app.use('/', routes);

app.listen(port, () => {
    console.log("connected to port:", port);
});