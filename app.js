const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRouter = require('./routes/items');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to db at ' + DB_URL);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/items', itemsRouter);

app.get('*', (req, res) => {
    res.redirect('/');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT ' + PORT);
});
