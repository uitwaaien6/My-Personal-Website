'use strict';

$(window).ready(() => {
    class API {
        constructor() {
            
        }

        static findPopularRepos(res) {
            let max_int = Number.MIN_SAFE_INTEGER; //readonly
            let repos = [];
            let popular_repos = [];
            res.forEach(e => {
                if (e.stargazers_count >= max_int) {
                    repos.push(e);
                    max_int = e.stargazers_count;
                }
            });
            for (let i = repos.length - 1; i >= (repos.length - 3); i--) {
                popular_repos.push(repos[i]);
            }
            return popular_repos; // returns an array of the repos with the highest stars, starts with the highest and decreases as the index goes.
        }

        static async fetchGithub() {
            const url = 'https://api.github.com/users/uitwaaien6/repos';
            $.get(url, () => {
                console.log('Fetching github...');
            }).done((res) => {
                console.log(this.findPopularRepos(res));
            }).fail((err) => {
                console.log(err);
            });
        }

        static async sendToNode(data) {
            const req_data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', req_data);
            const res_json = await response.json();
            console.log(res_json); 
        }
    }


    API.fetchGithub();
});

