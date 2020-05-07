'use strict';

class UserInterface {

    constructor() {
        this.switcher = true;
    }

    static eventListeners(switcher) {

        $('#ruzgar-ata-ozkan').click(() => {
            location.reload('../index.html');
        });

        // navigaton dropdown menu slider sandvic button
        $('#nav-button').click(() => {
            switch (switcher) {
                case false:
                    $('.dropdown').css('display', 'none');
                    $('.dropdown').children().css('display','none');
                    switcher = !switcher;
                    break;
                case true:
                    $('.dropdown').css('display','block');
                    $('.dropdown').children().css('display', 'block');
                    switcher = !switcher;    
                    break;
            }
        });

        // read more scroll down listener
        $('.read-more > .read-more-text').on('click', () => {
            const windowHeight = window.innerHeight;
            window.scrollTo({
                left: 0,
                top: windowHeight,
                behavior: 'smooth'
            });
        });
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {
        $(window).resize(() => {
            if (window.innerWidth >= 992) {
                $('.dropdown').css('display', 'inline-block');
                $('.dropdown').children().css('display', 'inline-block');
            }
            else if (window.innerWidth < 991) {
                switch (switcher) {
                    case true:
                        $('.dropdown').css('display', 'none');
                        $('.dropdown').children().css('display', 'none');
                        break;
                    case false:
                        $('.dropdown').css('display', 'block');
                        $(".dropdown").children().css("display", "block");
                        break;
                }
            }
        });
    }
}



(() => {
    let switcher = true;
    UserInterface.eventListeners(switcher);
    UserInterface.updateNavBar(switcher);
})();

