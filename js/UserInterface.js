"use strict";

class UserInterface {

    constructor() {
        this.switcher = true;
    }

    eventListeners(switcher) {

        $('#ruzgar-ata-ozkan').click(function() {
            location.reload();
        });

        // navigaton dropdown menu slider sandvic button
        $('#nav-button').click(function() {
            if (!switcher) {
                $('.dropdown').css('display', 'none');
                $('.dropdown').children().css('display','none');
                switcher = !switcher;
            } else if (switcher) {
                $('.dropdown').css('display','block');
                switcher = !switcher;
                $('.dropdown').children().css('display', 'block');
            }
        });

        // read more scroll down listener
        $(".read-more > .read-more-text").on("click", function() {
            window.scrollTo(window.innerHeight, 0);
        });
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    updateNavBar(switcher) {
        $(window).resize(function() {
            if (window.innerWidth >= 992) {
                $('.dropdown').css('display', 'inline-block');
                $('.dropdown').children().css('display', 'inline-block');
            }
            else if (window.innerWidth < 991) {
                if (!switcher) {
                    $('.dropdown').css('display', 'block');
                    $(".dropdown").children().css("display", "block");
                }
                if (switcher) {
                    $('.dropdown').css('display', 'none');
                    $('.dropdown').children().css('display', 'none');
                }
            }
        });
    }
}

const userInterface = new UserInterface();

(() => {
    console.log('Application has started');
    userInterface.eventListeners(userInterface.switcher);
    userInterface.updateNavBar(userInterface.switcher);
})();

