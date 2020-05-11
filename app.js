'use strict';

const express = require('express');
const app = express();


app.listen(5500, () => {
    console.log('I got a request');
});

app.get('/api', (req, res) => {
    console.log(req);
});