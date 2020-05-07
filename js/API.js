'use strict';

class API {
    constructor() {

    }

    getAPI(url) {
        $.get(url, () => {
            console.log('Fetching url');
        }).done((data) => {
            console.log('Fetching url done.');
            console.log(data);
        }).fail(() => {
            console.log('Could not fetch the specified url.');
        });
    }
}
