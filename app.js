'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();

let repos = [];

app.listen(3000);

app.use(express.static('./public'));
app.use(express.json());

async function fetchGithub() {
    try {
        console.log('Fetching Github repos...');
        const githubURL = 'https://api.github.com/users';
        const githubResponse = await fetch(`${githubURL}/uitwaaien6/repos`);
        console.log(`Promise status: ${githubResponse.status}`);
        const githubJSON = await githubResponse.json();
        repos = githubJSON;
        console.log('Repos has been updated!');
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

(function main() {
    fetchGithub();
    setInterval(() => {
        fetchGithub();
    }, 3600000);
})();

app.get('/api', async (req, res) => {
    res.json(repos);
    console.log('Repos has been sent to client!');
});
