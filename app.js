'use strict';

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server has started...'));

app.use(express.static('./public'));
app.use(express.json());


