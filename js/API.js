"use strict";

export class APIServices {
    constructor() {
        this.githubURL = "https://api.github.com";
    }

    async getGithubAPI(string) {
        const url = string;
        const result = await fetch(url);
        return result;
    }

    test() {
        console.log("hello");
    }
}
