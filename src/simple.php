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
    <section class="simple">
        <div class="container">
            <div class="row">
                <div class="simple__block">
                    <div class="infoblock__item ">
                        <div class="infoblock__row">
                            <div class="infoblock__item_content">
                                <h1>Заголовок</h1>

                                <!--  Дата для страницы новости       -->
                                <time id="pub-date">26.05.2020</time>
                                <!--  /Дата для страницы новости       -->

                                <!--  Авторы для страницы статьи       -->
                                <p class="authors">
                                    <a href="#">Вишневский А.А. </a>
                                    <a href="#">Черноиван А.Г.</a>
                                </p>
                                <!--  /Авторы для страницы статьи       -->

                                <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который
                                    вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от
                                    lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и
                                    придаст неповторимый колорит советских времен. По своей сути рыбатекст является
                                    альтернативой традиционному lorem ipsum, который вызывает у некторых людей
                                    недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба
                                    на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый
                                    колорит советских времен.</p>
                                <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который
                                    вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от
                                    lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и
                                    придаст неповторимый колорит советских времен.</p>
                            </div>
                            <div class="infoblock__item_content">
                                <img src="./assets/img/simple/1.jpg" alt="Картинка">
                            </div>
                        </div>
                        <div class="infoblock__row">
                            <div class="infoblock__item_content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae, blanditiis
                                    deleniti
                                    dicta error hic, id ipsa ipsam itaque non quisquam quod voluptatibus. Aut
                                    consequatur
                                    deserunt
                                    hic magnam omnis quidem rem voluptas! Culpa enim et impedit incidunt minus neque
                                    officiis
                                    provident quibusdam ratione, repellendus. Aspernatur optio ratione veniam voluptate?
                                    Aperiam
                                    asperiores doloremque dolorum, expedita repellendus velit? Amet aperiam assumenda
                                    beatae
                                    dicta
                                    eveniet expedita fuga laudantium nihil perspiciatis temporibus? Animi aspernatur
                                    blanditiis
                                    consectetur corporis, dignissimos, fugiat iusto nemo obcaecati rem rerum, saepe
                                    soluta
                                    voluptates voluptatibus? Alias aliquid, beatae, consequuntur labore mollitia odio
                                    perspiciatis
                                    quaerat quisquam quos repellat repudiandae, tempora unde vel.
                                </p>
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



