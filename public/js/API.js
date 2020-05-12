'use strict';

$(window).ready(() => {
    class API {
        constructor() {
            
        }

        static async fetchGithub() {
            const url = 'https://api.github.com/users/uitwaaien6/repos';
            $.get(url, () => {
                console.log('Fetching github...');
            }).done((res) => {
                console.log(res);
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

    API.sendToNode({
        test: 123
    });

});

