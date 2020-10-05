<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Отзывы</title>
<link rel="stylesheet" href="./assets/css/slick.css"/>
<link rel="stylesheet" href="./assets/css/slick-theme.css"/>
<link rel="stylesheet" href="./assets/css/magnific-popup.css">
<script src="./assets/js/jquery-3.4.1.min.js"></script>
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

<!-------------------------------------------------------------------------------------------------------------------->
<link rel="stylesheet"
      href="./assets/css/<?php echo basename(__FILE__, '.php'); ?>/style.css?ver=<?php echo date("His") ?>">
<section class="test">
    <div class="container">
        <div class="row">
            <div class="test__block">
                <div class="infoblock__item">
                    <div class="infoblock__row">
                        <div class="infoblock__item_content">
                            <div class="button-links">
                                <ul>
                                    <li><a href="#">Текст</a></li>
                                    <li><a href="#">Текст</a></li>
                                    <li><a href="#">Текст</a></li>
                                </ul>
                            </div>
                            <div class="accordeon-list">
                                <ul>
                                    <li >
                                        <div class="accordeon-list__title">Заголовок</div>
                                        <div class="accordeon-list__text">
                                            <p>Текст</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="accordeon-list__title">Заголовок</div>
                                        <div class="accordeon-list__text">
                                            <p>Текст</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-and-link">
                                <div class="container">
                                    <div class="row">
                                        <div class="text-and-link__block">
                                            <div class="text-and-link__text">
                                                <p>Текст с информацией</p>
                                            </div>
                                            <div class="text-and-link__link">
                                                <a href="#" class="">Текст ссылки</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->
