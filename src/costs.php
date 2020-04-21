<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Цены</title>
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

<div class="costs">
    <section class="costs-top">
        <div class="container">
            <div class="row">
                <div class="costs-top__block">
                    <h1 class="title">Цены на услуги ЛДЦ завода “Светлана”</h1>
                    <div class="costs-top__filters">
                        <div class="costs-top__filters-item btn btn_white">Реабилитационное отделение</div>
                        <div class="costs-top__filters-item btn btn_white">Телемедицина</div>
                        <div class="costs-top__filters-item btn btn_white">Травмпункт</div>
                        <div class="costs-top__filters-item btn btn_white">Операционный блок</div>
                        <div class="costs-top__filters-item btn btn_white">Лечебное отделение</div>
                        <div class="costs-top__filters-item btn btn_white">Диагностическое отделение</div>
                        <div class="costs-top__filters-item btn btn_white">Чек-ап программы</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
    require "./modules/cost.php";
    require "./modules/cost.php";
    require "./modules/cost.php";
    require "./modules/cost.php";
    ?>
</div>


<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->



