'use strict';

class UserInterface {

    constructor() {
        this.switcher = true;
    }

    static eventListeners(switcher) {

        $(window).ready(() => this.minifyHeader());

        $('#ruzgar-ata-ozkan').click(() => location.reload('../index.html'));

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
                    //FUCKING MORONS
                    break;
            }
        });

        // read more scroll down listener
        $('.read-more > .read-more-text').click(() => {
            const windowHeight = window.innerHeight;
            const headerHeight = $('header').find('li').css('height');
            let scrollPos;
            let extractedVal;
            for (let i = 0; i < headerHeight.length; i++) {
                const str = headerHeight.substr(0, i);
                if (!isNaN(str) || str == '.') {
                    extractedVal = str;
                } 
            }
            scrollPos = windowHeight - extractedVal;
            window.scrollTo({
                left: 0,
                top: scrollPos,
                behavior: 'smooth'
            });
        });

        $('#footer-nav-home').click(() => {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
        })
    }

    //minify header or not, if the page y pos greater than 30 will add the class or will remove it
    static minifyHeader() {
        const pageYPos = window.pageYOffset;
        if (pageYPos > 70) {
            $('header').addClass('header-scroll');
            $('.global-nav').find('a').css('color', 'black');
        } else if (pageYPos < 70 && window.innerWidth >= 992) {
            $('header').removeClass('header-scroll');
            $('.global-nav').find('a').css('color', 'white');
        }
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {

        $(window).scroll(() => this.minifyHeader());

        $(window).resize(() => {
            if (window.innerWidth >= 992) {
                $('.dropdown').css('display', 'inline-block');
                $('.dropdown').children().css('display', 'inline-block');
                this.minifyHeader();
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