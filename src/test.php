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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eos explicabo
                                incidunt laborum maiores porro totam voluptate! Accusantium, exercitationem, fuga.</p>
                            <div class="content-image">
                                <img src="./assets/img/tools/2.jpg" alt="">
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
