'use strict';

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server has started...'));

app.use(express.static('public'));
app.use(express.json());

app.post('/api', (req, res) => {
    console.log('got a request ');
    console.log(req.body);
    console.log('sending response data...');
    const data = req.body;
    res.json(data);
});