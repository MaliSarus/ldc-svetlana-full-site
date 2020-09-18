const selectButtons = $('.select-buttons');
const dropdownMenuContainer = $('.dropdown-menu__container');
const dropdownTabs = $('.dropdown-menu__tabs_item');
const serviceTapButton = $('.tap-menu__button')[0];
const appointmentTapButton = $('.tap-menu__button')[3];
const mapTapButton = $('.tap-menu__button')[$('.tap-menu__button').length - 1];
const dropdownTabsBlock = $('.dropdown-menu__tabs');
const dropdownContentBlock = $('.dropdown-menu__content');
const headerBottom = $('.header__bottom');
const popupIphone = $('.popup-iphone');
const popupIphoneFirstAction = $($('.popup-iphone__action')[0]);
const popupIphoneSecondAction = $($('.popup-iphone__action')[1]);
let dropdownFlag = 0;
let appendFlag = 0;
let resizeFlag = 0;
let prependFlag = 0;
let sbNavLinks;
let sbNews;
let sbPartners;
let posTop = 0;

window.aboutInterval = undefined;

const isSlickLoaded = (typeof $.fn.slick !== 'undefined');

function isSet(element) {
    return element.length !== 0;
}

function autoplayHandler() {
    const sliderButtons = $('.select-buttons__button');
    const slides = $('.about__item');
    const currentSlideIndex = slides.index($('.about__item_active'));
    sliderButtons.off('click');
    $(slides[currentSlideIndex]).addClass('about__item_deactivate');
    sliderButtons.removeClass('select-buttons__button_active');

    if (currentSlideIndex === slides.length - 1) {
        const timerId = setTimeout(function () {
            sliderButtons.off('click');
            $(slides[currentSlideIndex]).removeClass('about__item_deactivate');
            $(slides[currentSlideIndex]).removeClass('about__item_active');
            slides.removeClass('about__item_active');
            $(slides[0]).addClass('about__item_active');
            $(sliderButtons[0]).addClass('select-buttons__button_active');
            let sliderFlag = 0;
            sliderButtons.on('click', function (event) {
                const index = sliderButtons.index(event.currentTarget);
                if ($(window).width() >= 1400) {
                    if (sliderFlag == 0) {
                        sliderButtons.removeClass('select-buttons__button_active');
                        const prevItem = $('.about__item_active');
                        const sliderItems = $('.about__item');
                        const sliderItem = sliderItems[index];
                        sliderButtons.removeClass('select-buttons__button_active');
                        event.currentTarget.classList.add('select-buttons__button_active');
                        prevItem.addClass('about__item_deactivate');
                        sliderFlag = 1;
                        const sliderTimeout = setTimeout(function () {
                            prevItem.removeClass('about__item_deactivate');
                            prevItem.removeClass('about__item_active');
                            sliderItem.classList.add('about__item_active');
                            sliderFlag = 0;
                            clearTimeout(sliderTimeout);
                        }, 900);
                    }

                } else {
                    $('.about__slider').slick('slickGoTo', index, false);
                    sliderButtons.removeClass('select-buttons__button_active');
                    event.currentTarget.classList.add('select-buttons__button_active');
                }
            });
            clearTimeout(timerId);
        }, 900);
    } else {
        const timerId = setTimeout(function () {
            sliderButtons.off('click');
            $(slides[currentSlideIndex]).removeClass('about__item_deactivate');
            $(slides[currentSlideIndex]).removeClass('about__item_active');
            slides.removeClass('about__item_active');
            $(slides[currentSlideIndex + 1]).addClass('about__item_active');
            $(sliderButtons[currentSlideIndex + 1]).addClass('select-buttons__button_active');
            let sliderFlag = 0;
            sliderButtons.on('click', function (event) {
                const index = sliderButtons.index(event.currentTarget);
                if ($(window).width() >= 1400) {
                    if (sliderFlag == 0) {
                        sliderButtons.removeClass('select-buttons__button_active');
                        const prevItem = $('.about__item_active');
                        const sliderItems = $('.about__item');
                        const sliderItem = sliderItems[index];
                        sliderButtons.removeClass('select-buttons__button_active');
                        event.currentTarget.classList.add('select-buttons__button_active');
                        prevItem.addClass('about__item_deactivate');
                        sliderFlag = 1;
                        const sliderTimeout = setTimeout(function () {
                            prevItem.removeClass('about__item_deactivate');
                            prevItem.removeClass('about__item_active');
                            sliderItem.classList.add('about__item_active');
                            sliderFlag = 0;
                            clearTimeout(sliderTimeout);
                        }, 900);
                    }

                } else {
                    $('.about__slider').slick('slickGoTo', index, false);
                    sliderButtons.removeClass('select-buttons__button_active');
                    event.currentTarget.classList.add('select-buttons__button_active');
                }
            });
            clearTimeout(timerId);
        }, 900);
    }
}

const aboutSliderInit = () => {
    if (isSet($('.about__slider'))) {
        $('.about__slider').slick({
            slidesToShow: 1,
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 10000
        })
    }

};
const specSliderInit = () => {
    const specSlick = $('.specialists__slider');
    const specSlickInStaff = $('.staff__content .staff__ordinary .specialists__slider');
    const specSlickInControl = $('.control__content .specialists__slider');
    const hoverLinkHandler = function () {
        const url = $(this).find('a').attr('href');
        $(location).attr('href', url);
    };
    $(document).on('click', '.doctor__full-info', hoverLinkHandler);

    if (isSet($('.staff'))) {
        specSlickInStaff.slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            variableWidth: false,
            swipe: function () {
                $('.doctor__full-info').off('click', hoverLinkHandler)
            },
            afterChange: function () {
                $('.doctor__full-info').on('click', hoverLinkHandler)
            },
            responsive: [
                {
                    breakpoint: 326,
                    settings: {
                        variableWidth: true
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    },
                },
                {
                    breakpoint: 961,
                    settings: "unslick"
                },
            ]
        });
        specSlickInStaff.on('swipe', function () {
            $('.doctor__full-info').off('click', hoverLinkHandler)
        });
        specSlickInStaff.on('afterChange', function () {
            $('.doctor__full-info').on('click', hoverLinkHandler)
        });
        specSlickInStaff.on('breakpoint', function (event, slick, breakpoint) {
            if (breakpoint == 961) {
                specSlickInStaff.find('.specialists__doctor').removeAttr('style');
                specSlickInStaff.css({
                    display: 'flex',
                    marginLeft: '-10px',
                    marginRight: '-10px',
                });
            }
        });
    }
    if (isSet($('.specialists'))) {
        specSlick.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            variableWidth: true,
            swipe: function () {
                $('.doctor__full-info').off('click', hoverLinkHandler)
            },
            afterChange: function () {
                $('.doctor__full-info').on('click', hoverLinkHandler)
            },
            responsive: [
                {
                    breakpoint: 325,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false
                    },
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    },
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3
                    },
                },
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 3
                    },
                }
            ]
        });
        $('.specialists__doctor').css({
            width: 325 + 'px',
            maxWidth: 325 + 'px',
        });
        $('.specialists__control-panel .arrows .arrows__arrow-left').on('click', function () {
            specSlick.slick('slickPrev');
        });
        $('.specialists__control-panel .arrows .arrows__arrow-right').on('click', function () {
            specSlick.slick('slickNext');
        });

        specSlick.on('swipe', function () {
            $('.doctor__full-info').off('click', hoverLinkHandler)
        });
        specSlick.on('afterChange', function () {
            $('.doctor__full-info').on('click', hoverLinkHandler)
        });
        specSlick.on('breakpoint', function (event, slick, breakpoint) {
            if ($('.specialists__doctor').length <= slick.options.slidesToShow) {
                specSlick.slick('unslick');
                specSlick.css({
                    display: 'flex',
                    marginLeft: '-10px',
                    marginRight: '-10px',
                });
                $('.specialists__block .arrows').css('display', 'none');
                $('.specialists__control-panel .mobile').css('display', 'none');
            } else {
                $('.specialists__doctor').css({
                    width: 325 + 'px',
                    maxWidth: 325 + 'px',
                });
            }
        });
    }
    if (isSet($('.control'))) {
        specSlickInControl.slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            variableWidth: false,
            swipe: function () {
                $('.doctor__full-info').off('click', hoverLinkHandler)
            },
            afterChange: function () {
                $('.doctor__full-info').on('click', hoverLinkHandler)
            },
            responsive: [
                {
                    breakpoint: 326,
                    settings: {
                        variableWidth: true
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    },
                },
                {
                    breakpoint: 960,
                    settings: "unslick"
                },
            ]
        });
        $('.control__control-panel .arrows .arrows__arrow-left').on('click', function () {
            specSlickInControl.slick('slickPrev');
        });
        $('.control__control-panel .arrows .arrows__arrow-right').on('click', function () {
            specSlickInControl.slick('slickNext');
        });

        specSlickInStaff.on('swipe', function () {
            $('.doctor__full-info').off('click', hoverLinkHandler)
        });
        specSlickInStaff.on('afterChange', function () {
            $('.doctor__full-info').on('click', hoverLinkHandler)
        });
    }
};

const feedSliderInit = () => {
    const feedSlick = $('.feedback__slider');
    feedSlick.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        mobileFirst: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: false
                },
            }
        ]
    });
    $('.feedback__control-panel .arrows .arrows__arrow-left').on('click', function () {
        feedSlick.slick('slickPrev');
    });
    $('.feedback__control-panel .arrows .arrows__arrow-right').on('click', function () {
        feedSlick.slick('slickNext');
    });
    $('.feedback__item-content').on('focus click', function () {
        feedSlick.children().removeAttr('style');
    });
    feedSlick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.feedback__item-content').each(function () {
                if ($(this).hasClass('feedback__item-content_fill')) {
                    $(this).animate({
                        'max-height': '162px'
                    }, function () {
                        $(this).removeClass('feedback__item-content_unhide');
                        $(this).parents('.feedback__item').css('height', maxHeight + 'px');
                    });
                } else {
                    $(this).animate({
                        'max-height': '90px'
                    }, function () {
                        $(this).removeClass('feedback__item-content_unhide');
                        $(this).parents('.feedback__item').css('height', maxHeight + 'px');
                    });
                }
            })
        }
    );
    feedSlick.on('breakpoint', function (event, slick, breakpoint) {
        if ($('.feedback__item').length <= slick.options.slidesToShow) {
            feedSlick.slick('unslick').css({
                display: 'flex',
            });
            $('.feedback__head .arrows').css('display', 'none');
            $('.feedback__position').css('display', 'none');
        }
    });
};

const featuresSliderInit = () => {
    $('.features__slider').slick({
        slidesToScroll: 1,
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 577,
                settings: 'unslick'
            }
        ]
    });
};
const unitsMenuSliderInit = () => {
    if (isSet($('.units__menu > ul'))) {
        $('.units__menu > ul').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            variableWidth: true,
            adaptiveHeight: true
        });
    }
};
const diplomasSliderInit = () => {
    const diplomasSlick = $('.diplomas__slider');
    diplomasSlick.removeAttr('style');
    $('.diplomas__head .arrows').removeAttr('style');
    $('.diplomas__head .diplomas__position').removeAttr('style');
    diplomasSlick.slick({
        slidesToShow: 5,
        dots: false,
        arrows: false,
        infinite: false,
        // adaptiveHeight: true,
        // variableWidth: true
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                },
            }
        ]
    });
    $('.diplomas__slider_item').each(function () {
        $(this).css({
            height: $(this).children().height(),
        });
    });
    diplomasSlick.on('breakpoint', function (event, slick, breakpoint) {
        if ($('.diplomas__slider_item').length <= slick.options.slidesToShow) {
            diplomasSlick.slick('unslick').css({
                display: 'flex',
            });
            $('.diplomas__head .arrows').css('display', 'none');
            $('.diplomas__head .diplomas__position').css('display', 'none');
        }
    });
    $('.diplomas__head .arrows .arrows__arrow-left').on('click', function () {
        diplomasSlick.slick('slickPrev');
    });
    $('.diplomas__head .arrows .arrows__arrow-right').on('click', function () {
        diplomasSlick.slick('slickNext');
    });
    $('.diplomas__position').html('<span class="diplomas__position_current">' + diplomasSlick.slick('slickGetOption', 'slidesToShow') + '</span>/' + $('.diplomas__slider_item').length);

    diplomasSlick.on('afterChange', function (event, slick, currentSlide) {
        $('.diplomas__position_current').html(diplomasSlick.slick('slickCurrentSlide') + diplomasSlick.slick('slickGetOption', 'slidesToShow'));
    });
};

const unitSimpleSliderInit = () => {
    $('.unit-simple__slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        prevArrow: '<div class="arrow arrows__arrow-left"></div>',
        nextArrow: '<div class="arrow arrows__arrow-right"></div>',
        infinite: true,
        variableWidth: true
    })
};

