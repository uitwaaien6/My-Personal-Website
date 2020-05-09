'use strict';

class API {
    constructor() {
        this.githubURL = 'https://api.github.com/users/uitwaaien6/repos';
    }

    static getAPI(url) {
        $.get(url, () => {
            console.log('Fetching specified url...');
        }).done((data) => {
            console.log('Fetching url done.');
            console.log(data);
        }).fail((error) => {
            console.log(error);
        });
    }
}

