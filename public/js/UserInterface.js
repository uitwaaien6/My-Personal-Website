'use strict';

$(window).ready(() => {

    console.log(location);

    class UserInterface {
    
        static eventListeners(switcher) {
            $(window).ready(() => this.minifyHeader());
    
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
            $('.read-more-text').click(() => {
                const window_height = window.innerHeight;
                const header_height = $('header').find('li').css('height');
                let extracted_val;
                for (let i = 0; i < header_height.length; i++) {
                    const str = header_height.substr(0, i);
                    if (!isNaN(str) || str == '.') { extracted_val = str; }
                }

                let scroll_top_pos;
                let scroll; 

                if ($('header').hasClass('header-scroll')) {
                    scroll_top_pos = window_height - parseFloat(extracted_val);
                    scroll = { left: 0, top: scroll_top_pos, behavior: 'smooth' };
                } else {
                    scroll_top_pos = window_height - parseFloat(extracted_val) - 10;
                    scroll = { left: 0, top: scroll_top_pos, behavior: 'smooth' };
                }

                window.scrollTo(scroll);
            });
    
            $('#footer-nav-home').click(() => {
                const scroll = { left: 0, top: 0, behavior: 'smooth' }
                window.scrollTo(scroll);
            });
        }
    
        //minify header or not, if the page y pos greater than 30 will add the class or will remove it
        static minifyHeader() {
            const pageYPos = window.pageYOffset;
            if (pageYPos > 70) {
                $('header').addClass('header-scroll');
                $('.global-nav').find('a').css('color', 'black');
                $('.global-nav').find('li').css('padding', '20px 20px');
            } else if (pageYPos < 70 && window.innerWidth >= 992) {
                $('header').removeClass('header-scroll');
                $('.global-nav').find('a').css('color', 'white');
                $('.global-nav').find('li').css('padding', '15px 20px');
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

    let switcher = true;
    UserInterface.eventListeners(switcher);
    UserInterface.updateNavBar(switcher);
});

