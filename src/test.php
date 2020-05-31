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
                <div class="accent__info">
                    <div class="accent__info_icon">
                        <img alt="иконка информации" src="../assets/img/staff/info-icon.svg">
                    </div>
                    <p class="accent__info_text">
                        Для безопасности Ваши личных данных мы:
                    </p>
                    <ul>
                        <li>реализуем защиту конфиденциальных данных пациентов в соответствии с требованиями законодательства;</li>
                        <li>используем защищенные каналы связи;</li>
                        <li>надежно храним всю медицинскую документацию;</li>
                        <li>результаты лабораторных анализов, инструментальных исследований, заключений специалистов хранятся в защищенной сертифицированной системе.</li>
                    </ul>
                </div>
                <div class="table__wrapper">
                    <table>
                        <thead>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                        </tr>
                        </tbody>
                    </table>
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
