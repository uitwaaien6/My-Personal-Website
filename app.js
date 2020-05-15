'use strict';

const express = require('express');

const app = express();

app.listen(3000, () => console.log('Server has started...'));

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    //res.send('HELLO');
    console.log('hello')
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});