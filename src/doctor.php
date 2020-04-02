<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Врач</title>
<link rel="stylesheet" href="./assets/css/slick.css"/>
<link rel="stylesheet" href="./assets/css/slick-theme.css"/>
<link rel="stylesheet" href="./assets/css/magnific-popup.css">
<link rel="stylesheet" href="./assets/css/<?php echo basename(__FILE__, '.php');?>/style.css?ver=<?php echo  date("His")?>">
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

<!--Шапка-->
<?php
require "./modules/popups.php";
require "./modules/header.php";
require "./modules/dropdown-menu.php";

require "./modules/staff-simple.php";
require "./modules/price.php";
require "./modules/education.php";
require "./modules/diplomas.php";
require "./modules/feedback.php";
require "./modules/science-articles.php";
require "./modules/appointment.php";
require "./modules/specialists.php";

require "./modules/footer.php";
?>

<script src="./assets/js/slick-slider/slick.min.js"></script>
<script src="./assets/js/jquery.inputmask.min.js"></script>
<script src="./assets/js/scrollbooster/scrollbooster.min.js"></script>
<script src="./assets/js/popup/jquery.magnific-popup.min.js"></script>
<script src="./assets/js/script.js?ver=<?php echo  date("His")?>"></script>
</body>
</html>
