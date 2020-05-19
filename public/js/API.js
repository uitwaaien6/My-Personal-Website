'use strict';

$(window).ready(() => {
    class API {

        constructor() {
            
        }

        static findPopularRepos(res) {
            let max_int = Number.MIN_SAFE_INTEGER;
            let repos = [];
            let popular_repos = [];
            res.forEach(e => {
                if (e.stargazers_count >= max_int) {
                    repos.push(e);
                    max_int = e.stargazers_count;
                }
            });
            repos = repos.reverse();
            popular_repos = repos.slice(0, 3);
            return popular_repos;
        }

        static async fetchGithub() {
            const url = 'https://api.github.com/users/uitwaaien6/repos';
            $.get(url).done(data => {
                const popular_repos = this.findPopularRepos(data);
                console.log(popular_repos);
            }).fail(err => {
                console.log(err.message);
                throw err;
            });
        }
    }

    API.fetchGithub();
    
});





