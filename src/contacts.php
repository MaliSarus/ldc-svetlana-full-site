<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Направление</title>
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

<section class="about-emergency-room">
    <div class="container">
        <div class="row">
            <div class="about-emergency-room__block">
                <h1 class="title">
                    Заголовок блока
                </h1>
                <div class="about-emergency-room__content">
                    <h2>Заголово</h2>
                    <p>просто текст который должен быть на этой странице, потому что это важно</p>
                    <h2>Заголовок</h2>
                    <ul>
                        <li>
                            На метро до станции «Удельная», а далее маршрутными такси №240, 262, автобусами №38, 40, 86,
                            трамваями №20, 21.
                        </li>
                        <li>
                            От станции метро «Пионерская» троллейбусами №40, 50, автобусами №9, 93, трамваем №55.
                        </li>
                        <li>
                            От станции метро «Площадь Мужества» маршрутным такси №4, трамваями №40, 55.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="map" id="map"></div>
</section>

<?php
require "./modules/all-contacts.php";
require "./modules/props.php";
?>


<script src="https://api-maps.yandex.ru/2.1/?apikey=d37e0946-ea4c-40d6-abe8-a0dba0b96a11&lang=ru_RU"
        type="text/javascript"></script>
<script src="./assets/js/rounded-yandex/all.js" type="text/javascript"></script>
<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->
