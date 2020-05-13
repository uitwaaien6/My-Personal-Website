'use strict';

$(window).ready(() => {
    class API {
        constructor() {
            
        }

        static calcStarCount(res) {
            let max_int = Number.MIN_SAFE_INTEGER; //readonly
            let stars = [];
            let configured_stars = [];
            let high_stars = [];
            const repos_length = res.length;
            for (let i = 0; i < repos_length ; i++) {
                stars[i] = res[i].stargazers_count;
            }
            
            stars.forEach(e => {
                if (e >= max_int) {
                    configured_stars.push(e);
                    max_int = e;
                }
            });

            for (let i = configured_stars.length; i >= configured_stars.length - 3; i--) {
                if (configured_stars[i] == undefined || configured_stars[i] == null) {
                    continue;
                } else {
                    configured_stars[i];
                }
            }

            for (let i = 0; i < configured_stars.length; i++) {
                high_stars[i] = configured_stars[i];
            }

            // Returns an array of the highest 3 stars on repos
            return high_stars;
        }

        static async fetchGithub() {
            const url = 'https://api.github.com/users/uitwaaien6/repos';
            $.get(url, () => {
                console.log('Fetching github...');
            }).done((res) => {

                console.log(this.calcStarCount(res));
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

