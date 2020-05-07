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
        $('.read-more > .read-more-text').click(() => {
            const windowHeight = window.innerHeight;
            window.scrollTo({
                left: 0,
                top: windowHeight,
                behavior: 'smooth'
            });
        });

        $(window).scroll(() => {
            const pageY = window.pageYOffset;
            if (pageY > 30) {
                $('header').addClass('header-scroll');
                $('.global-nav').find('a').css('color', 'black');
            } else if (pageY <= 30) {
                if (window.innerWidth >= 992) {
                    $('header').removeClass('header-scroll');
                    $('.global-nav').find('a').css('color', 'white');
                }
            }
        });
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {
        $(window).resize(() => {
            if (window.innerWidth >= 992) {
                if (window.pageYOffset < 30) {
                    $('header').removeClass('header-scroll');
                    $('.global-nav').find('a').css('color', 'white');
                }
                $('.dropdown').css('display', 'inline-block');
                $('.dropdown').children().css('display', 'inline-block');
            }
            else if (window.innerWidth < 991) {
                $('.global-nav').find('a').css('color', 'black');
                $('.dropdown').children().css('color', 'black');
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
