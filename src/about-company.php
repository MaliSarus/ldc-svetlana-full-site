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
<link rel="stylesheet" href="./assets/css/<?php echo basename(__FILE__, '.php');?>/style.css?ver=<?php echo  date("His")?>">

<section class="about-block" style=" background-image:url(./assets/img/about-unit/bg-image.png)">
    <?php
    require "./modules/about-block.php";
    ?>
</section>
<?php
require "./modules/history.php";
require "./modules/control.php";
require "./modules/diplomas.php";
require "./modules/social-media.php";
require "./modules/tools.php";
require "./modules/news.php";
require "./modules/partners.php";
require "./modules/feedback.php";
require "./modules/site-map.php";
?>



<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->




