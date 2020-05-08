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
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {

        //minify header or not, if the page y pos greater than 30 will add the class or will remove it
        function minifyHeader() {
            const pageYPos = window.pageYOffset;
            if (pageYPos > 30) {
                $('header').addClass('header-scroll');
                $('.global-nav').find('a').css('color', 'black');
                $('.global-nav').find('a').css('font-weight', '600');
            } else if (pageYPos < 30 && window.innerWidth >= 992) {
                $('header').removeClass('header-scroll');
                $('.global-nav').find('a').css('color', 'white');
                $('.global-nav').find('a').css('font-weight', 'normal');
            }
        }

        $(window).scroll(() => {
            minifyHeader();
        });

        $(window).resize(() => {
            if (window.innerWidth >= 992) {
                $('.dropdown').css('display', 'inline-block');
                $('.dropdown').children().css('display', 'inline-block');
                minifyHeader();
            }
            else if (window.innerWidth < 991) {
                $('.global-nav').find('a').css('color', 'black');
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
