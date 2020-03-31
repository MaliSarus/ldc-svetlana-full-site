<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Услуга</title>
<link rel="stylesheet" href="./assets/css/slick.css"/>
<link rel="stylesheet" href="./assets/css/slick-theme.css"/>
<link rel="stylesheet" href="./assets/css/magnific-popup.css">
<link rel="stylesheet" href="./assets/css/<?php echo basename(__FILE__, '.php');?>/style.css?ver=<?php echo  date("His")?>">
<script src="./assets/js/jquery-3.4.1.min.js"></script>
</head>
<body>

<!--Шапка-->
<?php
require "./modules/popups.php";
require "./modules/header.php";
require "./modules/dropdown-menu.php";
require "./modules/about-service.php";
require "./modules/nav-links.php";

require "./modules/cost.php";

require "./modules/appointment.php";
require "./modules/feedback.php";
require "./modules/for-patient.php";

require "./modules/footer.php";
?>

<script src="./assets/js/slick-slider/slick.min.js"></script>
<script src="./assets/js/jquery.inputmask.min.js"></script>
<script src="./assets/js/scrollbooster/scrollbooster.min.js"></script>
<script src="./assets/js/popup/jquery.magnific-popup.min.js"></script>
<script src="./assets/js/script.js?ver=<?php echo  date("His")?>"></script>
</body>
</html>
