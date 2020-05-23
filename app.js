'use strict';

const express = require('express');
const requestPromise = require('request-promise');
const request = require('request');
const fetch = require('node-fetch');
const app = express();

app.listen(3000);

app.use(express.static('./public'));
app.use(express.json());


app.get('/api', async (req, res) => {
    const githubURL = 'https://api.github.com/users';
    const githubResponse = await fetch(`${githubURL}/uitwaaien6/repos`);
    const githubJSON = await githubResponse.json();
    res.json(githubJSON);
});
