const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello to the server');
});

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/*', (req, res) => {
    res.status(400).send('error');
});

module.exports = app;