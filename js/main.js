$(document).ready(function () {
    // var mySwiper = new Swiper('.swiper-container', {
    //direction: '',
    //loop: true,
    // autoHeight: true,
    // spaceBetween: 30,
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 400,
    //     depth: 180,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
    // breakpoints: {
    //     900: {
    //     }
    // }
    // });

    //==============================Картинка в бекграунд=========================

    $('.imgbgr').each(
        function () {
            $b = ($(this).attr('src'));
            //alert($b);
            $(this).parent().css({ background: 'url(' + $b + ')' + 'center' + '/' + 'cover' });
            $(this).addClass('del');
            $('.del').css('display', 'none');
        }
    );

    //==========================Фильтр списка=============================

    // $(function () {
    //     var newSelection = "";
    //     var b;
    //     $('.projects-portfolio-menu label').click(function () {
    //         //alert('.click')
    //         $('.projects-portfolio-menu label').removeClass('aktiv');
    //         $(this).addClass('aktiv');
    //         $('.ff-items li').removeClass('clear');
    //         newSelection = $(this).attr('rel');
    //         b = '.' + newSelection;
    //         // alert(b);
    //         $('.ff-items li').each(
    //             function () {
    //                 $(this).not('"' + b + '"').toggleClass('clear')
    //                 // alert(this);
    //             }
    //         )
    //     })
    // });

    //============================================Фиксированное меню при прокрутке

    // $(function () {
    //     var $element = $('.ideas').offset().top;
    //     //console.log(".ideas=" + $element);
    //     var counter = 0;
    //     var $window = $(window);
    //     $window.on('load scroll', function () {
    //         var top = $window.scrollTop();
    //         //console.log("scrollTop=" + top);
    //         var height = $window.height();
    //         //console.log("height=" + height);
    //         if (top + height >= $element && counter == 0) {
    //             //console.log(top + height >= $element);
    //             $('.header-body').css('position', 'fixed');
    //             $('.header-body').addClass('opacity');
    //             counter = 1;
    //         };
    //         if (top + height < $element && counter == 1) {
    //             $('.header-body').css('position', 'initial');
    //             $('.header-body').removeClass('opacity');
    //             counter = 0;
    //         }
    //     });
    // });
    // $(window).each(function () {
    //     $(window).scroll(function () {
    //         $('.opacity').css('display', 'flex')
    //     });
    // })

    //==================================Перемещение элементов меню по DOMу

    var count = 0;
    $(window).on('load resize', function () {
        //     var $size = $('.right').data('size');
        //     //console.log($size);
        var $realSize = $(window).width();
        //     //console.log($realSize);
        if ($realSize <= 1200 && count == 0) {

            $('.contact-body').parent().append('<div class="rep"></div>');
            $('.contact-body').parent().append('<div class="copy"></div>');
            $('.left-body__copyright').detach().prependTo('div.copy');
            $('.contact-menu ').detach().prependTo('div.rep');
            //         //console.log(b);
            count = 1;
        }
        if ($realSize > 1200 && count == 1) {

            $('div.rep').children().detach().appendTo('.contact-body__right');
            $('div.copy').children().detach().appendTo('.contact-body__left');
            $('.rep').detach();
            $('.copy').detach();
            //         $('div.right nav').remove();
            //         //console.log(a);
            count = 0;
        }
        //     //console.log(count);
    });

    //=================================Ползунки=================
    $(function skrHeader() {
        var skrmain = 0;
        var h = $(window).height();
        var b;
        var f = 12;
        var p = $('.header-scrooll').css('height');
        var j = parseInt(p) - 60;
        var c = $('.header-scr').position().top;
        var qt = $('div.header-scr').offset().top;
        var qb = $('div.header-scr').offset().top + j;
        var div = 'div.header-scr';

        $(window).scroll(function btn_scroll() {
            var skr = $(window).scrollTop();
            var top = $(div).offset().top;
            if (c >= 0 && c <= j) {
                if (skr >= 0 && skr > skrmain) {
                    b = $(div).offset({ top: top + f });
                }
                else {
                    b = $(div).offset({ top: top - f });
                }
            }
            else {
                if (c < 0) {
                    $(div).offset({ top: qt })
                }
                if (c > j) {
                    $(div).offset({ top: qb })
                }
            }
            skrmain = skr;
            c = $(div).position().top;
            console.log('top=' + c);
        });
    });

    $(function skrAbout() {
        var skrmain = 0;
        var h = $(window).height();
        var b;
        var f = 8;
        var p = $('.about-scrooll').css('height');
        var j = parseInt(p) - 40;
        var div = 'div.about-scr';
        var c = $(div).position().top;
        var qt = $(div).offset().top;
        var qb = $(div).offset().top + j;
        console.log(h);
        $(window).scroll(function btn_scroll() {
            var skr = $(window).scrollTop();
            var top = $(div).offset().top;
            if (c >= 0 && c <= j) {
                if (skr >= 0 && skr > skrmain) {
                    b = $(div).offset({ top: top + f });
                }
                else {
                    b = $(div).offset({ top: top - f });
                }
            }
            else {
                if (c < 0) {
                    $(div).offset({ top: qt })
                }
                if (c > j) {
                    $(div).offset({ top: qb })
                }
            }
            skrmain = skr;
            c = $(div).position().top;
        }
        )
    });


    $('.menu-nav__stroke').click(function () {
        $('.menu-nav__stroke').removeClass('aktiv');
        $(this).addClass('aktiv');
    })


    //====================================Перемещение элементов в бургер и обратно

    let burger = document.querySelector('.burger');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        if ($('.burger').hasClass('active')) {
            $('.burger-menu').addClass('menu-active');
            $('body').css('overflow', 'hidden');
        }
        else {
            $('.burger-menu').removeClass('menu-active');
            $('body').css('overflow', 'auto');
        };
    });

    $(window).on('load resize', function () {
        var $realSize = $(window).width();
        if ($realSize <= 850) {
            $('.header-menu .menu-nav').children().detach().prependTo('.burger-menu');
        }
        else {
            $('.burger-menu').children().detach().prependTo('.header-menu .menu-nav');
        };

    })

})

