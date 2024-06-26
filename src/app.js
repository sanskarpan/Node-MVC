const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/database');
const errorMiddleware = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);
app.use(errorMiddleware);

module.exports = app;
