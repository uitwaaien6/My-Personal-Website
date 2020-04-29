"use strict";

export class UserInterface {

    constructor() {
        this.dropdownSwitcher = true;
    }

    eventListeners(switcher) {
        $("#nav-button").on("click", function() {
            if (!switcher) {
                $(".dropdown").css("display","none");
                $(".dropdown").children().css("display","none");
                switcher = !switcher;
            } else if (switcher) {
                $(".dropdown").css("display","block");
                switcher = !switcher;
                $(".dropdown").children().css("display", "block");
            }
        });
    }

    updateNavBar(switcher) {
        $(window).resize(function() {
            if (window.innerWidth >= 992) {
                $(".dropdown").css("display", "inline-block");
                $(".dropdown").children().css("display", "inline-block");
            }
            else if (window.innerWidth < 991) {
                if (!switcher) {
                    $(".dropdown").css("display", "block");
                    $(".dropdown").children().css("display", "block");
                }
                if (switcher) {
                    $(".dropdown").css("display", "none");
                    $(".dropdown").children().css("display", "none");
                }
            }
        });
    }
}
