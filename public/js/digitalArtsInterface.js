'use strict';

class UserInterface {

    constructor() {
        
    }

    static getDOMElements() {
        return {
            header: $('header'),
            dropdown: $('.dropdown'),
            global_nav: $('.global-nav'),
            nav_button: $('#nav-button'),
            read_more_text: $('.read-more-text'),
        }
    }

    static eventListeners(switcher) {
        const dom = this.getDOMElements();

        // navigaton dropdown menu slider sandvic button
        dom.nav_button.click(() => {
            
            switch (switcher) {
                case false:
                    dom.dropdown.css('display', 'none');
                    dom.dropdown.children().css('display','none');
                    switcher = !switcher;
                    break;
                case true:
                    dom.dropdown.css('display','block');
                    dom.dropdown.children().css('display', 'block');
                    switcher = !switcher;    
                    //FUCKING MORONS
                    break;
            }
        });


        $(document).scroll(() => {
            this.fadeImages(700);
        });
    }

    //minify header or not, if the page y pos greater than 30 will add the class or will remove it
    static minifyHeader() {
        const dom = this.getDOMElements();
        const pageYPos = window.pageYOffset;
        if (pageYPos > 70) { // todo will rearrenge the pathname later
            dom.header.addClass('header-scroll');
            dom.global_nav.find('a').css('padding', '20px 20px');
        } else if (pageYPos < 70 && window.innerWidth >= 992) {
            dom.header.removeClass('header-scroll');
            dom.global_nav.find('a').css('padding', '15px 20px');
        }
    }

    static fadeImages(time) {
        const pageYPos = window.pageYOffset;
        const window_width = window.innerWidth;

        const images = $('.digital-arts-image img');

        let img_width = '800px';

        if (window_width <= 1300 && window_width > 1100) {
            img_width = '700px';
        } else if (window_width <= 990 && window_width > 650) {
            img_width = '500px';
        } else if (window_width <= 650) {
            img_width = '400px';
        }

        if (pageYPos >= 0) {
            if (parseFloat($(images[0]).css('opacity')) <= 0) {
                $(images[0]).animate({width: img_width, opacity: 1}, time);
            }
        }
        if (pageYPos >= 700) {
            if (parseFloat($(images[1]).css('opacity')) <= 0) {
                $(images[1]).animate({width: img_width, opacity: 1}, time);
            }
        }
        if (pageYPos >= 1800) {
            if (parseFloat($(images[2]).css('opacity')) <= 0) {
                $(images[2]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
        if (pageYOffset >= 3200) {
            if (parseFloat($(images[3]).css('opacity')) <= 0) {
                $(images[3]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
        if (pageYOffset >= 4200) {
            if (parseFloat($(images[4]).css('opacity')) <= 0) {
                $(images[4]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
        if (pageYOffset >= 5200) {
            if (parseFloat($(images[5]).css('opacity')) <= 0) {
                $(images[5]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
        if (pageYOffset >= 6200) {
            if (parseFloat($(images[6]).css('opacity')) <= 0) {
                $(images[6]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
        if (pageYOffset >= 6800) {
            if (parseFloat($(images[7]).css('opacity')) <= 0) {
                $(images[7]).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time);
                console.log('fading')
            }
        }
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {
        const dom = this.getDOMElements();

        $(document).scroll(() => this.minifyHeader());

        $(window).resize(() => {
            if (window.innerWidth >= 992) {
                dom.dropdown.css('display', 'inline-block');
                dom.dropdown.children().css('display', 'inline-block');
                this.minifyHeader();
            }
            else if (window.innerWidth < 991) {
                switch (switcher) {
                    case true:
                        dom.dropdown.css('display', 'none');
                        dom.dropdown.children().css('display', 'none');
                        break;
                    case false:
                        dom.dropdown.css('display', 'block');
                        dom.dropdown.children().css("display", "block");
                        break;
                }
            }
        });
    }
}


class UIController {

    static initDigitalArtsInterface() {
        let switcher = true;
        UserInterface.eventListeners(switcher);
        UserInterface.updateNavBar(switcher);
        UserInterface.minifyHeader();
        UserInterface.fadeImages(1000);
    }

    static init() {
        this.initDigitalArtsInterface();
    }

}

$(window).ready(() => UIController.init());