const toolsSliderInit = () => {
    const toolsSlick = $('.tools__slider');
    $('.tools__head .tools__position').removeAttr('style');
    $('.tools__head .arrows').removeAttr('style');
    toolsSlick.slick({
        slidesToShow: 4,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            }
        ]
    });
    $('.tools__head .arrows .arrows__arrow-left').on('click', function () {
        toolsSlick.slick('slickPrev');
    });
    $('.tools__head .arrows .arrows__arrow-right').on('click', function () {
        toolsSlick.slick('slickNext');
    });

    $('.tools__position').html('<span class="tools__position_current">' + toolsSlick.slick('slickGetOption', 'slidesToShow') + '</span>/' + $('.tools__slider_item').length);

    toolsSlick.on('afterChange', function (event, slick, currentSlide) {
        $('.tools__position_current').html(toolsSlick.slick('slickCurrentSlide') + toolsSlick.slick('slickGetOption', 'slidesToShow'));
    });

    toolsSlick.on('breakpoint', function (event, slick, breakpoint) {
        if ($('.tools__slider_item').length <= slick.options.slidesToShow) {
            toolsSlick.slick('unslick');
            $('.tools__head .tools__position').css('display', 'none');
            $('.tools__head .arrows').css('display', 'none');
        }
        $('.tools__slider_item').each(function () {
            const imageSrc = $(this).children('img').attr('src');
            $(this).css({
                background: 'url("' + imageSrc + '") center no-repeat',
                backgroundSize: 'cover'
            })
        });
    });
};

const dirServSliderInit = () => {
    $('.direction-services__tabs').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true
    });
    $('.direction-services__tabs').on('afterChange', function (event, slick, currentSlide) {
        const dirServTabs = $('.direction-services__tabs_link');
        const dirServItems = $('.direction-services__content_item');
        dirServTabs.removeClass('tab-link_red_active');
        $(dirServTabs[currentSlide]).addClass('tab-link_red_active');
        dirServItems.removeClass('direction-services__content_item_active');
        $(dirServItems[currentSlide]).addClass('direction-services__content_item_active');

    })
};

const specDetailsSliderInit = () => {

    $('.specialists-details__head .specialists-details__control-panel.mobile').removeAttr('style');
    $('.specialists-details__content .specialists-details__control-panel').removeAttr('style');

    const specDetailsSlick = $('.specialists-details__slider');
    specDetailsSlick.removeAttr('style');
    specDetailsSlick.slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: true,
        variableWidth: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            }
        ]
    });
    $('.specialists-details__control-panel .arrows .arrows__arrow-left').on('click', function () {
        specDetailsSlick.slick('slickPrev');
    });
    $('.specialists-details__control-panel .arrows .arrows__arrow-right').on('click', function () {
        specDetailsSlick.slick('slickNext');
    });
};

const checkupFeaturesSliderInit = () => {
    $('.checkup-features__slider').slick({
        slidesToScroll: 1,
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 577,
                settings: 'unslick'
            }
        ]
    });
};

const toolsDetailsSliderInit = () => {
    const toolsDetailsSlick = $('.tools-details__slider');
    toolsDetailsSlick.slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: false,
    });
    $('.tools-details__position').html('<span class="tools-details__position_current">' + toolsDetailsSlick.slick('slickGetOption', 'slidesToShow') + '</span>/' + $('.tools-details__slider_item').length);
    toolsDetailsSlick.on('afterChange', function (event, slick, currentSlide) {
        $('.tools-details__position_current').html(toolsDetailsSlick.slick('slickCurrentSlide') + toolsDetailsSlick.slick('slickGetOption', 'slidesToScroll'));
    });
    $('.tools-details__head .arrows .arrows__arrow-left').on('click', function () {
        toolsDetailsSlick.slick('slickPrev');
    });
    $('.tools-details__head .arrows .arrows__arrow-right').on('click', function () {
        toolsDetailsSlick.slick('slickNext');
    });
};

const unitsMenuSliderChangeTab = () => {
    $('.units__menu > ul').on('afterChange', function (event, slick, currentSlide) {
        const index = $('.units__menu > ul').slick('slickCurrentSlide');
        const prevLink = $('.units__menu-link.tab-link_red_active');
        prevLink.removeClass('tab-link_red_active');
        $('.units__menu li')[index].children[0].classList.add('tab-link_red_active');
        // $('.units__content-services_active').removeClass('units__content-services_active');
        // $('.units__content-services')[index].classList.add('units__content-services_active');
        $('.units__content-services_active').animate({opacity: 0}, 500, function () {
            $(this).removeClass('units__content-services_active').removeAttr('style');
            $($('.units__content-services')[index]).addClass('units__content-services_active').css('opacity', 0).animate({opacity: 1}, 500);
        });
    });
};


const windowDesktopSizeChange = () => {
    $('[data-mobile]').each(function () {
        $(this).html($(this).data('desktop')).removeData('desktop');
    });
    $('.appointment__block > .content').addClass(['content_flex', 'content_between']);
    $('.feedback__position').html('<span class="feedback__position_current">1</span>/' + $('.feedback__item').length);
    $($('.staff__tabs_item')[0]).html('Врачи клиники');
    const staffTabIndex = $('.staff__tabs_item').index($('.staff__tabs_item_active'))
    switch (staffTabIndex) {
        case 0:
            $('.staff__head .title').html('Врачи &lt;лечебно – диагностического центра&gt;');
            break;
        case 1:
            $('.staff__head .title').html('Кураторы направлений &lt;лечебно – диагностического центра&gt;');
            break;
    }


};
const windowMobileSizeChange = () => {
    $('[data-mobile]').each(function () {
        $(this).data('desktop', $(this).html()).html($(this).data('mobile'));
    });
    $('.appointment__block > .content').removeClass(['content_flex', 'content_between']);
    $($('.staff__tabs_item')[0]).html('Врачи');
    const staffTabIndex = $('.staff__tabs_item').index($('.staff__tabs_item_active'))
    switch (staffTabIndex) {
        case 0:
            $('.staff__head .title').html('Врачи ЛДЦ');
            break;
        case 1:
            $('.staff__head .title').html('Кураторы направлений ЛДЦ');
            break;
    }

    if (isSet($('.control')) && !($('.control').find('.specialists__slider').hasClass('slick-initialized'))) {
        specSliderInit();
    }
};

const DropdownOpenButtonHandler = () => {
    $(document).on('click', function (event) {
        if ($(window).width() < 961) {
            if ($('.arrow-back').is(event.target)) {
                if (dropdownTabsBlock.attr('style') == 'display: none;' && dropdownContentBlock.attr('style') == '') {
                    dropdownContentBlock.css({
                        display: 'none'
                    });
                    dropdownTabsBlock.attr('style', '');
                    $('.dropdown-menu > .title').html('Услуги');
                } else if (dropdownMenuContainer.hasClass('dropdown-menu__container_active') && headerBottom.attr('style') == 'display: none;') {
                    dropdownMenuContainer.removeClass('dropdown-menu__container_active').addClass('hide').attr('style', '');
                    headerBottom.attr('style', '');
                } else if (dropdownMenuContainer.hasClass('dropdown-menu__container_active') && $(serviceTapButton).hasClass('tap-menu__button_active')) {
                    closeServicesDropdownFromTapMenu();
                }
            }
        }
    })
};
const mobileDropdownOpenButtonHandler = () => {
    $('.dropdown-menu__open-button').on('click', '.with-arrow', function (event) {
        dropdownMenuContainer.removeClass('hide');
        $('.header__bottom').css({display: 'none'});
        $('.dropdown-menu__content').css({display: 'none'});
        if (prependFlag == 0) {
            $('.dropdown-menu').prepend('<h2 class="title">Услуги</h2>');
            $('.dropdown-menu').prepend('<img class="arrow-back" width="20px" height="15px" src="./assets/img/dropdown-menu/arrow-back.svg">');
            prependFlag = 1;
        }
        dropdownMenuContainer.fadeIn(400).addClass('dropdown-menu__container_active');
    });
};

const onReadyMobileMediaChange = () => {
    $('[data-mobile]').each(function () {
        $(this).data('desktop', $(this).html()).html($(this).data('mobile'));
    });
    $('.appointment__block > .content').removeClass(['content_flex', 'content_between']);
    $('.dropdown-menu__open-button').append('<div class="with-arrow"></div>');
    dropdownTabs.append('<div class="with-arrow"></div>');
    $('.dropdown-menu__open-button').off('click');
    if (isSet($('.control')) && !($('.control .control__content .specialists__slider').hasClass('slick-initialized'))) {
        specSliderInit();
    }
};

const closeServicesDropdownFromTapMenu = () => {
    $('.dropdown-menu').find('.title').detach();
    $('.dropdown-menu').find('.arrow-back').detach();
    $(serviceTapButton).removeClass('tap-menu__button_active');
    $('body').children().removeClass('hide');
    dropdownMenuContainer.addClass('hide');
    $('.dropdown-menu__content').attr('style', '');
    dropdownMenuContainer.removeClass('dropdown-menu__container_active');
    dropdownMenuContainer.attr('style', '');
    dropdownContentBlock.attr('style', '');
    prependFlag = 0;
    $('body, html').animate({
        scrollTop: posTop
    }, 1);
};

const popupFormHandler = (e) => {

    $('.appointment_popup').addClass('appointment_popup_active').css({
        position: 'fixed',
        height: '100vh',
        background: 'rgba(63,90,138,0.4)',
        top: 0,
        left: 0,
        transform: 'none'
    });
    $('[name="id-of-service"]').val($(e.currentTarget).data('id'));
    $('body').css({
        overflow: 'hidden'
    });

};

const navLinkScroll = (navLinkTop) => {


    if ($(window).width() > 960) {
        if (($(this).scrollTop() + 129) >= navLinkTop) {
            $('.nav-links').css({
                position: 'fixed',
                top: '129px',
                left: 0,
                zIndex: 10000,
                width: '100%',
                background: '#F1F1F1'
            })
        } else {
            $('.nav-links').attr('style', '');
        }
    } else {
        $(document).off('scroll', navLinkScroll());
    }
};

//Действия при изменении размеров окна

