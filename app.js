'use strict';

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));

app.post('/api', (req, res) => {
    console.log(req.body);
});
