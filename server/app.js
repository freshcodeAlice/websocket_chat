const express = require('express');
const cors = require('cors');
const {Message, User} = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res, next) => {
    try {
        const msges = await Message.find({}); // TODO: pagination
        res.status(200).send(msges)
    } catch(error) {
        next(error)
    }
});

app.use((err, req, res, next) => {
    res.status(500).send('Some server error'); // Need to do: good error handler
});


module.exports = app;