$(window).on('resize', function () {

        if ($(window).width() >= 961) {
            if (resizeFlag == 0) {
                windowDesktopSizeChange();
                //ВЫПАДАЮЩЕЕ МЕНЮ В ХЭДЕРЕ
                resizeFlag = 1;
            }
        } else {
            if (resizeFlag == 1) {
                windowMobileSizeChange();
                resizeFlag = 0;
            }
        }


        if ($(window).width() >= 961 && appendFlag == 0) {
            selectButtons.appendTo('.about__slider');
            $('.with-arrow').detach();
            appendFlag = 1;
        } else if ($(window).width() < 961 && appendFlag == 1) {
            $('.dropdown-menu__open-button').append('<div class="with-arrow"></div>');
            dropdownTabs.append('<div class="with-arrow"></div>');
            appendFlag = 0;
        }

        if ($(window).width() > 960 && dropdownFlag == 0) {
            $('.dropdown-menu__open-button').off('click');
            $('.dropdown-menu__open-button').on('mouseup', function (event) {

                if (!dropdownMenuContainer.hasClass('dropdown-menu__container_active')) {
                    dropdownMenuContainer.fadeIn(400).addClass('dropdown-menu__container_active');
                    $('body').css({overflow: 'hidden'});
                    $('li.dropdown-menu__open-button').css({
                        height: 'calc(100% - 2px)',
                        borderBottom: '2px solid white'
                    });
                    $('li.dropdown-menu__open-button > a').css({
                        color: 'white',
                        transform: 'translateY(1px)'
                    })
                }
            });
            dropdownFlag = 1;
        } else if ($(window).width() <= 960 && dropdownFlag == 1) {
            $('.dropdown-menu__open-button').off('click');
            mobileDropdownOpenButtonHandler();
            dropdownFlag = 0;
        }

        if ($(window).width() > 576) {
            if (isSet($('.features__slider'))) {
                $('.features__slider').filter('.slick-initialized').slick("unslick");
                $('.features__slider').children().removeAttr('tabindex');
            }
            if (isSet($('.checkup-features'))) {
                $('.features__slider').filter('.slick-initialized').slick("unslick");
                $('.features__slider').children().removeAttr('tabindex');
            }
        } else if (!$('.features__slider').hasClass('slick-initialized')) {
            if (isSet($('.features__slider'))) {
                featuresSliderInit();
                $('.features__slider').slick('setPosition');
            }
            if (isSet($('.checkup-features'))) {
                checkupFeaturesSliderInit();
                $('.features__slider').slick('setPosition');
            }
        }

        if ($(window).width() > 1399) {
            if (isSet($('.about__slider'))) {
                $('.about__slider').filter('.slick-initialized').slick("unslick");
                $('.about__slider').children().removeAttr('tabindex');
                if (aboutInterval === undefined) {
                    aboutInterval = setInterval(autoplayHandler, 10000)
                }
            }
        } else if (!$('.about__slider').hasClass('slick-initialized')) {
            if (isSet($('.about__slider'))) {
                selectButtons.detach();
                aboutSliderInit();
                $('.about__slider').slick('setPosition');
                selectButtons.appendTo('.about__slider');
                clearInterval(aboutInterval);
                aboutInterval = undefined;

            }
        }


        if ($(window).width() > 1130) {
            if (isSet($('.units__menu > ul'))) {
                $('.units__menu > ul').filter('.slick-initialized').slick("unslick");
                $('.units__menu > ul').children().removeAttr('tabindex');
            }
        } else if (!$('.units__menu > ul').hasClass('slick-initialized')) {
            if (isSet($('.units__menu > ul'))) {
                unitsMenuSliderInit();
                $('.units__menu > ul').slick('setPosition');
            }
        }

        // if (isSet($('.price'))) {
        //     if ($(window).width() > 677 && typeof (sbPrice) != 'undefined') {
        //         if (isSet($('.price__list'))) {
        //             sbPrice.destroy();
        //             sbPrice = undefined;
        //         }
        //     } else if ($(window).width() <= 677 && typeof (sbPrice) === 'undefined') {
        //         sbPrice = new ScrollBooster({
        //             viewport: document.querySelector('.price__list'),
        //             content: document.querySelector('.price__list_wrapper'),
        //             scrollMode: "transform", // use CSS 'transform' property
        //             direction: "horizontal", // allow only horizontal scrolling
        //             pointerMode: 'all',
        //             pointerDownPreventDefault: false,
        //             onClick: (state, event) => {
        //                 if ($('.form-call-button').is(event.target)) {
        //                     popupFormHandler();
        //                 }
        //             }
        //             // emulateScroll: true, // scroll on wheel events
        //         });
        //     }
        // }
        if (isSet($('.nav-links'))) {
            if ($(window).width() > 960 && typeof (sbNavLinks) != 'undefined') {
                sbNavLinks.destroy();
                sbNavLinks = undefined;
                $('.nav-links__link').off('click');
                $('.nav-links__link').on('click', function (event) {
                    const elementClick = $(this).attr("href");
                    const destination = $(elementClick).position().top;
                    if ($('.nav-links').attr('style') !== undefined) {
                        $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height())}, 500);
                    } else {
                        $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height() * 2)}, 500);
                    }
                    $('.nav-links__link').removeClass('tab-link_red_active');
                    const index = $('.nav-links__link').index(event.target);
                    $($('.nav-links__link')[index]).addClass('tab-link_red_active');
                    return false;
                });
            } else if ($(window).width() <= 960 && typeof (sbNavLinks) === 'undefined') {
                sbNavLinks = new ScrollBooster({
                    viewport: document.querySelector('.nav-links__block'),
                    content: document.querySelector('.nav-links__list'),
                    scrollMode: "transform", // use CSS 'transform' property
                    direction: "horizontal", // allow only horizontal scrollin
                });
                if ($('.nav-links').attr('style') != '') {
                    $('.nav-links').attr('style', '');
                }
                $('.nav-links__link').off('click');
                $('.nav-links__link').on('click', function (event) {

                    const elementClick = $(this).attr("href");
                    const destination = $(elementClick).position().top;
                    $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height())}, 500);
                    return false;
                });
            }
        }
        if (isSet($('.unit-simple'))) {
            $('.unit-simple__slider_item').each(function () {
                $(this).css({
                    width: $('.unit-simple__slider').width(),
                    background: 'url("' + $(this).children().attr('src') + '") center no-repeat',
                    backgroundSize: 'cover'
                })
            })
        }

        if (isSet($('.specialists .specialists__slider'))) {
            const specSlickItem = $('.specialists__slider .specialists__doctor');
            if ($(window).width() >= 1400) {
                if (specSlickItem.length >= 5) {
                    $('.specialists__slider').removeAttr('style');
                    $('.specialists__block .arrows').removeAttr('style');
                    if (!($('.specialists__slider').hasClass('slick-initialized'))) {
                        specSliderInit();
                    }
                } else {
                    $('.specialists__block .arrows').css('display', 'none');

                    $('.specialists__control-panel .mobile').css('display', 'none');
                }
            }
            if ($(window).width() >= 961 && $(window).width() < 1400) {
                if (specSlickItem.length >= 4) {
                    $('.specialists__slider').removeAttr('style');
                    $('.specialists__block .arrows').removeAttr('style');
                    if (!($('.specialists__slider').hasClass('slick-initialized'))) {
                        specSliderInit();
                    }

                } else {
                    $('.specialists__block .arrows').css('display', 'none');

                    $('.specialists__control-panel .mobile').css('display', 'none');
                }
            }
            if ($(window).width() >= 769 && $(window).width() < 961) {
                if (specSlickItem.length > 3) {
                    $('.specialists__slider').removeAttr('style');
                    $('.specialists__block .arrows').removeAttr('style');
                    if (!($('.specialists__slider').hasClass('slick-initialized'))) {
                        specSliderInit();
                    }

                } else {
                    $('.specialists__block .arrows').css('display', 'none');

                    $('.specialists__control-panel .mobile').css('display', 'none');
                }
            }
            if ($(window).width() >= 577 && $(window).width() < 769) {
                if (specSlickItem.length > 2) {
                    $('.specialists__slider').removeAttr('style');
                    $('.specialists__block .arrows').removeAttr('style');
                    if (!($('.specialists__slider').hasClass('slick-initialized'))) {
                        specSliderInit();
                    }

                } else {
                    $('.specialists__block .arrows').css('display', 'none');

                    $('.specialists__control-panel .mobile').css('display', 'none');
                }
            }
            if ($(window).width() < 577) {
                if (specSlickItem.length > 1) {
                    $('.specialists__slider').removeAttr('style');
                    $('.specialists__block .arrows').removeAttr('style');
                    if (!($('.specialists__slider').hasClass('slick-initialized'))) {
                        specSliderInit();
                    }
                } else {
                    $('.specialists__block .arrows').css('display', 'none');

                    $('.specialists__control-panel .mobile').css('display', 'none');
                }
            }

        }

        if (isSet($('.staff'))) {
            const specSlickInStaff = $('.staff__ordinary .specialists__slider');
            if ($(window).width() >= 961 && specSlickInStaff.hasClass('slick-initialized')) {
                specSlickInStaff.css({
                    display: 'flex',
                    marginLeft: '-10px',
                    marginRight: '-10px',
                });
                $('.staff__ordinary .specialists__doctor').removeAttr('style');
            }
            if ($(window).width() < 961 && !(specSlickInStaff.hasClass('slick-initialized'))) {
                specSlickInStaff.removeAttr('style');
                $('.staff__ordinary .specialists__doctor').css({
                    width: 325 + 'px',
                    maxWidth: 325 + 'px',
                });
                specSliderInit();

            }
        }

        if (isSet($('.feedback__slider'))) {
            const feedSlickItem = $('.feedback__item');
            const feedSlick = $('.feedback__slider');
            if ($(window).width() >= 961) {
                if (feedSlickItem.length > 2) {
                    if (!(feedSlick.hasClass('slick-initialized'))) {
                        feedSliderInit();
                    }
                } else {
                    feedSlick.css({
                        display: 'flex',
                    });
                    $('.feedback__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() < 960) {
                if (feedSlickItem.length > 1) {
                    if (!(feedSlick.hasClass('slick-initialized'))) {
                        feedSliderInit();
                    }
                } else {
                    feedSlick.css({
                        display: 'flex',
                    });
                    $('.feedback__head .arrows').css('display', 'none');
                    $('.feedback__position').css('display', 'none');
                }
            }
        }

        if (isSet($('.tools')) && !($('.tools__slider').hasClass('slick-initialized'))) {
            const toolsSlickItem = $('.tools__slider_item');
            if ($(window).width() > 1200) {
                if (toolsSlickItem.length > 4) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() >= 961 && $(window).width() < 1200) {
                if (toolsSlickItem.length > 3) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() >= 577 && $(window).width() < 961) {
                if (toolsSlickItem.length > 2) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() < 577) {
                if (toolsSlickItem.length > 1) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
        }

        // if (isSet($('.cost'))) {
        //     if ($(window).width() > 768 && typeof (sbCost) != 'undefined') {
        //         if ($('.cost').length == 1) {
        //             sbCost.destroy();
        //             sbCost = undefined;
        //         }
        //         if ($('.cost').length > 1) {
        //             sbCost.forEach(function (el, i) {
        //                 el.destroy();
        //             });
        //             sbCost = undefined;
        //         }
        //     } else if ($(window).width() <= 768 && typeof (sbCost) === 'undefined') {
        //         if ($('.cost').length == 1) {
        //             sbCost = new ScrollBooster({
        //                 viewport: document.querySelector('.cost__wrapper'),
        //                 content: document.querySelector('.cost__wrapper > ul.cost__list'),
        //                 scrollMode: "transform", // use CSS 'transform' property
        //                 direction: "horizontal", // allow only horizontal scrollin
        //                 pointerMode: 'all',
        //                 pointerDownPreventDefault: false
        //             });
        //         }
        //         if ($('.cost').length > 1) {
        //             sbCost = Array(sbCost);
        //             sbCost = [];
        //             $('.cost').each(function () {
        //                 sbCost.push(new ScrollBooster({
        //                     viewport: $(this).find('.cost__wrapper')[0],
        //                     content: $(this).find('.cost__wrapper').children()[0],
        //                     scrollMode: "transform", // use CSS 'transform' property
        //                     direction: "horizontal", // allow only horizontal scrollin
        //                     pointerMode: 'all',
        //                     pointerDownPreventDefault: false
        //                 }));
        //             });
        //         }
        //     }
        // }
        if ($(window).width() <= ($('.direction-services__tabs').width() + 30) && !($('.direction-services__tabs').hasClass('slick-initialized'))) {
            dirServSliderInit();
        } else if ($(window).width() > ($('.direction-services__tabs').width() + 30) && $('.direction-services__tabs').hasClass('slick-initialized')) {
            $('.direction-services__tabs').slick('unslick');
        }

        if (isSet($('.news'))) {
            if ($(window).width() > 960 && typeof (sbNews) != 'undefined') {
                if (isSet($('.news__content'))) {
                    sbNews.destroy();
                    sbNews = undefined;
                }
            } else if ($(window).width() <= 960 && typeof (sbNews) === 'undefined') {
                sbNews = new ScrollBooster({
                    viewport: document.querySelector('.news__content'),
                    content: document.querySelector('.news__wrapper'),
                    scrollMode: "transform", // use CSS 'transform' property
                    direction: "horizontal", // allow only horizontal scrollin
                    pointerMode: 'all',
                    pointerDownPreventDefault: false
                });
            }
        }
        if (isSet($('.partners'))) {
            if ($(window).width() > 960 && typeof (sbPartners) != 'undefined') {
                if (isSet($('.partners'))) {
                    sbPartners.destroy();
                    sbPartners = undefined;
                }
            } else if ($(window).width() <= 960 && typeof (sbPartners) === 'undefined') {
                sbPartners = new ScrollBooster({
                    viewport: document.querySelector('.partners__content'),
                    content: document.querySelector('.partners__content > .content'),
                    scrollMode: "transform", // use CSS 'transform' property
                    direction: "horizontal", // allow only horizontal scrollin
                    pointerMode: 'all',
                    pointerDownPreventDefault: false
                });
            }
        }
        if (isSet(($('.diplomas')))) {
            const diplomasSlick = $('.diplomas__slider');
            const diplomasSlickItem = $('.diplomas__slider_item');

            if (!(diplomasSlick.hasClass('slick-initialized'))) {
                if ($(window).width() >= 769) {
                    if (diplomasSlickItem.length > 5) {
                        diplomasSliderInit();
                    } else {

                        $('.diplomas__slider_item').each(function () {
                            $(this).css({
                                height: $(this).children().height(),
                            });
                        });
                    }
                }
                if ($(window).width() >= 577 && $(window).width() < 769) {
                    if (diplomasSlickItem.length > 3) {
                        diplomasSliderInit();
                    } else {
                        $('.diplomas__slider_item').each(function () {
                            $(this).css({
                                height: $(this).children().height(),
                            });
                        });
                    }
                }
                if ($(window).width() < 577) {
                    if (diplomasSlickItem.length > 2) {
                        diplomasSliderInit();
                    } else {
                        $('.diplomas__slider_item').each(function () {
                            $(this).css({
                                height: $(this).children().height(),
                            });
                        });
                    }
                }
            }
        }

        if (isSet($('.specialists-details'))) {
            const specDetailsSlick = $('.specialists-details__slider');
            const specDetailsItem = $('.specialists-details__slider_item');
            if (!(specDetailsSlick.hasClass('slick-initialized'))) {
                if ($(window).width() >= 1200) {
                    if (specDetailsItem.length > 2) {
                        specDetailsSliderInit();
                    }
                }
                if ($(window).width() >= 577 && $(window).width() < 1200) {
                    if (specDetailsItem.length > 2) {
                        specDetailsSliderInit();
                    }
                }
                if ($(window).width() < 577) {
                    if (specDetailsItem.length > 1) {
                        specDetailsSliderInit();
                    }
                }
            } else {
                if ($(window).width() >= 1200) {
                    if (specDetailsItem.length <= 2) {
                        specDetailsSlick.slick('unslick');
                        $('.specialists-details__head .specialists-details__control-panel').css({
                            visibility: 'hidden'
                        });
                        $('.specialists-details__content .specialists-details__control-panel .arrows').css({
                            visibility: 'hidden'
                        });
                        specDetailsSlick.css({
                            marginLeft: '-10px',
                            marginRight: '-10px'
                        })
                    }
                }
                if ($(window).width() >= 577 && $(window).width() < 1200) {
                    if (specDetailsItem.length <= 2) {
                        specDetailsSlick.slick('unslick');
                        if ($(window).width() < 769) {
                            specDetailsSlick.css({
                                marginLeft: '-10px',
                                marginRight: '-10px'
                            });
                            $('.specialists-details__head .specialists-details__control-panel.mobile').css({
                                visibility: 'hidden'
                            });
                        } else {
                            specDetailsSlick.css({
                                margin: '-10px 0'
                            });
                            $('.specialists-details__content .specialists-details__control-panel .arrows').css({
                                visibility: 'hidden'
                            });
                            $('.specialists-details__content .specialists-details__control-panel').css({
                                display: 'none'
                            });
                        }
                    }
                }
                if ($(window).width() < 577) {
                    if (specDetailsItem.length <= 1) {
                        specDetailsSlick.slick('unslick').removeAttr('style');
                        $('.specialists-details__head .specialists-details__control-panel').css({
                            visibility: 'hidden'
                        });
                    }
                }
            }
        }
        if (isSet($('.tools-details'))) {
            const toolsDetailsSlick = $('.tools-details__slider');
            const toolsDetailsItem = $('.tools-details__slider_item');
            if (!(toolsDetailsSlick.hasClass('slick-initialized'))) {
                if (toolsDetailsItem.length > 1) {
                    toolsDetailsSliderInit();
                }
            } else {
                if (toolsDetailsItem.length <= 1) {
                    toolsDetailsItem.slick('unslick');
                    $('.tools-details__head .tools-details__position').css({
                        visibility: 'hidden'
                    });
                    $('.tools-details__head .arrows').css({
                        visibility: 'hidden'
                    })
                }
            }

        }
        // if (isSet($('.table__wrapper'))) {
        //     console.log(sbTable)
        //     $('.table__wrapper').each(function (index) {
        //         if ($(this).width() > $(this).children().width() && typeof (sbTable) != 'undefined') {
        //             var indexOf = index;
        //             sbTable.forEach(function (el, i) {
        //                 if (i == indexOf) {
        //                     el.destroy();
        //                 }
        //             });
        //         } else if ($(this).width() < $(this).children().width()) {
        //             sbTable = Array(sbTable);
        //             sbTable = [];
        //             sbTable.push(new ScrollBooster({
        //                 viewport: $(this)[0],
        //                 content: $(this).children()[0],
        //                 scrollMode: "transform", // use CSS 'transform' property
        //                 direction: "horizontal", // allow only horizontal scrollin
        //                 pointerMode: 'all',
        //                 pointerDownPreventDefault: false
        //             }));
        //         }
        //     })
        //
        // }
    }
);

$('body').css('overflow', 'hidden');

// Обработка событий при полной загрузки страницы
window.onload = function () {

    setTimeout(function () {
        $('.preloader').fadeOut(500, function () {
            $('body').removeAttr('style');
            $('header, footer, main').addClass('visible');
        })
    }, 1000);

    $('.form-call-button').on('click', popupFormHandler);


    //Слайдер специалистов и кнопки слайдера специалистов
    if (isSet($('.specialists .specialists__slider'))) {
        const specSlickItem = $('.specialists__slider .specialists__doctor');
        if ($(window).width() >= 1400) {
            if (specSlickItem.length >= 5) {
                $('.specialists__slider').removeAttr('style');
                $('.specialists__block .arrows').removeAttr('style');
                specSliderInit();

            } else {
                $('.specialists__slider').css('display', 'flex');
                $('.specialists__block .arrows').css('display', 'none');
            }
        }
        if ($(window).width() >= 961 && $(window).width() < 1400) {
            if (specSlickItem.length >= 4) {
                specSliderInit();
            } else {
                $('.specialists__slider').css('display', 'flex');
                $('.specialists__block .arrows').css('display', 'none');
            }
        }
        if ($(window).width() >= 769 && $(window).width() < 961) {
            if (specSlickItem.length > 3) {
                specSliderInit();
            } else {
                $('.specialists__slider').css('display', 'flex');
                $('.specialists__block .arrows').css('display', 'none');
            }
        }
        if ($(window).width() >= 577 && $(window).width() < 769) {
            if (specSlickItem.length > 2) {
                specSliderInit();
            } else {
                $('.specialists__slider').css('display', 'flex');
                $('.specialists__block .arrows').css('display', 'none');
            }
        }
        if ($(window).width() < 577) {
            if (specSlickItem.length > 1) {
                specSliderInit();
            } else {
                $('.specialists__slider').css('display', 'flex');
                $('.specialists__block .arrows').css('display', 'none');
            }
        }

    }

    if (isSet($('.staff'))) {
        if ($(window).width() >= 961) {
            $('.staff__ordinary .specialists__slider').css({
                display: 'flex',
                marginLeft: '-10px',
                marginRight: '-10px',
            });
        }
        if ($(window).width() < 961) {
            $('.staff__ordinary  .specialists__slider').removeAttr('style');
            $('.staff__ordinary .specialists__doctor').css({
                width: 325 + 'px',
                maxWidth: 325 + 'px',
            });
            specSliderInit();


        }
    }

    //Сладер отзывов и кнопки сладера отзывов
    if (isSet($('.feedback__slider'))) {
        const feedSlickItem = $('.feedback__item');
        const feedSlick = $('.feedback__slider');
        if ($(window).width() >= 961) {
            if (feedSlickItem.length > 2) {
                feedSliderInit();
            } else {
                feedSlick.css({
                    display: 'flex',
                });
                $('.feedback__head .arrows').css('display', 'none');
            }
        }
        if ($(window).width() < 960) {
            if (feedSlickItem.length > 1) {
                feedSliderInit();
            } else {
                feedSlick.css({
                    display: 'flex',
                });
                $('.feedback__head .arrows').css('display', 'none');
                $('.feedback__position').css('display', 'none');
            }
        }
    }


    //Основной слайдер (анимации и тд)
    if (isSet($('.about__slider')) && isSet($('.select-buttons__button'))) {
        const aboutSliderCurrentSlide = $('.about__item').index($('.about__item_active'));
        const sliderButtons = $('.select-buttons__button');
        sliderButtons[aboutSliderCurrentSlide].classList.add('select-buttons__button_active');
        let sliderFlag = 0;
        sliderButtons.on('click', function (event) {
            const index = sliderButtons.index(event.currentTarget);
            if ($(window).width() >= 1400) {
                if (sliderFlag == 0) {
                    sliderButtons.removeClass('select-buttons__button_active');
                    const prevItem = $('.about__item_active');
                    const sliderItems = $('.about__item');
                    const sliderItem = sliderItems[index];
                    sliderButtons.removeClass('select-buttons__button_active');
                    event.currentTarget.classList.add('select-buttons__button_active');
                    prevItem.addClass('about__item_deactivate');
                    sliderFlag = 1;
                    setTimeout(function () {
                        prevItem.removeClass('about__item_deactivate');
                        prevItem.removeClass('about__item_active');
                        sliderItem.classList.add('about__item_active');
                        sliderFlag = 0
                    }, 900);
                }

            } else {
                $('.about__slider').slick('slickGoTo', index, false);
                sliderButtons.removeClass('select-buttons__button_active');
                event.currentTarget.classList.add('select-buttons__button_active');
            }
        });
    }
    if (isSet($('.about__slider')) && $(window).width() > 1399 && aboutInterval === undefined) {
        // $('.select-buttons__button').off('click');
        aboutInterval = setInterval(
            autoplayHandler
            , 10000)
    }

    //Изменение поля поиска
    const headerSearchField = $('.header__search-form-field');
    headerSearchField.on('focus', function () {
        $('.header__search-form').addClass('header__search-form_focus');
    });
    headerSearchField.on('blur', function () {
        $('.header__search-form').removeClass('header__search-form_focus');
    });

    //Изменения табов в блоках отделений
    let menuFlag = 0;
    $('.units__menu li > a').on('click', function (event) {
        if ($(window).width() > 961) {
            event.preventDefault();
        }
        if (menuFlag == 0) {
            menuFlag = 1;
            const index = $('.units__menu li').index($(this).parent());
            const prevLink = $('.units__menu-link.tab-link_red_active');
            prevLink.removeClass('tab-link_red_active');
            $(this).addClass('tab-link_red_active');
            $('.units__content-services_active').animate({opacity: 0}, 500, function () {
                $(this).removeClass('units__content-services_active').removeAttr('style');
                $($('.units__content-services')[index]).addClass('units__content-services_active').css('opacity', 0).animate({opacity: 1}, 500, function () {
                    menuFlag = 0;
                });
            });
        }
    });


    //Действия со слайдерами в момент загрузки экрана маленького размера или большого размера
    if (isSet($('.features'))) {
        if ($(window).width() < 577) {
            featuresSliderInit();
        }
    }
    if (isSlickLoaded) {
        if (window.matchMedia('screen and (max-width: 1400px)').matches) {
            selectButtons.detach();
            aboutSliderInit();
            unitsMenuSliderInit();
            $('.feedback__position').html('<span class="feedback__position_current">1</span>/' + $('.feedback__item').length);
        } else {
            $('.about__slider').filter('.slick-initialized').slick("unslick");
            $('.units__menu > ul').filter('.slick-initialized').slick("unslick");
        }

        if ($('.units__menu > .slick-initialized')) {
            unitsMenuSliderChangeTab()
        }

        if ($('.feedback__slider.slick-initialized')) {
            $('.feedback__slider').on('afterChange', function (event, slick, currentSlide) {
                $('.feedback__position_current').html($('.feedback__slider').slick('slickCurrentSlide') + $('.feedback__slider').slick('slickGetOption', 'slidesToScroll'));
            });
        }

        if (window.matchMedia('screen and (min-width: 960px)').matches) {
            selectButtons.appendTo('.about__slider')
        } else {
            selectButtons.detach();
        }
    }

    if (isSet($('.diplomas__slider'))) {
        const diplomasSlick = $('.diplomas__slider');
        const diplomasSlickItem = $('.diplomas__slider_item');
        diplomasSlick.magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
        });


        $('.diplomas__slider_item img').each(function () {
            // удаляем атрибуты width и height
            $(this).removeAttr("width")
                .removeAttr("height")
                .css({width: "auto", height: "auto"});

            // получаем заветные цифры
            const width = $(this).width();
            const height = $(this).height();
            $(this).removeAttr('style');
            if (width < height) {
                $(this).css({
                    height: '100%',
                    objectFit: 'fill'
                })
            }
        });

        if (!(diplomasSlick.hasClass('slick-initialized'))) {
            if ($(window).width() >= 769) {
                if (diplomasSlickItem.length > 5) {
                    diplomasSliderInit();
                } else {
                    diplomasSlick.css('display', 'flex');
                    $('.diplomas__head .diplomas__position').css('display', 'none');
                    $('.diplomas__head .arrows').css('display', 'none');
                    $('.diplomas__slider_item').each(function () {
                        $(this).css({
                            height: $(this).children().height(),
                        });
                    });
                }
            }
            if ($(window).width() >= 577 && $(window).width() < 769) {
                if (diplomasSlickItem.length > 3) {
                    diplomasSliderInit();
                } else {
                    diplomasSlick.css('display', 'flex');
                    $('.diplomas__head .diplomas__position').css('display', 'none');
                    $('.diplomas__head .arrows').css('display', 'none');
                    $('.diplomas__slider_item').each(function () {
                        $(this).css({
                            height: $(this).children().height(),
                        });
                    });
                }
            }
            if ($(window).width() < 577) {
                if (diplomasSlickItem.length > 2) {
                    diplomasSliderInit();
                } else {
                    diplomasSlick.css('display', 'flex');
                    $('.diplomas__head .diplomas__position').css('display', 'none');
                    $('.diplomas__head .arrows').css('display', 'none');
                    $('.diplomas__slider_item').each(function () {
                        $(this).css({
                            height: $(this).children().height(),
                        });
                    });
                }
            }
        }
    }

    if (isSet($('.unit-simple'))) {
        unitSimpleSliderInit();
        $('.unit-simple__slider_item').each(function () {
            $(this).css({
                width: $('.unit-simple__slider').width(),
                background: 'url("' + $(this).children().attr('src') + '") center no-repeat',
                backgroundSize: 'cover'
            })
        })
    }
    if (isSet($('.tools'))) {
        const toolsSlickItem = $('.tools__slider_item');
        if (!($('.tools__slider').hasClass('slick-initialized'))) {
            if ($(window).width() >= 1200) {
                if (toolsSlickItem.length > 4) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() >= 961 && $(window).width() < 1200) {
                if (toolsSlickItem.length > 3) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() >= 577 && $(window).width() < 961) {
                if (toolsSlickItem.length > 2) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
            if ($(window).width() < 577) {
                if (toolsSlickItem.length > 1) {
                    toolsSliderInit();
                } else {
                    $('.tools__head .tools__position').css('display', 'none');
                    $('.tools__head .arrows').css('display', 'none');
                }
            }
        }


        toolsSlickItem.each(function () {
            const imageSrc = $(this).children('img').attr('src');
            $(this).css({
                background: 'url("' + imageSrc + '") center no-repeat',
                backgroundSize: 'cover'
            })
        });
    }
    if (isSet($('.direction-services'))) {
        if ($(window).width() <= ($('.direction-services__tabs').width() + 30)) {
            dirServSliderInit();
        }
        const dirServTabsLinks = $('.direction-services__tabs_link');

        dirServTabsLinks.on('click', function (event) {
            event.preventDefault();
            dirServTabsLinks.removeClass('tab-link_red_active');
            const index = dirServTabsLinks.index(event.currentTarget);
            $(dirServTabsLinks[index]).addClass('tab-link_red_active');
            const dirServContentItems = $('.direction-services__content_item');
            dirServContentItems.removeClass('direction-services__content_item_active');
            $(dirServContentItems[index]).addClass('direction-services__content_item_active');
        })
    }

    if (isSet($('.specialists-details'))) {
        $('.specialists-details__slider_item .doctor-card__doctor a').text('Подробнее о враче')
        const specDetailsSlick = $('.specialists-details__slider');
        const specDetailsItem = $('.specialists-details__slider_item');
        if (!(specDetailsSlick.hasClass('slick-initialized'))) {
            if ($(window).width() >= 1200) {
                if (specDetailsItem.length > 2) {
                    specDetailsSliderInit();
                } else {
                    $('.specialists-details__head .specialists-details__control-panel').css({
                        visibility: 'hidden'
                    });
                    $('.specialists-details__content .specialists-details__control-panel .arrows').css({
                        visibility: 'hidden'
                    });
                    specDetailsSlick.css({
                        marginLeft: '-10px',
                        marginRight: '-10px'
                    })
                }
            }
            if ($(window).width() >= 577 && $(window).width() < 1200) {
                if (specDetailsItem.length > 2) {
                    specDetailsSliderInit();
                } else {

                    if ($(window).width() < 769) {
                        specDetailsSlick.css({
                            marginLeft: '-10px',
                            marginRight: '-10px'
                        });
                        $('.specialists-details__head .specialists-details__control-panel.mobile').css({
                            visibility: 'hidden'
                        });
                    } else {
                        specDetailsSlick.css({
                            margin: '-10px 0'
                        });
                        $('.specialists-details__content .specialists-details__control-panel .arrows').css({
                            visibility: 'hidden'
                        });
                        $('.specialists-details__content .specialists-details__control-panel').css({
                            display: 'none'
                        });
                    }
                }
            }
            if ($(window).width() < 577) {
                if (specDetailsItem.length > 1) {
                    specDetailsSliderInit();
                } else {
                    $('.specialists-details__head .specialists-details__control-panel').css({
                        visibility: 'hidden'
                    });
                }
            }
        }
    }

    if (isSet($('.tools-details'))) {
        const toolsDetailsSlick = $('.tools-details__slider');
        const toolsDetailsItem = $('.tools-details__slider_item');
        if (!(toolsDetailsSlick.hasClass('slick-initialized'))) {
            if (toolsDetailsItem.length > 1) {
                toolsDetailsSliderInit();
            } else {
                $('.tools-details__head .tools-details__position').css({
                    visibility: 'hidden'
                });
                $('.tools-details__head .arrows').css({
                    visibility: 'hidden'
                })
            }
        }

    }
}
;

