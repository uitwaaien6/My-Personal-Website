'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();

let repos = [];

app.listen(3000);

app.use(express.static('./public'));
app.use(express.json());

async function fetchGithub() {
    const githubURL = 'https://api.github.com/users';
    const githubResponse = await fetch(`${githubURL}/uitwaaien6/repos`);
    const githubJSON = await githubResponse.json();
    repos = githubJSON;
}

(function main() {
    fetchGithub();
    setInterval(() => {
        fetchGithub();
    }, 3600000);
})();

app.get('/api', (req, res) => {
    res.json(repos);
});
