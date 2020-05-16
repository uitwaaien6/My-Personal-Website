'use strict';

$(window).ready(() => {

    class UserInterface {
    
        static eventListeners(switcher) {
            $(window).ready(() => this.minifyHeader());
        }
    
        //minify header or not, if the page y pos greater than 30 will add the class or will remove it
        static minifyHeader() {
            const pageYPos = window.pageYOffset;
            if (pageYPos > 70) { // todo will rearrenge the pathname later
                $('header').addClass('header-scroll');
                $('.global-nav').find('a').css('padding', '20px 20px');
            } else if (pageYPos < 70 && window.innerWidth >= 992) {
                $('header').removeClass('header-scroll');
                $('.global-nav').find('a').css('padding', '15px 20px');
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

    let switcher = true;
    UserInterface.eventListeners(switcher);
    UserInterface.updateNavBar(switcher);
});

