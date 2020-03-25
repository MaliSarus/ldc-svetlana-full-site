<?php
require "./modules/headlings.php";
?>
<title>ЛДЦ Светлана - Врач</title>
<link rel="stylesheet" href="./assets/css/slick.css"/>
<link rel="stylesheet" href="./assets/css/slick-theme.css"/>
<link rel="stylesheet" href="./assets/css/magnific-popup.css">
<link rel="stylesheet" href="./assets/css/<?php echo basename(__FILE__, '.php');?>/style.css">
<script src="./assets/js/jquery-3.4.1.min.js"></script>
</head>
<body>

<!--Шапка-->
<?php
require "./modules/popups.php";
require "./modules/header.php";
require "./modules/dropdown-menu.php";

require "./modules/feedback.php";

require "./modules/appointment.php";
require "./modules/specialists.php";

require "./modules/footer.php";
?>

<script src="./assets/js/slick-slider/slick.min.js"></script>
<script src="./assets/js/jquery.inputmask.min.js"></script>
<script src="./assets/js/scrollbooster/scrollbooster.min.js"></script>
<script src="./assets/js/popup/jquery.magnific-popup.min.js"></script>
<script src="./assets/js/script.js"></script>
</body>
</html>