// document.addEventListener('DOMContentLoaded', function(){
//     $('header, footer, main').addClass('visible');
//     setTimeout(function () {
//         $('.preloader').fadeOut(500, function () {
//             $('body').removeAttr('style')
//         })
//     }, 1000);
// });
//Обработка событий после загрузки страницы
$(document).ready(function () {
    $('.tap-menu__button').on('click', function (event) {
        if ($('.tap-menu__button').index($(this)) !== 1 && $('.tap-menu__button').index($(this)) !== 2) {
            event.preventDefault();
        }
    });

    if (isSet($('.image_blur'))) {
        const imageBlur = $('.image_blur');
        imageBlur.on('click', function () {
            $(this).magnificPopup({
                delegate: 'img',
                type: 'image',
                callbacks: {
                    elementParse: function (item) {
                        item.src = item.el.attr('src');
                    }
                }
            }).magnificPopup('open');
        });
        imageBlur.each(function () {
            if ($(this).children('img').data('description') !== undefined) {
                $(this).append('<small>' + $(this).children('img').data('description') + '</small>')
            } else {
                $(this).addClass('image_blur_top_0');
            }
            if (!($(this).hasClass('image_blur--off'))) {
                $(this).append('<div class="image_blur-hover" style="height:' + $(this).children('img').height() + 'px;"></div>');
            }
            // $(this).append(`<div class="image_blur-hover" style="height: ${$(this).children('img').height()}px;"></div>`);
        });

    }
    if (isSet($('.licenses'))) {
        const images = $('.licenses__images > li');
        images.magnificPopup({
            delegate: 'img',
            type: 'image',
            callbacks: {
                elementParse: function (item) {
                    item.src = item.el.attr('src');
                }
            },
            gallery: {
                enabled: true, // set to true to enable gallery
            }
        });
        images.on('click', function () {
            images.magnificPopup('open', images.index($(this)));
        });
    }

    if (isSet($('.rent-image'))) {
        const images = $('.rent-image');
        images.magnificPopup({
            type: 'image',
            callbacks: {
                elementParse: function (item) {
                    item.src = item.el.attr('src');
                }
            },
            gallery: {
                enabled: true, // set to true to enable gallery
            }
        });
        images.on('click', function () {
            images.magnificPopup('open', images.index($(this)));
        });
    }

    if (isSet($('.social-media'))) {
        const videos = $('.social-media__item');
        videos.each(function () {
            $(this).attr('href', $(this).children().attr('src'))
        });
        videos.on('click', function (event) {
            event.preventDefault();
        });
        videos.magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: '', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: '%id%' // URL that will be set as a source for iframe.
                    },
                }
            }
        })
    }


    if ($(window).width() >= 961) {
        $('.dropdown-menu__open-button').on('mouseup', function (event) {

            if (!dropdownMenuContainer.hasClass('dropdown-menu__container_active')) {
                dropdownMenuContainer.fadeIn(400).addClass('dropdown-menu__container_active');
                $('body').css({overflow: 'hidden'});
                $('li.dropdown-menu__open-button').css({
                    height: 'calc(100% - 2px)',
                    borderBottom: '2px solid white'
                });
                $('li.dropdown-menu__open-button > a').css({
                    color: 'white',
                    transform: 'translateY(1px)'
                });
            }
        });
        $(document).mousedown(function (e) {
            if (dropdownMenuContainer.hasClass('dropdown-menu__container_active')) {

                const block = $('.dropdown-menu');
                if (block.has(e.target).length === 0 && !$('.dropdown-menu__open-button').is(e.target)) {
                    dropdownMenuContainer.fadeOut(400).removeClass('dropdown-menu__container_active');
                    $('body').css({overflow: 'visible'});
                    $('li.dropdown-menu__open-button').attr('style', '');
                    $('li.dropdown-menu__open-button > a').attr('style', '');
                }
            }
        });
    }
    if (isSet($('.appointment')) || isSet($('.appointment_popup'))) {

        //Переменные для работы с формой
        const appointmentPhoneInput = $('.appointment__phone');
        const appointmentNameInput = $('.appointment__customerName');
        const appointmentConfident = $('.appointment__confident');
        const appointmentSubmitButton = $('.appointment__form .btn[type="submit"]');
        const popUpClose = $('.popup-close-button');
        const popUp = $('.popup');

        //ПОП АП ОКНО
        popUpClose.on('click', function () {
            popUp.hide();
            $('body').removeAttr('style');
            $('.appointment__form').unbind('submit').each(function () {
                $(this)[0].reset();
                $(this).find('input [type="hidden"]').val('');
            });
            if (window.popupOriginalText !== undefined) {
                $('.popup__block .text').text(window.popupOriginalText);
            }
        });

        //ОБРАБОТКА ФОРМЫ ЗАПИСИ

        appointmentSubmitButton.on('click', function (event) {
            if (appointmentNameInput.val() == '') {
                appointmentNameInput.css({
                    borderColor: '#E84E2C',
                    color: '#E84E2C'
                });
                $('label[for="customerName"], label[for="popup-customerName"]').css({
                    color: '#E84E2C'
                }).html('Введите имя');
                event.preventDefault();
            }

            if (!Inputmask.isValid(appointmentPhoneInput.val(), "+7-(999)-999-9999")) {
                appointmentPhoneInput.css({
                    borderColor: '#E84E2C',
                    color: '#E84E2C'
                });
                $('label[for="phone"]').css({
                    color: '#E84E2C'
                }).html('Введите телефон');
                event.preventDefault();
            }
            if (!appointmentConfident.prop("checked")) {
                event.preventDefault();
                appointmentConfident.css({
                    borderColor: '#E84E2C'
                });
                $('.confident-label small').css({
                    color: '#E84E2C'
                });
                $('.confident-label small a').css({
                    color: '#E84E2C'
                })
            }
            if (appointmentConfident.prop('checked') && Inputmask.isValid(appointmentPhoneInput.val(), "+7-(999)-999-9999") && appointmentNameInput.val() !== '') {
                event.preventDefault();
                popUp.show();
                popUp.css({
                    display: 'flex'
                });
                $('body').css({
                    overflow: 'hidden'
                })
            }
        });

        $('.appointment__form .appointment__input-wrapper > input').on('input', function (event) {
            if (!($(this).is(appointmentPhoneInput))) {
                if ($(event.target).val() !== '') {
                    $(event.target).attr('style', '');
                    $(event.target).siblings('label').attr('style', '');
                    $('.appointment__form').bind('submit')
                } else {
                    $(event.target).css({
                        borderColor: '#E84E2C',
                        color: '#E84E2C'
                    });
                    $(event.target).siblings('label').css({
                        color: '#E84E2C'
                    });
                }
            }
        });
        appointmentPhoneInput.on('blur', function (event) {
            if (!Inputmask.isValid($(this).val(), "+7-(999)-999-9999")) {
                appointmentPhoneInput.css({
                    borderColor: '#E84E2C',
                    color: '#E84E2C'
                });
                appointmentPhoneInput.siblings('label').css({
                    color: '#E84E2C'
                });
                $('.appointment__form').unbind('submit');
            } else {
                $(event.target).attr('style', '');
                $(event.target).siblings('label').attr('style', '');
                $('.appointment__form').bind('submit')
            }
        })
        // appointmentPhoneInput.on('input paste', function (event) {
        //     switch (event.type) {
        //         case 'input':
        //             if (!Inputmask.isValid($(this).val(), "+7-(999)-999-9999")) {
        //                 appointmentPhoneInput.css({
        //                     borderColor: '#E84E2C',
        //                     color: '#E84E2C'
        //                 });
        //                 appointmentPhoneInput.siblings('label').css({
        //                     color: '#E84E2C'
        //                 });
        //                 $('.appointment__form').unbind('submit');
        //             } else {
        //                 $(event.target).attr('style', '');
        //                 $(event.target).siblings('label').attr('style', '');
        //                 $('.appointment__form').bind('submit')
        //             }
        //             break;
        //         case 'paste':
        //             var pastedData = event.originalEvent.clipboardData.getData('Text');
        //             var numPattern = /^\+7\(\d{3}\)-\d{3}-\d{4}$/;
        //             // console.log(pastedData)
        //             // console.log((pastedData.search(/^\+7-\(\d{3}\)-\d{3}-\d{4}$/)) < 0)
        //             // if ((pastedData.search(/^\+7-\(\d{3}\)-\d{3}-\d{4}$/)) < 0) {
        //             //     appointmentPhoneInput.css({
        //             //         borderColor: '#E84E2C',
        //             //         color: '#E84E2C'
        //             //     });
        //             //     appointmentPhoneInput.siblings('label').css({
        //             //         color: '#E84E2C'
        //             //     });
        //             //     $('.appointment__form').unbind('submit');
        //             // } else {
        //             //     $(event.target).attr('style', '');
        //             //     $(event.target).siblings('label').attr('style', '');
        //             //     $('.appointment__form').bind('submit')
        //             // }
        //             break;
        //         default:
        //             break;
        //
        //     }
        //
        // });


        appointmentPhoneInput.on('keyup', function (event) {
            if (typeof (event.originalEvent) != 'undefined') {
                appointmentPhoneInput.each(function (index) {
                    if (index == appointmentPhoneInput.index(event.target)) {
                    } else {
                        $(this).val($(event.currentTarget).val());
                    }
                });
            }
        });

        appointmentNameInput.on('input', function (event) {
            $(appointmentNameInput).each(function () {
                $(this).val($(event.currentTarget).val().replace(/[^А-яA-z\s]/, ''));
            });
        });

        appointmentConfident.change(function (event) {
            $(appointmentConfident[0]).prop('checked', $(event.currentTarget).prop('checked'));
            $(appointmentConfident[1]).prop('checked', $(event.currentTarget).prop('checked'));
            $(event.currentTarget).prop('checked');
            if (!this.checked) {
                $(this).css({
                    borderColor: '#E84E2C',
                });
                $('.confident-label small').css({
                    color: '#E84E2C',
                });
                $('.confident-label small a').css({
                    color: '#E84E2C'
                })
            } else {
                $(this).attr('style', '');
                $('.confident-label small').attr('style', '');
                $('.confident-label small a').attr('style', '');
            }
        });

        appointmentPhoneInput.on('focus', function () {
                appointmentPhoneInput.attr('style', '');
                appointmentPhoneInput.siblings('label').attr('style', '');
                var that = $(this);
                if ($(this).val() == '') {
                    setTimeout(function () {
                        appointmentPhoneInput.inputmask({
                            "mask": "+7-(999)-999-9999",
                            // showMaskOnHover: false,
                            // showMaskOnFocus: true,
                            'onincomplete': function () {
                                if (that.val() == '') {
                                    appointmentPhoneInput.inputmask("remove")
                                }
                            },
                            // "oncomplete": function () {
                            //     appointmentPhoneInput.attr('style', '');
                            //     appointmentPhoneInput.siblings('label').attr('style', '');
                            // }
                        });
                    }, 300)
                }
            }
        );
    }
    if (isSet($('.staff'))) {
        const staffTabs = $('.staff__tabs_item');
        staffTabs.on('click', function (event) {
            const index = staffTabs.index(event.currentTarget);
            const staffContentTabs = $('.staff__content_tab');
            staffTabs.removeClass('staff__tabs_item_active');
            $(event.currentTarget).addClass('staff__tabs_item_active');
            staffContentTabs.removeClass('staff__content_tab_active');
            $(staffContentTabs[index]).addClass('staff__content_tab_active');
            $('title').html('ЛДЦ Светлана - ' + $('.staff__tabs_item_active').html());
            const staffTabIndex = $('.staff__tabs_item').index($('.staff__tabs_item_active'));
        });

        const staffFilters = $('.staff__filters_item');
        staffFilters.on('click', function (event) {
            if ($('.staff__filters_item').is(event.target)) {
                if (!$(event.target).hasClass('staff__filters_item_active')) {
                    $(event.target).addClass('staff__filters_item_active').append('<span class="staff__filters_item_cancel">&#10006;</span>');
                }
            } else if ($('.staff__filters_item_cancel').is(event.target)) {
                $(event.target).parent().removeClass('staff__filters_item_active');
                $(event.target).detach();
            }
        });

        const staffSearch = $('.staff__search-form-field');
        const staffDropdown = $('.staff__search-dropdown');
        const staffDropdownLink = $('.staff__search-dropdown_link');
        let i = 0;
        let currentIndex = 0;
        staffSearch.on('blur', function () {
            if ($(this).val() != '') {
                $(this).siblings('label').addClass('valid');
            } else {
                $(this).siblings('label').removeClass('valid');
            }
        });

        function dropdownNav(event) {
            if (staffDropdown.css('display') == 'block') {
                switch (event.which) {
                    case 40:
                        event.preventDefault();
                        i += 1;
                        currentIndex = i - 1;
                        if (i > $('.staff__search-dropdown_link').length - 1) {
                            i = 0;
                            currentIndex = $('.staff__search-dropdown_link').length - 1;
                        }
                        console.log('CI', currentIndex);
                        console.log('i', i);

                        $('.staff__search-dropdown_link').removeClass('selected');
                        $($('.staff__search-dropdown_link')[currentIndex]).addClass('selected');
                        staffSearch.val($('.staff__search-dropdown_link.selected').text());
                        break;
                    case 38:
                        event.preventDefault();
                        i -= 1;
                        currentIndex = i - 1;
                        if (i < 1) {
                            i = $('.staff__search-dropdown_link').length;
                            currentIndex = i - 1;
                        }

                        $('.staff__search-dropdown_link').removeClass('selected');
                        $($('.staff__search-dropdown_link')[currentIndex]).addClass('selected');
                        staffSearch.val($('.staff__search-dropdown_link.selected').text());
                        break;
                }
            }
        }

        staffDropdown.on('mouseenter', '.staff__search-dropdown_link', function () {
            currentIndex = $('.staff__search-dropdown_link').index($(this));
            i = currentIndex + 1;
            if (currentIndex == ($('.staff__search-dropdown_link').length - 1)) {
                i = 0;
            }
            $('.staff__search-dropdown_link.selected').removeClass('selected');
            $(this).addClass('selected');
            staffSearch.val($(this).text());

        });
        $(document).keydown(dropdownNav);

        staffSearch.on('input', function () {
            const pattern = /[^А-Яа-я\s]/;
            const labelOriginalText = 'Начните вводить фамилию или специализацию';
            if (staffSearch.val().search(pattern) != -1) {
                $('.staff__search-form').addClass('invalid');
                $('label[for="finder_doc_val"]').text('Разрешен ввод только русских букв');
                staffSearch.val(staffSearch.val().replace(/[^А-яA-z\s]/, ''));
            } else {
                $('.staff__search-form').removeClass('invalid');
                $('label[for="finder_doc_val"]').text(labelOriginalText);
            }

            if (staffSearch.val().length >= 3) {
                if (staffSearch.val() != '') {
                    staffDropdown.css({
                        display: 'block',
                        width: $('.staff__search-form-wrapper').width()
                    });
                    if ($('.staff__content-top').css('position') == 'fixed') {
                        staffDropdown.css({
                            left: $('.staff__content-top').css('padding-left')
                        });
                        if ($(window).width() < 961) {
                            staffDropdown.css({
                                top: '79px'
                            });
                        } else if ($(window).width() >= 961) {
                            staffDropdown.css({
                                top: '59px'
                            });
                        }

                    }
                }
            } else {
                staffDropdown.removeAttr('style');
            }

            if (staffSearch.val() == '' && staffDropdown.attr('style') != '') {
                staffDropdown.removeAttr('style');
            }
        });

        let sumbitFailTrigger = 0;
        staffSearch.on('keyup', function (e) {
            if (e.keyCode === 13 && staffSearch.val() == '') {
                sumbitFailTrigger = 1
            }
        });
        $('.staff__search-form-button').on('click', function () {
            if (staffSearch.val() == '') {
                sumbitFailTrigger = 1
            }
        });
        $('.staff__search-form').on('submit', function (event) {
            event.preventDefault();
            console.log(sumbitFailTrigger);
            if (sumbitFailTrigger != 1) {
                $('body, html').animate({scrollTop: 0}, 500);
                $('.staff__content_tab_active .staff__find .words').text(staffSearch.val());
                $('.staff__content_tab_active .staff__ordinary').fadeOut(400, function () {
                    $('.staff__content_tab_active .staff__find').fadeIn();
                });
            }
            sumbitFailTrigger = 0;
            staffSearch.val('');
            staffDropdown.removeAttr('style');

        });

        $(document).on('click', function (event) {
            if (!$('.staff__search-form').is(event.target) && $('.staff__search-form').has(event.target).length === 0 && !$('.staff__search-dropdown').is(event.target) && $('.staff__search-dropdown').has(event.target).length === 0) { // и не по его дочерним элементам
                staffDropdown.removeAttr('style');
            }
        });

        staffDropdown.on('click', '.staff__search-dropdown_link', function (event) {
            event.preventDefault();
            staffSearch.val($(this).text());
            $('.staff__search-form').trigger('submit');
        });

        // staffDropdown.on('mouseleave', '.staff__search-dropdown_link', function () {
        //     $(document).on('keydown', dropdownNav)
        // })

        $('.staff__find-head').on('click', '.back', function () {
            $('.staff__content_tab_active .staff__find').fadeOut(400, function () {
                $('.staff__content_tab_active .staff__ordinary').fadeIn();
            });
            staffSearch.val('').trigger('blur');
        })
    }


    //Вкладки на выпадающем меню хэдера
    $('.dropdown-menu__tabs_item').on('click', '.with-arrow', function (event) {
        const index = dropdownTabs.index($(event.target).parent());
        const prevLink = $('.dropdown-menu__tabs_item_active');
        prevLink.removeClass('dropdown-menu__tabs_item_active');
        $(dropdownTabs[index]).addClass('dropdown-menu__tabs_item_active');
        const dropdownContents = $('.dropdown-menu__item');
        $('.dropdown-menu__item_active').removeClass('dropdown-menu__item_active');
        $(dropdownContents[index]).addClass('dropdown-menu__item_active');
        $('.dropdown-menu__content').attr('style', '');
        $('.dropdown-menu__tabs').css({
            display: 'none'
        });
        $('.dropdown-menu').children('.title').html($('.dropdown-menu__tabs_item_active').children().html())
    });

    dropdownTabs.on('mouseenter', function (event) {
        if ($(window).width() < 960) {
        } else {
            event.preventDefault();
            const index = dropdownTabs.index(event.currentTarget);
            const prevLink = $('.dropdown-menu__tabs_item_active');
            prevLink.removeClass('dropdown-menu__tabs_item_active');
            $(dropdownTabs[index]).addClass('dropdown-menu__tabs_item_active');
            const dropdownContents = $('.dropdown-menu__item');
            $('.dropdown-menu__item_active').removeClass('dropdown-menu__item_active');
            $(dropdownContents[index]).addClass('dropdown-menu__item_active');
        }
    });

    //Блоки с отзывами


    if (isSet($('.feedback__slider')) || isSet($('.all-feedback'))) {

        window.maxHeight = 0;
        $('.feedback__item').each(function () {
            if (maxHeight < $(this).innerHeight()) {
                maxHeight = $(this).innerHeight();
                console.log(maxHeight);
            }
        });
        $('.feedback__item').css('height', maxHeight + 'px');

        const feedbackContent = $('.feedback__item-content');

        $(document).on('click', '.feedback__item-content', function (e) {
            const that = $(this);
            var div = $('.docs_wrapper');
            if (div.is(e.target) // если клик был не по нашему блоку
                || $(e.target).parents('.docs_wrapper').length !== 0) {
            } else {
                $('.feedback__item-content').each(function () {
                    if (!$(this).is(that)) {
                        if ($(this).hasClass('feedback__item-content_fill')) {
                            $(this).animate({
                                'max-height': '162px'
                            }, function () {
                                that.removeClass('feedback__item-content_unhide');
                                that.parents('.feedback__item').css('height', maxHeight + 'px');
                            });
                        } else {
                            $(this).animate({
                                'max-height': '90px'
                            }, function () {
                                $(this).removeClass('feedback__item-content_unhide');
                                $(this).parents('.feedback__item').css('height', maxHeight + 'px');
                            });
                        }
                    }
                })

                if (that.hasClass('feedback__item-content_unhide')) {
                    if (that.hasClass('feedback__item-content_fill')) {
                        that.animate({
                            'max-height': '162px'
                        }, function () {
                            that.removeClass('feedback__item-content_unhide');
                            that.parents('.feedback__item').css('height', maxHeight + 'px');
                        });
                    } else {
                        that.animate({
                            'max-height': '90px'
                        }, function () {
                            that.removeClass('feedback__item-content_unhide');
                            that.parents('.feedback__item').css('height', maxHeight + 'px');
                        });
                    }

                } else {
                    that.parents('.feedback__item').css('height', 'auto');
                    that.animate({
                        'max-height': '1000px'
                    }, function () {
                        that.addClass('feedback__item-content_unhide');
                        that.css({
                            'max-height': that.children('div.feedback__item-content-text').height()
                        })
                    });
                }
            }
        });
        $(document).on('blur', '.feedback__item-content', function (e) {
            var div = $('.docs_wrapper');
            console.log(e.target // если клик был не по нашему блоку
            );

            // if (div.is(e.target) // если клик был не по нашему блоку
            //     || $(e.target).parents('.docs_wrapper').length !== 0) {
            // } else {
            //
            //     if ($(this).hasClass('feedback__item-content_fill')) {
            //         $(this).animate({
            //             'max-height': '162px'
            //         }, function () {
            //             $(this).removeClass('feedback__item-content_unhide');
            //             $(this).parents('.feedback__item').css('height', maxHeight + 'px');
            //         });
            //     } else {
            //         $(this).animate({
            //             'max-height': '90px'
            //         }, function () {
            //             $(this).removeClass('feedback__item-content_unhide');
            //             $(this).parents('.feedback__item').css('height', maxHeight + 'px');
            //         });
            //     }
            //
            // }
        });

        //ОБРАБОТЧИК ОТКРЫТИЯ ДОКУМЕНТА ПРИ КЛИКЕ НА ИКОНКУ
        $('.feedback__item-head-doc').on('click', function (event) {
            $(this).parents('.feedback__item-content').trigger('focusin');
            event.preventDefault();


            if ($(this).attr('href').indexOf('.pdf') < 0) {
                $(this).magnificPopup({
                    type: 'image'
                    // (optionally) other options
                }).magnificPopup('open');
            } else {
                $(this).magnificPopup({
                    type: 'iframe'
                }).magnificPopup('open');
            }
        })

        //ОБРАБОТЧИК ОТКРЫТИЯ ДОКУМЕНТА ПРИ КЛИКЕ НА ИКОНКУ
    }
    //Кнопка для раскрытия меню в мобайле


    DropdownOpenButtonHandler();

    //Обработка кнопки услуги в нижнем меню
    $(serviceTapButton).on('click', function () {
        if (!dropdownMenuContainer.hasClass('dropdown-menu__container_active')) {
            posTop = $(window).scrollTop();
            window.scrollTo(0, 0);
            $(serviceTapButton).addClass('tap-menu__button_active');
            $('body').children().addClass('hide');
            $('.header').removeClass('hide');
            dropdownMenuContainer.removeClass('hide');
            $('.dropdown-menu__content').css({display: 'none'});
            dropdownMenuContainer.addClass('dropdown-menu__container_active');
            dropdownMenuContainer.css({
                display: 'block'
            });
            dropdownContentBlock.css({
                display: 'none'
            });


            if (prependFlag == 0) {
                $('.dropdown-menu').prepend('<h2 class="title">Услуги</h2>');
                $('.dropdown-menu').prepend('<img class="arrow-back" width="20px" height="15px" src="./assets/img/dropdown-menu/arrow-back.svg">');
                prependFlag = 1;
            }
        } else {
            closeServicesDropdownFromTapMenu();
        }

    });

    //Обработка кнопки записи в нижнем меню
    $(appointmentTapButton).on('click', function () {
        if (!popupIphone.hasClass('popup-iphone_active')) {
            $(appointmentTapButton).addClass('tap-menu__button_active');
            popupIphone.fadeIn(500).addClass('popup-iphone_active');
            popupIphoneFirstAction.html('Записаться');
            popupIphoneSecondAction.html('Вызов +7 (812) 627-02-03').parent('a').attr('href', 'tel:+78126270203');
            $('body').css({
                overflow: 'hidden'
            })
        }
    });

    $(mapTapButton).on('click', function () {
        if (!popupIphone.hasClass('popup-iphone_active')) {
            $(appointmentTapButton).addClass('tap-menu__button_active');
            popupIphone.fadeIn(500).addClass('popup-iphone_active');
            popupIphoneFirstAction.html('Контакты').parent('a').attr('href', 'contacts.php');
            popupIphoneSecondAction.html('Проложить маршрут').parent('a').attr('href', 'https://yandex.ru/maps/?rtext=~60.005215%2C30.327901');

            $('body').css({
                overflow: 'hidden'
            })
        }
    });

    popupIphoneFirstAction.on('click', function (event) {
        if ($(this).html() == 'Записаться') {
            event.preventDefault();
            $('.appointment_popup').addClass('appointment_popup_active');
            $('.popup-iphone__actions').fadeOut();
        }
    });

    popupIphone.on('click', '.popup-iphone__cancel', function () {
        if ($('.appointment_popup').hasClass('appointment_popup_active')) {
            $('.appointment_popup').removeClass('appointment_popup_active');
            $('.popup-iphone__actions').fadeIn();
        } else if (popupIphone.hasClass('popup-iphone_active')) {
            popupIphone.fadeOut(500, function () {
                popupIphone.removeClass('popup-iphone_active');
            });
            $(appointmentTapButton).removeClass('tap-menu__button_active');
            $('body').css({
                overflow: 'visible'
            })
        }
    });

    $('.appointment__close').on('click', function () {
        $('.appointment_popup').removeClass('appointment_popup_active');
        if ($('.popup-iphone__actions').attr('style') == 'display: none;') {
            $('.popup-iphone__actions').fadeIn();
        } else {
            $('.appointment_popup').removeClass('appointment_popup_active').attr('style', '');
            $('body').attr('style', '');
        }
        $('body').on('click');
    });

    //Обработка медиа запроса
    if (window.matchMedia('screen and (max-width: 960px)').matches) {
        onReadyMobileMediaChange();
        mobileDropdownOpenButtonHandler();
        appendFlag = 0;
    } else {
        selectButtons.appendTo('.about__slider');
        appendFlag = 1;
    }

    // if (isSet($('.price'))) {
    //     if ($(window).width() < 677) {
    //         sbPrice = new ScrollBooster({
    //             viewport: document.querySelector('.price__list'),
    //             content: document.querySelector('.price__list_wrapper'),
    //             scrollMode: "transform", // use CSS 'transform' property
    //             direction: "horizontal", // allow only horizontal scrollin
    //             pointerMode: 'all',
    //             pointerDownPreventDefault: false,
    //             onClick: (state, event) => {
    //                 if ($('.form-call-button').is(event.target)) {
    //                     popupFormHandler();
    //                 }
    //             }
    //         });
    //     }
    // }

    if (isSet($('.science-articles'))) {
        if ($('.science-articles__content_item').length > 2) {
            $('.science-articles__footer').show();
        } else {
            $('.science-articles__footer').hide();
        }
    }

    if (isSet($('.science-articles__content'))) {
        const scienceArticlesText = $('.science-articles__content_item_text');
        $(document).on('click', '.science-articles__content_item_text', function (event) {
            if ($(this).hasClass('science-articles__content_item_text_unhide')) {
                $(this).removeClass('science-articles__content_item_text_unhide');
            } else {
                $(this).addClass('science-articles__content_item_text_unhide');
            }
        });
        scienceArticlesText.on('blur', function () {
            const that = $(this);
            setTimeout(function () {
                that.removeClass('science-articles__content_item_text_unhide');
            }, 1000)
        });
    }

    if (isSet($('.nav-links'))) {

        if ($(window).width() < 961) {
            sbNavLinks = new ScrollBooster({
                viewport: document.querySelector('.nav-links__block'),
                content: document.querySelector('.nav-links__list'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
                pointerMode: 'all',
                pointerDownPreventDefault: false,
                onClick: (state, event) => {
                    $('.nav-links__link').removeClass('tab-link_red_active');
                    const index = $('.nav-links__link').index(event.target);
                    $($('.nav-links__link')[index]).addClass('tab-link_red_active');
                }
            });
            let blockWidth = 0;
            $('.nav-links__item').each(function () {
                blockWidth += $(this).width() + 20;
            });
            $('.nav-links__list').css({
                minWidth: blockWidth
            });
            $('.nav-links__link').off('click');
            $('.nav-links__link').on('click', function (event) {
                const elementClick = $(this).attr("href");
                const destination = $(elementClick).position().top;
                $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height())}, 500);
                return false;
            });
        } else {
            $('.nav-links__link').off('click');
            $('.nav-links__link').on('click', function (event) {
                const elementClick = $(this).attr("href");
                const destination = $(elementClick).position().top;
                if ($('.nav-links').attr('style') !== undefined) {
                    $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height())}, 500);
                } else {
                    $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height() * 2)}, 500);

                }
                $('.nav-links__link').removeClass('tab-link_red_active');
                const index = $('.nav-links__link').index(event.target);
                $($('.nav-links__link')[index]).addClass('tab-link_red_active');
                return false;
            });

        }

    }
    if (isSet($('.scroll-to'))) {
        $('.scroll-to').off('click');
        $('.scroll-to').on('click', function (event) {
            const elementClick = $(this).attr("href");
            const destination = $(elementClick).position().top;
            const navLinkHeight = isSet($('.nav-links')) ? $('.nav-links').height() : 0;
            $('html').animate({scrollTop: destination - ($('.header').height() + navLinkHeight)}, 500);
            return false;
        });
    }
    if (isSet($('.cost'))) {
        if (isSet($('ul.cost__list > li > ul > li > .cost__list_content'))) {
            $('ul.cost__list > li > ul > li > .cost__list_content').parent().css({
                border: 'none'
            })
        }
        // if ($(window).width() <= 768) {
        //     if ($('.cost').length == 1) {
        //         sbCost = new ScrollBooster({
        //             viewport: document.querySelector('.cost__wrapper'),
        //             content: document.querySelector('.cost__wrapper > ul.cost__list'),
        //             scrollMode: "transform", // use CSS 'transform' property
        //             direction: "horizontal", // allow only horizontal scrollin
        //             pointerMode: 'all',
        //             pointerDownPreventDefault: false
        //         });
        //     }
        //     if ($('.cost').length > 1) {
        //         sbCost = Array(sbCost);
        //         sbCost = [];
        //         $('.cost').each(function () {
        //             sbCost.push(new ScrollBooster({
        //                 viewport: $(this).find('.cost__wrapper')[0],
        //                 content: $(this).find('.cost__wrapper').children()[0],
        //                 scrollMode: "transform", // use CSS 'transform' property
        //                 direction: "horizontal", // allow only horizontal scrollin
        //                 pointerMode: 'all',
        //                 pointerDownPreventDefault: false
        //             }));
        //         });
        //     }
        // }
        const firstLevel = $($('.cost__wrapper')[0]).children('ul').children('li:first-child');
        const secondLevel = firstLevel.children('ul');
        $(secondLevel[0]).slideDown().siblings('span').addClass('active');
        $(secondLevel[0]).children('li:first-child').children('ul').slideDown().siblings('span').addClass('active');
        $('.cost__list_item').on('click', function (event) {
            $(this).siblings('.cost__list_item').children('ul').slideUp().siblings('span').removeClass('active');
            console.log($(this).offset().top);
            if ($('span').is(event.target)) {
                $(event.target).parent('li').children('ul').slideToggle(function () {
                    if ($(this).attr('style') == 'display: block;') {
                        if ($(window).width() >= 961) {
                            $('html').animate({scrollTop: $(this).offset().top - 129 * 2}, 500);
                        } else {
                            $('html').animate({scrollTop: $(this).offset().top - 54 * 2}, 500);
                        }
                    }
                });
                $(event.target).toggleClass('active');
                return false;
            }
        });
    }

    if (isSet($('.checkup'))) {
        $('.checkup__item').on('mouseenter', function () {
            const checkUpTitle = $(this).find('.checkup__item_title');
            if (checkUpTitle.attr('data-hover') !== undefined) {
                checkUpTitle.animate({
                    opacity: 0
                }, 250, function () {
                    const text = $(this).text();
                    $(this).css('font-weight', 'normal').text($(this).attr('data-hover'));
                    $(this).attr('data-hover', text);
                    $(this).animate({
                        opacity: 1
                    }, 250)
                })
            }

        });
        $('.checkup__item').on('mouseleave', function () {
            const checkUpTitle = $(this).find('.checkup__item_title');
            if (checkUpTitle.attr('data-hover') !== undefined) {
                checkUpTitle.animate({
                    opacity: 0
                }, 250, function () {
                    const text = $(this).text();
                    $(this).removeAttr('style').text($(this).attr('data-hover'));
                    $(this).attr('data-hover', text);
                    $(this).animate({
                        opacity: 1
                    }, 250);
                })
            }
        });
    }


    if (isSet($('.checkup-features'))) {
        checkupFeaturesSliderInit();
    }

    if (isSet($('.news'))) {
        if ($(window).width() <= 960) {
            sbNews = new ScrollBooster({
                viewport: document.querySelector('.news__content'),
                content: document.querySelector('.news__wrapper'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
                pointerMode: 'all',
                pointerDownPreventDefault: false
            });
        }
    }

    if (isSet($('.partners'))) {
        if ($(window).width() <= 960) {
            sbPartners = new ScrollBooster({
                viewport: document.querySelector('.partners__content'),
                content: document.querySelector('.partners__content > .content'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
                pointerMode: 'all',
                pointerDownPreventDefault: false
            });
        }
    }
    if (isSet($('.costs'))) {
        $('.costs-top__filters-item').on('click', function (event) {
            event.preventDefault();
            const elementClick = $(this).attr('href');
            const destination = $(elementClick).position().top;
            if ($(window).width() < 961) {
                $('html').animate({scrollTop: destination - $('.header__top').height()}, 500);
            } else {
                $('html').animate({scrollTop: destination - $('.header').height()}, 500);
            }
            return false;
        })
    }

    if (isSet($('.feedback-call-modal'))) {
        const modalFormContainer = $('.all-feedback-modal');
        const modalForm = $('.all-feedback-modal__content form');
        const modalFormFields = $('.all-feedback-modal__input-wrapper');
        const confident = $('.all-feedback-modal__confident');
        const submitButton = $('.all-feedback-modal__content form button');
        let labelText = '';
        $('#feedback-file').on('change', function () {
            $(this).siblings('span').text('Фото загружено')
        });
        $('.feedback-call-modal').on('click', function () {
            modalFormContainer.removeClass('all-feedback-modal_unactive').css('opacity', '0').animate({
                opacity: 1
            });
            $('body').css('overflow', 'hidden');
        });
        confident.on('change', function () {
            if ($(this).prop("checked")) {
                $(this).parent('label').removeClass('invalid').addClass('valid').find('input, small, a').removeAttr('style');

            } else {
                $(this).parent('label').removeClass('valid').addClass('invalid').find('input, small, a').css({
                    color: '#E84E2C',
                    borderColor: '#E84E2C'
                });
            }
        });
        modalFormFields.on('input', 'input, textarea', function () {
            if ($(this).is('textarea')) {
                if ($(this).val() !== '') {
                    $(this).siblings('label').removeClass('invalid').addClass('valid').removeAttr('style');
                    $(this).removeAttr('style');
                } else {
                    $(this).siblings('label').removeClass('valid').addClass('invalid').css({
                        color: '#E84E2C',
                        borderColor: '#E84E2C'
                    });
                    $(this).css({
                        color: '#E84E2C',
                        borderColor: '#E84E2C'
                    });
                }
            }
            if ($(this).is('input')) {
                if ($(this).val().length > 3) {
                    $(this).siblings('label').removeClass('invalid').addClass('valid').removeAttr('style');
                    $(this).removeAttr('style');
                } else {
                    $(this).siblings('label').removeClass('valid').addClass('invalid').css({
                        color: '#E84E2C',
                        borderColor: '#E84E2C'
                    });
                    $(this).css({
                        color: '#E84E2C',
                        borderColor: '#E84E2C'
                    });
                }
            }
        });
        modalFormFields.on('focus', 'textarea', function () {
            $(this).siblings('label').html('Текст отзыва');
        });
        modalFormFields.on('blur', 'textarea', function () {
            if ($(this).val() === '') {
                $(this).siblings('label').html('Текст отзыва (Вы можете написать в своем отзыве имя и фамилию врачей, которые помогли Вам, а также описать услугу)');
            }
        });
        modalForm.find('#customerName').on('input', function () {
            $(this).val($(this).val().replace(/[^А-яA-z\s]/, ''));
            // if ($(this).val().length > 3) {
            //     $(this).siblings('label').removeClass('invalid').addClass('valid').removeAttr('style');
            //     $(this).removeAttr('style');
            // }
            // else{
            //     $(this).siblings('label').removeClass('valid').addClass('invalid').css({
            //         color: '#E84E2C',
            //         borderColor: '#E84E2C'
            //     });
            //     $(this).css({
            //         color: '#E84E2C',
            //         borderColor: '#E84E2C'
            //     });
            // }
        });
        submitButton.on('click', function (event) {
            event.preventDefault();
            var failTrigger = 0;
            $('.all-feedback-modal__content form label').each(function () {
                if (!($(this).hasClass('valid')) || $(this).hasClass('invalid')) {
                    $(this).css({
                        color: '#E84E2C'
                    });
                    $(this).siblings('input, textarea').css({
                        color: '#E84E2C',
                        borderColor: '#E84E2C'
                    });
                    if ($(this).hasClass('confident-label')) {
                        $(this).find('input, small, a').css({
                            color: '#E84E2C',
                            borderColor: '#E84E2C'
                        })
                    }
                    failTrigger = 1;
                }
            })
            if (failTrigger == 0) {
                $('.all-feedback-modal__content form label').each(function () {
                    $(this).removeClass(['valid', 'invalid']).removeAttr('style');
                    $(this).siblings('input, textarea').removeAttr('style');
                    if ($(this).hasClass('confident-label')) {
                        $(this).find('input, small, a').removeAttr('style')
                    }
                });
                modalFormContainer.animate({opacity: 0}, function () {
                    $(this).addClass('all-feedback-modal_unactive').removeAttr('style');
                    $('.all-feedback-modal__content').find('input, textarea').val('').prop('checked', false);
                });
                $('.popup').css('display', 'flex');
                window.popupOriginalText = $('.popup__block .text').text();
                $('.popup__block .text').text('Спасибо за Ваш отзыв!')
                // $('body').removeAttr('style');
            } else {
                console.log('fail');
            }
        })
        $('.all-feedback-modal__close').on('click', function () {
            modalFormContainer.animate({opacity: 0}, function () {
                $(this).addClass('all-feedback-modal_unactive').removeAttr('style');
            });
            $('body').removeAttr('style');
        });

    }
    if (isSet('.infoblock__block')) {
        $('.infoblock__item_content img').each(function () {
            if ($(this).attr('height') !== undefined) {
                $(this).css({
                    height: $(this).attr('height'),
                    'object-fit': 'contain'
                });
            }
        })
    }
    // if (isSet($('.table__wrapper'))) {
    //     $('.table__wrapper').each(function () {
    //         if ($(this).width() < $(this).children().width()) {
    //             sbTable = Array(sbTable);
    //             sbTable = [];
    //             sbTable.push(new ScrollBooster({
    //                 viewport: $(this)[0],
    //                 content: $(this).children()[0],
    //                 scrollMode: "transform", // use CSS 'transform' property
    //                 direction: "horizontal", // allow only horizontal scrollin
    //                 pointerMode: 'all',
    //                 pointerDownPreventDefault: false
    //             }));
    //         }
    //     })
    // }
    // console.log(sbTable);
});


