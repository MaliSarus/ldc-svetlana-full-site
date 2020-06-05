<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Цены</title>
<link rel="stylesheet" href="./assets/css/slick.css"/>
<link rel="stylesheet" href="./assets/css/slick-theme.css"/>
<link rel="stylesheet" href="./assets/css/magnific-popup.css">
<script src="./assets/js/jquery-3.4.1.min.js"></script>
<style>
    body > *{
        visibility: hidden;
    }
    body > *.visible{
        visibility: visible;
    }

    .preloader {
        visibility: visible !important;
        width: 100%;
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        background-color: white;
        z-index: 10003;
    }

    .preloader::before {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        content: '';
        background: rgba(42, 68, 114, 0.6);
    }

    .preloader-image {
        max-width: 100px;
        max-height: 100px;
        position: relative;
    }

    .preloader-image img {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 10004;
    }

    .preloader-image::before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.32);
        border-radius: 50%;
        -webkit-animation-name: load;
        animation-name: load;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-duration: 1000ms;
        animation-duration: 1000ms;
    }

    @-webkit-keyframes load {
        from {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        to {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            opacity: 0;
        }
    }

    @keyframes load {
        from {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        to {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            opacity: 0;
        }
    }

</style>
</head>
<body>

<div class="layer1">
    <div class="fig" id="fig11"></div>
    <div class="fig" id="fig12"></div>
    <div class="fig" id="fig13"></div>
    <div class="fig" id="fig14"></div>
</div>

<div class="layer2">
    <div class="fig" id="fig23"></div>
    <div class="fig" id="fig24"></div>
</div>

<div class="layer3">
    <div class="fig" id="fig31"></div>
    <div class="fig" id="fig32"></div>
    <div class="fig" id="fig33"></div>
</div>

<div class="layer4">
    <div class="fig" id="fig21"></div>
    <div class="fig" id="fig22"></div>
</div>

<?php
require "./modules/popups.php";
require "./modules/header.php";

require "./modules/dropdown-menu.php";
?>
<main>
<!-------------------------------------------------------------------------------------------------------------------->
<link rel="stylesheet"
      href="./assets/css/<?php echo basename(__FILE__, '.php'); ?>/style.css?ver=<?php echo date("His") ?>">

<div class="costs">
    <section class="costs-top">
        <div class="container">
            <div class="row">
                <div class="costs-top__block">
                    <h1 class="title">Цены на услуги ЛДЦ завода “Светлана”</h1>
                    <div class="costs-top__filters">
                        <a href="#reab-unit" class="costs-top__filters-item btn btn_white" >Реабилитационное отделение</a>
                        <a href="#tv-med" class="costs-top__filters-item btn btn_white" >Телемедицина</a>
                        <a href="#emer-unit" class="costs-top__filters-item btn btn_white" >Травмпункт</a>
                        <a href="#oper-unit" class="costs-top__filters-item btn btn_white" >Операционный блок</a>
                        <a href="#med-unit" class="costs-top__filters-item btn btn_white" >Лечебное отделение</a>
                        <a href="#diag-unit" class="costs-top__filters-item btn btn_white" >Диагностическое отделение</a>
                        <a href="#check-up" class="costs-top__filters-item btn btn_white" >Чек-ап программы</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="med-unit">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Лечебное отделение
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                                class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                                class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                        class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                                class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                                class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                        class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                                class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                                class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                        class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                                class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                                class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                                class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                        class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                        class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                        class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="diag-unit">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Диагностическое отделение
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="emer-unit">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Травмпункт
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="oper-unit">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Операционный блок
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="reab-unit">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Реабилитационное отделение
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="tv-med">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Телемедицина
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cost" id="check-up">
        <div class="container">
            <div class="row">
                <div class="cost__block">
                    <h2 class="title">
                        Чек-ап программы
                    </h2>
                    <div class="cost__wrapper">
                        <ul class="cost__list">
                            <li class="cost__list_item"><span>Оториноларингология</span>
                                <ul class="cost__list">
                                    <li class="cost__list_item"><span>Консультация врача – оториноларинголога</span>
                                        <ul class="cost__list">
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price text_price"><span
                                                            class="cost__list_content_del text_price_del">12 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                            <li class="cost__list_item">
                                                <div class="cost__list_content">
                                                    <div class="cost__list_content_title">
                                                        Холтеровское мониторирование артериального
                                                        давления (ЭКГ)
                                                    </div>
                                                    <div class="cost__list_content_price"><span
                                                            class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                                    </div>
                                                    <button class="btn btn_red_fill_skew form-call-button"><div
                                                            class="text">Записаться</div></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="194"><div
                                                    class="text">Записаться</div></button>
                                        </div>
                                    </li>
                                    <li class="cost__list_item">
                                        <div class="cost__list_content">
                                            <div class="cost__list_content_title">
                                                Холтеровское мониторирование артериального
                                                давления (ЭКГ)
                                            </div>
                                            <div class="cost__list_content_price"><span
                                                    class="cost__list_content_del">13 000 ₽</span>8 000 ₽
                                            </div>
                                            <button class="btn btn_red_fill_skew form-call-button" data-id="193"><div
                                                    class="text" >Записаться</div></button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="cost__list_item"><span>Кардиология</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->



