'use strict';

const express = require('express');
const app = express();

app.listen(3000);

app.use(express.static('./public'));
app.use(express.json());


(async function main() {
    console.log('Server has started...');

})();








