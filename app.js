'use strict';

const express = require('express');
const requestPromise = require('request-promise');
const request = require('request');
const app = express();

app.listen(3000);

app.use(express.static('./public'));
app.use(express.json());


(async function main() {
    console.log('Server has started...');
    try {
        const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';
        const githubURL = 'https://api.github.com/users';

        const response = await request(`${githubURL}/uitwaaien6/repos`)
        
        

    } catch (error) {
        console.log(error);
        throw error;
    }
})();