const hamburger = $('.hamburger');
hamburger.on("click", function () {
    if (!hamburger.hasClass('is-active')) {
        if ($(serviceTapButton).hasClass('tap-menu__button_active')) {
            const posTopDublicate = posTop;
            closeServicesDropdownFromTapMenu();
            posTop = posTopDublicate;
        } else {
            posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        }
        window.scrollTo(0, 0);
    }
    hamburger.toggleClass("is-active");
    $('.header__bottom').toggleClass('header__bottom_active');
    $('body').children().toggleClass('hide');
    $('.header').removeClass('hide');
    if (dropdownMenuContainer.attr('style') != 'display: none;') {
        dropdownMenuContainer.css({display: 'none'});
        dropdownContentBlock.attr('style', '');
        dropdownTabsBlock.attr('style', '');
        headerBottom.attr('style', '');
        $('.dropdown-menu').find('.title').detach();
        $('.dropdown-menu').find('.arrow-back').detach();
        prependFlag = 0;
    }
    if (!hamburger.hasClass('is-active')) {
        window.scrollTo(0, posTop);
    }
});


//Паралакс квадратиков
$(window).scroll(parallaxScrolling);

function parallaxScrolling() {
    var scrolled = $(window).scrollTop();
    $('.layer1').css('top', (0 - (scrolled * .9)) + 'px');
    $('.layer2').css('top', (0 - (scrolled * .7)) + 'px');
    $('.layer3').css('top', (0 - (scrolled * .5)) + 'px');
    $('.layer4').css('top', (0 - (scrolled * .9)) + 'px');

}

