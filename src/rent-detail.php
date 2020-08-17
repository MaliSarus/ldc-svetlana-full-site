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

<section class="about-unit">
    <!--    style=" background-image:url(./assets/img/about-unit/bg-image.png)"-->
    <!--    <div class="bg-picture"><img src="./assets/img/about-unit/bg-image.png" alt=""></div>-->
    <img src="./assets/img/rent-detail/image-2.jpg" alt="" class="rent-image">
    <div class="bg-bottom-right"></div>
    <div class="bg-top-right"></div>
    <div class="skew-bg"></div>
    <div class="container">
        <div class="row">
            <ul class="breadcrumbs">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Лечебное отделение</a></li>
            </ul>
            <div class="about-unit__block">
                <div class="about-unit__desc">
                    <h1 class="title">ARTROMOT F (Аппарат для разработки суставов кисти и пальцев)</h1>
                    <div class="about-unit__tags">
                        <span><a href="#">Тэг</a></span>
                        <span><a href="#">Тэг</a></span>
                    </div>
                    <div class="about-unit__bages">
                        <span>Доставка на дом</span>
                    </div>
                    <div class="about-unit__text">
                        ARTROMOT F. – аппарат для разработки суставов кисти и пальцев. Особенно эффективен для
                        предотвращения иммобилизации межфланговых суставов кисти, быстрого восстановления их подвижности
                        в целях достижения хорошего функционального результата.
                    </div>
                    <a class="btn btn_dark scroll-to" href="#test-id">Заказать</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Вставка компонента с якорями -->
<?php
require './modules/nav-links.php'
?>
<!-- /Вставка компонента с якорями -->


<!-- Такой компонент уже есть, нужно тоже его вставить -->
<section class="infoblock" id="test-id">
    <div class="container">
        <div class="row">
            <div class="infoblock__block">
                <div class="infoblock__item ">
                    <div class="infoblock__row">
                        <div class="infoblock__item_content">
                            <h2>Заголовок таблицы</h2>
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
                                    </tbody>
                                </table>
                            </div>
                            <p>Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что</p>
                        </div>
                    </div>
                </div>
                <div class="infoblock__item ">
                    <div class="infoblock__row">
                        <div class="infoblock__item_content">
                            <h2>Заголовок таблицы</h2>
                            <p>Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что
                                Теперь идет какой то текст не знаю про что</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
<!-- /Вставка компонента инфоблока -->

<!-- Компонент с перелинковками (нужно интегрировать) -->
<?
require "./modules/rent.php";
?>
<!-- /Компонент с перелинковками -->


<!----------------------------НЕ ТРОГАТЬ---------------------------------->
<?
require "./modules/footer.php";
?>
<!-------------------------------------------------------------------------------------------------------------------->