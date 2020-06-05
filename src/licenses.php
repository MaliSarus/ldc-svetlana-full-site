<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Лицензии</title>
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
<!--    <link rel="stylesheet" -->
<!--          href="./assets/css/--><?php //echo basename(__FILE__, '.php'); ?><!--/style.css?ver=--><?php //echo date("His") ?><!--">-->
<link rel="preload" href="./assets/css/<?php echo basename(__FILE__, '.php'); ?>/style.css?ver=<?php echo date("His") ?>" as="style" onload="this.rel='stylesheet'">
    <section class="licenses">
        <div class="container">
            <div class="row">
                <ul class="breadcrumbs">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О центре</a></li>
                </ul>
                <div class="licenses__block">
                    <div class="licenses__row">
                        <h1 class="title">Лицензии</h1>
                        <ul class="licenses__images">
                            <li><img src="./assets/img/licenses/lic1.jpg" alt="Лицензия"></li>
                            <li><img src="./assets/img/licenses/lic2.jpg" alt="Лицензия"></li>
                            <li><img src="./assets/img/licenses/lic3.jpg" alt="Лицензия"></li>
                            <li><img src="./assets/img/licenses/lic4.jpg" alt="Лицензия"></li>
                        </ul>
                    </div>
                    <div class="licenses__row">
                        <h2 data-mobile="Заключение">Санитарно-эпидемиологическое заключение</h2>
                        <ul class="licenses__images">
                            <li><img src="./assets/img/licenses/res1.jpg" alt="Заключение"></li>
                            <li><img src="./assets/img/licenses/res2.jpg" alt="Заключение"></li>
                        </ul>
                    </div>
                    <div class="licenses__row">
                        <h2 data-mobile="Заключение">Санитарно-эпидемиологическое заключение</h2>
                        <ul class="licenses__images">
                            <li><img src="./assets/img/licenses/drug1.jpg" alt="Заключение"></li>
                            <li><img src="./assets/img/licenses/drug2.jpg" alt="Заключение"></li>
                            <li><img src="./assets/img/licenses/drug2.jpg" alt="Заключение"></li>
                        </ul>
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