let navLinkTop = 0;
let staffSearchTop = 0;
$('.up-button').click(function () {
    $('body,html').animate({scrollTop: 0}, 700);
});
$(document).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
        $('.up-button').fadeIn();
    } else {
        $('.up-button').fadeOut();
    }

    if (isSet($('.nav-links'))) {
        if ($(window).width() > 960) {
            if ((($(this).scrollTop() + 129) >= $('.nav-links').position().top) && navLinkTop == 0) {
                navLinkTop = $('.nav-links').position().top;
                $('.nav-links').css({
                    position: 'fixed',
                    top: '129px',
                    left: 0,
                    zIndex: 10000,
                    width: '100%',
                    background: 'white',
                    boxShadow: '0 5px 60px rgba(10, 24, 49, 0.3)'
                })
            } else if (($(this).scrollTop() + 129) < navLinkTop) {
                $('.nav-links').removeAttr('style');
                navLinkTop = 0;
            }
        }
    }
    if (isSet($('.staff'))) {
        const staffSearchPanel = $('.staff__search-form-wrapper').parent();
        const staffDropdown = $('.staff__search-dropdown');
        if ($(window).width() > 960 && staffSearchPanel.parents('.staff__content_tab').hasClass('staff__content_tab_active')) {
            if ((($(this).scrollTop()) >= staffSearchPanel.position().top) && staffSearchTop == 0) {
                staffSearchTop = staffSearchPanel.position().top;
                staffSearchPanel.css({
                    position: 'fixed',
                    top: '129px',
                    left: 0,
                    zIndex: 99,
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box',
                    margin: '0',
                    boxShadow: '0 5px 60px rgba(10, 24, 49, 0.3)'
                });
                if ($(window).width() >= 1380) {
                    staffSearchPanel.css({padding: '5px ' + (Math.abs($(window).width() - 1350) / 2) + 'px'});
                } else {
                    staffSearchPanel.css({padding: '5px 15px'});
                }
                if (staffDropdown.css('display') == 'block') {
                    staffDropdown.css({
                        left: $('.staff__content-top').css('padding-left'),
                        top: '59px'
                    });
                }
            } else if (($(this).scrollTop() + 129) < staffSearchTop + 70) {
                staffSearchPanel.removeAttr('style');
                staffSearchTop = 0;
                staffDropdown.css({
                    left: '',
                    top: ''
                });
            }
        }
        if ($(window).width() <= 960 && staffSearchPanel.parents('.staff__content_tab').hasClass('staff__content_tab_active')) {
            if ((($(this).scrollTop()) >= staffSearchPanel.position().top - 20) && staffSearchTop == 0) {
                staffSearchTop = staffSearchPanel.position().top - 20;
                staffSearchPanel.css({
                    position: 'fixed',
                    top: '54px',
                    left: 0,
                    zIndex: 99,
                    width: '100%',
                    background: 'white',
                    margin: '0',
                    padding: '15px 15px 15px 15px',
                    boxSizing: 'border-box',
                    boxShadow: '0 5px 60px rgba(10, 24, 49, 0.3)'
                });
                $('.staff__filters').addClass('staff__filters_onscroll');
                if (staffDropdown.css('display') == 'block') {
                    staffDropdown.css({
                        left: $('.staff__content-top').css('padding-left'),
                        top: '79px'
                    });
                }
            } else if (($(this).scrollTop() + 54) < staffSearchTop) {
                staffSearchPanel.removeAttr('style');
                staffSearchTop = 0;
                staffDropdown.css({
                    left: '',
                    top: ''
                });
                $('.staff__filters').removeClass('staff__filters_onscroll');
            }
        }
    }

});

