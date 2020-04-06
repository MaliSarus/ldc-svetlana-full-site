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

<?php
require "./modules/about-unit.php";
require "./modules/nav-links.php";
require "./modules/direction-master.php";
require "./modules/direction-services.php";

require "./modules/appointment.php";
require "./modules/unit-simple.php";
require "./modules/cost.php";
require "./modules/specialists.php";
require "./modules/tools.php";
require "./modules/feedback.php";
?>
<section class="appointment second-block">
    <div class="container container_size_1667">
        <div class="row">
            <?php
            require "./modules/appointment__block.php";
            ?>
        </div>
    </div>
</section>
<?php
require "./modules/for-patient.php";
?>




<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->

