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
let sbPrice;
let sbNavLinks;
let sbCost;
let posTop = 0;

const isSlickLoaded = (typeof $.fn.slick !== 'undefined');

function isSet(element) {
    return element.length !== 0;
}


const aboutSliderInit = () => {
    if (isSet($('.about__slider'))) {
        $('.about__slider').slick({
            slidesToShow: 1,
            dots: false,
            arrows: false,
            infinite: false,
        })
    }
};
const specSliderInit = () => {
    const specSlick = $('.specialists__slider');
    specSlick.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
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
            }
        ]
    });
    $('.specialists__control-panel .arrows .arrows__arrow-left').on('click', function () {
        specSlick.slick('slickPrev');
    });
    $('.specialists__control-panel .arrows .arrows__arrow-right').on('click', function () {
        specSlick.slick('slickNext');
    });
};
const featuresSliderInit = () => {
    if (isSet($('.features__slider'))) {
        $('.features__slider').slick({
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ]
        });
    }
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
    if (isSet($('.diplomas__slider'))) {
        $('.diplomas__slider').slick({
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
        })
    }
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
    $('.tools__slider').slick({
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
    })
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
    const specDetailsSlick = $('.specialists-details__slider');
    specDetailsSlick.slick({
        slidesToShow: 2,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
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
const unitsMenuSliderChangeTab = () => {
    $('.units__menu > ul').on('afterChange', function (event, slick, currentSlide) {
        const index = $('.units__menu > ul').slick('slickCurrentSlide');
        const prevLink = $('.units__menu-link.tab-link_red_active');
        prevLink.removeClass('tab-link_red_active');
        $('.units__menu li')[index].children[0].classList.add('tab-link_red_active');
        $('.units__content-services_active').removeClass('units__content-services_active');
        $('.units__content-services')[index].classList.add('units__content-services_active');
    });
};


const windowDesktopSizeChange = () => {
    $('.units__head .title').html('Отделения &lt;лечебно – диагностического центра&gt;');
    $('.units__emergency-room .title').html(' Взрослый и детский травмпункт &lt;ЛДЦ Завода “Светлана”&gt;');
    $('.appointment__block > .content').addClass(['content_flex', 'content_between']);
    $('.specialists__head .title').html('Специалисты &lt;лечебно – диагностического центра&gt;');
    $('.feedback__head > .title').html('Отзывы &lt;наших клиентов&gt;');
    $('.feedback__position').html('<span class="feedback__position_current">1</span>/' + $('.feedback__item').length);
    $('.science-articles__head .title').html('Научные статьи &lt;и публикации&gt;');
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
    $('.price__pricing').each(function () {
        $(this).children().prependTo($(this));
    });
    $('.specialists-details__head .title').html('Специалисты &lt;неврологи&gt;');
};
const windowMobileSizeChange = () => {
    $('.units__head .title').html('Отделения ЛДЦ');
    $('.units__emergency-room .title').html('Взрослый и детский травмпункт');
    $('.appointment__block > .content').removeClass(['content_flex', 'content_between']);
    $('.specialists__head .title').html('Специалисты ЛДЦ');
    $('.feedback__head > .title').html('Отзывы');
    $('.science-articles__head .title').html('Научные статьи');
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

    $('.price__pricing').each(function () {
        $(this).children().appendTo($(this));
    });
    $('.specialists-details__head .title').html('Специалисты');
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
    $('.appointment__block > .content').removeClass(['content_flex', 'content_between']);
    $('.units__head .title').html('Отделения ЛДЦ');
    $('.units__emergency-room .title').html('Взрослый и детский травмпункт');
    $('.specialists__head .title').html('Специалисты ЛДЦ');
    $('.feedback__head > .title').html('Отзывы');
    $('.dropdown-menu__open-button').append('<div class="with-arrow"></div>');
    dropdownTabs.append('<div class="with-arrow"></div>');
    $('.dropdown-menu__open-button').off('click');
    $('.science-articles__head .title').html('Научные статьи');
    $($('.staff__tabs_item')[0]).html('Врачи');
    $('.staff__head .title').html('Врачи ЛДЦ');
    $('.specialists-details__head .title').html('Специалисты');
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

const popupFormHandler = () => {
    $('.appointment_popup').addClass('appointment_popup_active').css({
        position: 'fixed',
        height: '100vh',
        background: 'rgba(63,90,138,0.4)',
        top: 0,
        left: 0,
        transform: 'none'
    });
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
    if ($(window).width() > 960) {
        if (resizeFlag == 0) {
            windowDesktopSizeChange();
            //ВЫПАДАЮЩЕЕ МЕНЮ В ХЭДЕРЕ
            resizeFlag = 1;
        }
    } else {
        // const specSliderWidth = $('.specialists__slider > .slick-list').width();
        // if (specSliderWidth < 325) {
        //     $('.specialists__doctor').css({
        //         width: specSliderWidth + 'px'
        //     });
        // }
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
    } else if (!$('.features__slider').hasClass('slick-initialized')) {
        if (isSet($('.features__slider'))) {
            featuresSliderInit();
            $('.features__slider').slick('setPosition');
        }
    }

    if ($(window).width() > 1399) {
        if (isSet($('.about__slider'))) {
            $('.about__slider').filter('.slick-initialized').slick("unslick");
            $('.about__slider').children().removeAttr('tabindex');
        }
    } else if (!$('.about__slider').hasClass('slick-initialized')) {
        if (isSet($('.about__slider'))) {
            selectButtons.detach();
            aboutSliderInit();
            $('.about__slider').slick('setPosition');
            selectButtons.appendTo('.about__slider');
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

    if (isSet($('.price'))) {
        if ($(window).width() > 677 && typeof (sbPrice) != 'undefined') {
            if (isSet($('.price__list'))) {
                sbPrice.destroy();
                sbPrice = undefined;
            }
        } else if ($(window).width() <= 677 && typeof (sbPrice) === 'undefined') {
            sbPrice = new ScrollBooster({
                viewport: document.querySelector('.price__list'),
                content: document.querySelector('.price__list_wrapper'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrolling
                pointerMode: 'all',
                pointerDownPreventDefault: false,
                onClick: (state, event) => {
                    if ($('.form-call-button').is(event.target)) {
                        popupFormHandler();
                    }
                }
                // emulateScroll: true, // scroll on wheel events
            });
        }
    }
    if (isSet($('.nav-links'))) {
        if ($(window).width() > 960 && typeof (sbNavLinks) != 'undefined') {
            sbNavLinks.destroy();
            sbNavLinks = undefined;
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

    if (isSet($('.cost'))) {
        if ($(window).width() > 768 && typeof (sbCost) != 'undefined') {
            if (isSet($('.cost'))) {
                sbCost.destroy();
                sbCost = undefined;
            }
        } else if ($(window).width() <= 768 && typeof (sbCost) === 'undefined') {
            sbCost = new ScrollBooster({
                viewport: document.querySelector('.cost__block'),
                content: document.querySelector('.cost__wrapper'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
            });
        }
    }

});


// Обработка событий при полной загрузки страницы
window.onload = function () {
    $('.form-call-button').on('click', popupFormHandler);


    //Слайдер специалистов и кнопки слайдера специалистов
    if (isSet($('.specialists__slider'))) {
        specSliderInit();
    }

    //Сладер отзывов и кнопки сладера отзывов
    if (isSet($('.feedback__slider'))) {
        const feedSlick = $('.feedback__slider');
        feedSlick.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false
                    },
                },
                {
                    breakpoint: 961,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false
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
    }

    //Основной слайдер (анимации и тд)
    if (isSet($('.about__slider'))) {
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

    //Изменение поля поиска
    const headerSearchField = $('.header__search-form-field');
    headerSearchField.on('focus', function () {
        $('.header__search-form').addClass('header__search-form_focus');
    });
    headerSearchField.on('blur', function () {
        $('.header__search-form').removeClass('header__search-form_focus');
    });

    //Изменения табов в блоках отделений
    $('.units__menu li').on('click', function (event) {
        event.preventDefault();
        const index = $('.units__menu li').index(event.currentTarget);
        const prevLink = $('.units__menu-link.tab-link_red_active');
        prevLink.removeClass('tab-link_red_active');
        $('.units__menu li')[index].children[0].classList.add('tab-link_red_active');
        $('.units__content-services_active').removeClass('units__content-services_active');
        $('.units__content-services')[index].classList.add('units__content-services_active');
    });


    //Действия со слайдерами в момент загрузки экрана маленького размера или большого размера

    if (isSlickLoaded) {
        if (window.matchMedia('screen and (max-width: 1400px)').matches) {
            selectButtons.detach();
            aboutSliderInit();
            featuresSliderInit();
            unitsMenuSliderInit();
            const specSliderWidth = $('.specialists__slider > .slick-list').width();
            if (specSliderWidth < 325) {
                $('.specialists__doctor').css({
                    maxWidth: specSliderWidth + 'px'
                });
            }
            $('.feedback__position').html('<span class="feedback__position_current">1</span>/' + $('.feedback__item').length);
        } else {
            $('.about__slider').filter('.slick-initialized').slick("unslick");
            $('.units__menu > ul').filter('.slick-initialized').slick("unslick");
        }

        if (window.matchMedia('screen and (min-width: 577px)').matches) {
            $('.features__slider').filter('.slick-initialized').slick("unslick");
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
        diplomasSlick.magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        diplomasSliderInit();

        $('.diplomas__head .arrows .arrows__arrow-left').on('click', function () {
            diplomasSlick.slick('slickPrev');
        });
        $('.diplomas__head .arrows .arrows__arrow-right').on('click', function () {
            diplomasSlick.slick('slickNext');
        });

        $('.diplomas__slider_item img').each(function () {
            // удаляем атрибуты width и height
            $(this).removeAttr("width")
                .removeAttr("height")
                .css({width: "auto", height: "auto"});

            // получаем заветные цифры
            const width = $(this).width();
            const height = $(this).height();
            if (width > height) {
                $(this).css({
                    width: '100%',
                    height: 'auto'
                });
                $(this).parent().css({
                    width: '100%',
                    height: $(this).height()
                });
            } else {
                $(this).css({
                    width: '100%',
                    height: '100%'
                })
            }
        });

        $('.diplomas__position').html('<span class="diplomas__position_current">' + diplomasSlick.slick('slickGetOption', 'slidesToShow') + '</span>/' + $('.diplomas__slider_item').length);

        if ($('.diplomas__slider.slick-initialized')) {
            diplomasSlick.on('afterChange', function (event, slick, currentSlide) {
                $('.diplomas__position_current').html(diplomasSlick.slick('slickCurrentSlide') + diplomasSlick.slick('slickGetOption', 'slidesToShow'));
            });

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
        const toolsSlick = $('.tools__slider');
        toolsSliderInit();

        $('.tools__head .arrows .arrows__arrow-left').on('click', function () {
            toolsSlick.slick('slickPrev');
        });
        $('.tools__head .arrows .arrows__arrow-right').on('click', function () {
            toolsSlick.slick('slickNext');
        });

        $('.tools__position').html('<span class="tools__position_current">' + toolsSlick.slick('slickGetOption', 'slidesToShow') + '</span>/' + $('.tools__slider_item').length);

        if ($('.tools__slider.slick-initialized')) {
            toolsSlick.on('afterChange', function (event, slick, currentSlide) {
                $('.tools__position_current').html(toolsSlick.slick('slickCurrentSlide') + toolsSlick.slick('slickGetOption', 'slidesToShow'));
            });

        }

        $('.tools__slider_item').each(function () {
            const imageSrc = $(this).children('img').attr('src');
            $(this).css({
                background: 'url("' + imageSrc + '") center no-repeat',
                backgroundSize: 'cover'
            })
        });
        toolsSlick.on('breakpoint', function () {
            $('.tools__slider_item').each(function () {
                const imageSrc = $(this).children('img').attr('src');
                $(this).css({
                    background: 'url("' + imageSrc + '") center no-repeat',
                    backgroundSize: 'cover'
                })
            });
        })
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
        specDetailsSliderInit();
    }
};


//Обработка событий после загрузки страницы
$(document).ready(function () {

    $('.tap-menu__button').on('click', function (event) {
        if ($('.tap-menu__button').index($(this)) != 1) {
            event.preventDefault();
        }
    });

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
    if (isSet($('.appointment'))) {

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
            $('body').css({
                overflow: 'visible'
            });
            $('.appointment__form').unbind('submit').submit();
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
            if (!Inputmask.isValid(appointmentPhoneInput.val(), "+7-(999)-999-9999")) {
                appointmentPhoneInput.css({
                    borderColor: '#E84E2C',
                    color: '#E84E2C'
                });
                appointmentPhoneInput.siblings('label').css({
                    color: '#E84E2C'
                });
                $('.appointment__form').unbind('submit');
            } else {
            }
        });

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
                $(this).val($(event.currentTarget).val().replace(/[^А-Яа-я]/, ''));
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
                })
            } else {
                $(this).attr('style', '');
                $('.confident-label small').attr('style', '');
            }
        });

        appointmentPhoneInput.on('focus', function () {
            setTimeout(function () {
                appointmentPhoneInput.inputmask({
                    "mask": "+7-(999)-999-9999",
                    showMaskOnHover: false,
                    showMaskOnFocus: true,
                    'onincomplete': function () {
                        appointmentPhoneInput.inputmask("remove")
                    },
                    "oncomplete": function () {
                        appointmentPhoneInput.attr('style', '');
                        appointmentPhoneInput.siblings('label').attr('style', '');
                    }
                });
            }, 300)
        });
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
            const staffTabIndex = $('.staff__tabs_item').index($('.staff__tabs_item_active'))
            if ($(window).width() < 961) {
                switch (staffTabIndex) {
                    case 0:
                        $('.staff__head .title').html('Врачи ЛДЦ');
                        break;
                    case 1:
                        $('.staff__head .title').html('Кураторы направлений ЛДЦ');
                        break;
                }
            } else {
                switch (staffTabIndex) {
                    case 0:
                        $('.staff__head .title').html('Врачи &lt;лечебно – диагностического центра&gt;');
                        break;
                    case 1:
                        $('.staff__head .title').html('Кураторы направлений &lt;лечебно – диагностического центра&gt;');
                        break;
                }
            }

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
        staffSearch.on('input', function () {
            staffDropdown.css({
                display: 'block',
                width: $('.staff__search-form-wrapper').width()
            });
            staffSearch.val(staffSearch.val().replace(/[^А-Яа-я]/, ''));
        });
        staffSearch.on('blur', function () {
            staffDropdown.attr('style', '');
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
    if (isSet($('.feedback__slider'))) {

        const feedbackContent = $('.feedback__item-content');
        $(document).on('click', '.feedback__item-content', function (event) {
            if ($(this).hasClass('feedback__item-content_unhide')) {
                $(this).removeClass('feedback__item-content_unhide');
            } else {
                $(this).addClass('feedback__item-content_unhide');
            }
        });
        feedbackContent.on('blur', function () {
            $(this).removeClass('feedback__item-content_unhide');
        });
    }
    //Кнопка для раскрытия меню в мобайле


    DropdownOpenButtonHandler();

    //Обработка кнопки услуги в нижнем меню
    $(serviceTapButton).on('click', function () {
        if (!dropdownMenuContainer.hasClass('dropdown-menu__container_active')) {
            posTop = $(window).scrollTop();
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
            popupIphoneSecondAction.html('Вызов +7 (812) 627-02-03');
            $('body').css({
                overflow: 'hidden'
            })
        }
    });

    $(mapTapButton).on('click', function () {
        if (!popupIphone.hasClass('popup-iphone_active')) {
            $(appointmentTapButton).addClass('tap-menu__button_active');
            popupIphone.fadeIn(500).addClass('popup-iphone_active');
            popupIphoneFirstAction.html('Контакты');
            popupIphoneSecondAction.html('Проложить маршрут');

            $('body').css({
                overflow: 'hidden'
            })
        }
    });

    popupIphoneFirstAction.on('click', function () {
        if ($(this).html() == 'Записаться') {
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
        // $('body').off('click');
        $('.price__pricing').each(function () {
            // $(this).children().prependTo($(this));
        });
        appendFlag = 1;
    }

    $(".btn_red_fill").click(function () {
        $('body, html').animate({
            scrollTop: $(".appointment__block").offset().top - 54
        }, 1);
    });

    if (isSet($('.price'))) {
        if ($(window).width() < 677) {
            sbPrice = new ScrollBooster({
                viewport: document.querySelector('.price__list'),
                content: document.querySelector('.price__list_wrapper'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
                pointerMode: 'all',
                pointerDownPreventDefault: false,
                onClick: (state, event) => {
                    if ($('.form-call-button').is(event.target)) {
                        popupFormHandler();
                    }
                }
            });
        }
    }

    if (isSet($('.science-articles'))) {
        const scienceArticlesText = $('.science-articles__content_item_text');
        $(document).on('click', '.science-articles__content_item_text', function (event) {
            if ($(this).hasClass('science-articles__content_item_text_unhide')) {
                $(this).removeClass('science-articles__content_item_text_unhide');
            } else {
                $(this).addClass('science-articles__content_item_text_unhide');
            }
        });
        scienceArticlesText.on('blur', function () {
            $(this).removeClass('science-articles__content_item_text_unhide');
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
                $('html').animate({scrollTop: destination - $('.header').height()}, 500);
                return false;
            });
        } else {
            $('.nav-links__link').off('click');
            $('.nav-links__link').on('click', function (event) {
                const elementClick = $(this).attr("href");
                const destination = $(elementClick).position().top;
                $('html').animate({scrollTop: destination - ($('.header').height() + $('.nav-links').height())}, 500);
                $('.nav-links__link').removeClass('tab-link_red_active');
                const index = $('.nav-links__link').index(event.target);
                $($('.nav-links__link')[index]).addClass('tab-link_red_active');
                return false;
            });
        }

    }
    if (isSet($('.cost'))) {
        if ($(window).width() <= 768) {
            sbCost = new ScrollBooster({
                viewport: document.querySelector('.cost__block'),
                content: document.querySelector('.cost__wrapper'),
                scrollMode: "transform", // use CSS 'transform' property
                direction: "horizontal", // allow only horizontal scrollin
                pointerMode: 'all',
                pointerDownPreventDefault: false,
                onClick: (state, event) => {
                    if ($('.form-call-button').is(event.target)) {

                    }

                }
            });
        }
        $('.cost__list_item').on('click', function (event) {

            if ($('span').is(event.target)) {
                $(event.target).parent('li').children('ul').slideToggle();
                $(event.target).toggleClass('active');
                return false;
            }
        });
    }

});


const hamburger = $('.hamburger');
hamburger.on("click", function () {
    console.log(window.pageYOffset !== undefined);
    if (!hamburger.hasClass('is-active')) {
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(posTop);
        window.scrollTo(0,0);
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
    if (!hamburger.hasClass('is-active')){
        window.scrollTo(0,posTop);
        console.log('to ', posTop );
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
$(document).scroll(function () {
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
                    background: '#F1F1F1'
                })
            } else if (($(this).scrollTop() + 129) < navLinkTop) {
                $('.nav-links').attr('style', '');
                navLinkTop = 0;
            }
        }
    }
});




