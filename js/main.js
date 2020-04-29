"use strict";

import { APIServices } from "./API.js";
import { UserInterface } from "./UserInterface.js";

const userInterface = new UserInterface();
const apiServices = new APIServices();

function discoMode(updateTime) {
    const colors = ["blue", "red", "orange", "yellow", "purple"];
    $(".home-image").css("background-image", "none");
    setInterval(() => {
        const randomNum = Math.floor(Math.random() * colors.length);
        $("body").css("background", colors[randomNum]);
    }, updateTime);
    console.log("disco, disco");
}


function init() {
    console.log("Application has started!");
    userInterface.eventListeners(userInterface.dropdownSwitcher);
    userInterface.updateNavBar(userInterface.dropdownSwitcher);
}

init();
