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


        $(window).scroll(() => {
            //this.fadeImages(2000);
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
        const images = $('.digital-arts-image img');
        if (pageYPos >= 0) {
            $(images[0]).fadeIn(time);
        }
        if (pageYPos >= 400) {
            $(images[1]).fadeIn(time);
        }
        if (pageYPos >= 1800) {
            $(images[2]).fadeIn(time);
        }
        if (pageYOffset >= 3200) {
            $(images[3]).fadeIn(time);
        }
        if (pageYOffset >= 4200) {
            $(images[4]).fadeIn(time);
        }
        if (pageYOffset >= 5200) {
            $(images[5]).fadeIn(time);
        }
        if (pageYOffset >= 6200) {
            $(images[6]).fadeIn(time);
        }
        if (pageYOffset >= 6800) {
            $(images[7]).fadeIn(time);
        }
    }

    // update the naviagtion bar when the sceen resized change all the children none or block or inline-block
    static updateNavBar(switcher) {
        const dom = this.getDOMElements();

        $(window).scroll(() => this.minifyHeader());

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

    static initSoftwareInterface() {
        let switcher = true;
        UserInterface.eventListeners(switcher);
        UserInterface.updateNavBar(switcher);
        UserInterface.minifyHeader();
        //UserInterface.fadeImages(2000);
    }

    static init() {
        this.initSoftwareInterface();
    }

}

$(window).ready(() => UIController.init());

