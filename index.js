require('dotenv').config();

const routes = require('./src/routes/routes');
const productRoutes = require('./src/routes/productRoutes');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log(`Server started at ${3000}`);
});