if (isSet($('#map'))) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [60.005324, 30.328022],
            zoom: 17,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.container.fitToViewport();
        var secondButton = new ymaps.control.Button({
            data: {
                // Зададим текст и иконку для кнопки.
                // content: 'Button Text',
                // Иконка имеет размер 16х16 пикселей.
                image: 'assets/img/about-emergency-room/route-icon.svg'
            },
            options: {
                // Поскольку кнопка будет менять вид в зависимости от размера карты,
                // зададим ей три разных значения maxWidth в массиве.
                layout: 'round#buttonLayout',
                maxWidth: 42
            }
        });
        secondButton.events.add('click', function (event) {
            if (myMap.controls.indexOf('routePanelControl') <= 0) {
                myMap.controls.add('routePanelControl');
                var control = myMap.controls.get('routePanelControl');

                // Зададим состояние панели для построения машрутов.
                control.routePanel.state.set({
                    // Тип маршрутизации.
                    type: 'masstransit',
                    // Выключим возможность задавать пункт отправления в поле ввода.
                    fromEnabled: true,
                    // Адрес или координаты пункта отправления.
                    // from: 'Москва, Льва Толстого 16',
                    // Включим возможность задавать пункт назначения в поле ввода.
                    toEnabled: false,
                    // Адрес или координаты пункта назначения.
                    to: 'Россия, Санкт-Петербург, проспект Энгельса, 27Т'
                });

                // Зададим опции панели для построения машрутов.
                control.routePanel.options.set({
                    // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
                    allowSwitch: false,
                    // Включим определение адреса по координатам клика.
                    // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
                    reverseGeocoding: true,
                    // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
                    types: {masstransit: true, pedestrian: true, taxi: true}
                });
            } else {
                myMap.controls.remove('routePanelControl')
            }
        });
        myMap.controls.add(secondButton, {position: {bottom: '26px', right: '15px'}});
        myMap.behaviors.disable('scrollZoom');
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ЛДЦ Завода "Светлана"',
                balloonContent: 'ЛДЦ Завода "Светлана"</br>Россия, Санкт-Петербург, проспект Энгельса, 27Т</br><a class="link" href="tel:+78126270203">+7 (812) 627-02-03</a>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'favicon/android-chrome-192x192.png',
                // Размеры метки.
                iconImageSize: [64, 64],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-30, -10]
            });
        myMap.geoObjects
            .add(myPlacemark);

    });
}




