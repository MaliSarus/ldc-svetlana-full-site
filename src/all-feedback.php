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
<main>
    <!-------------------------------------------------------------------------------------------------------------------->
    <link rel="stylesheet"
          href="./assets/css/<?php echo basename(__FILE__, '.php'); ?>/style.css?ver=<?php echo date("His") ?>">
    <div class="all-feedback-modal all-feedback-modal_unactive">
        <div class="all-feedback-modal__block">
            <div class="all-feedback-modal__head">
                <h2>Оставьте свой отзыв о центре</h2>
                <img class="all-feedback-modal__close" src="./assets/img/appointment/close-cross.svg"
                     alt="Кнопка закрыть">
            </div>
            <div class="all-feedback-modal__content">
                <form action="#">
                    <div class="all-feedback-modal__input-wrapper">
                        <input type="text" id="customerName" name="name"
                               required>
                        <label for="customerName">Ваше ФИО</label>
                    </div>
                    <div class="all-feedback-modal__input-wrapper">
                        <textarea type="text" id="customerMessage" name="message"
                                  required></textarea>
                        <label for="customerMessage">Текст отзыва</label>
                    </div>
                    <label class="confident-label"><input class="all-feedback-modal__confident" name="confident"
                                                          type="checkbox" value="yes"
                                                          required>
                        <small>Даю согласие на обработку <a href="#">персональных данных</a></small>
                    </label>
                    <button type="submit" class="btn btn_white">Отправить отзыв <img
                                src="./assets/img/appointment/submit-icon.svg"
                                alt="Иконка кнопки"></button>
                </form>
            </div>
        </div>
    </div>
    <section class="all-feedback">
        <div class="container">
            <div class="row">
                <ul class="breadcrumbs">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О центре</a></li>
                </ul>
                <div class="all-feedback__block">
                    <div class="all-feedback__head">
                        <h1 class="title">Отзывы о работе лечебно-диагностического центра</h1>
                        <button class="btn btn_dark call-modal">Оставить отзыв</button>
                    </div>
                    <div class="all-feedback__content">
                        <div class="feedback__item">
                            <div class="feedback__item-head">
                                <div class="feedback__item-head-user">
                                    <a href="./assets/img/feedback/propusk.pdf" class="feedback__item-head-user-image"
                                       style="background-image: url(./assets/img/feedback/doc.png)">
                                    </a>
                                    <div class="feedback__item-head-user-info">
                                        <p class="feedback__item-head-user-username">Ольга Ивановна</p>
                                        <small class="feedback__item-head-user-date">16 декабря 2019</small>
                                    </div>
                                </div>
                                <div class="feedback__item-head-portal">
                                    <p class="feedback__item-head-portal-text">Отзыв с портала</p>
                                    <div class="feedback__item-head-portal-image">
                                        <img src="./assets/img/feedback/portal-image.svg" alt="Изображение портала">
                                    </div>
                                </div>
                            </div>
                            <div class="feedback__item-content" tabindex="0">
                                <p class="feedback__item-content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                </p>
                            </div>
                            <div class="feedback__item-about">
                                <p class="feedback__item-about-doctor"><b>Врач:</b> Баиндурашвили А. Г.</p>
                                <p class="feedback__item-about-ordinary"><b>Направление:</b> Оториноларингология</p>
                            </div>
                        </div>
                        <div class="feedback__item">
                            <div class="feedback__item-head">
                                <div class="feedback__item-head-user">
                                    <a href="./assets/img/tools/1.jpg" class="feedback__item-head-user-image"
                                       style="background-image: url(./assets/img/feedback/doc.png)">
                                    </a>
                                    <div class="feedback__item-head-user-info">
                                        <p class="feedback__item-head-user-username">Ольга Ивановна</p>
                                        <small class="feedback__item-head-user-date">16 декабря 2019</small>
                                    </div>
                                </div>
                                <div class="feedback__item-head-portal">
                                    <p class="feedback__item-head-portal-text">Отзыв с портала</p>
                                    <div class="feedback__item-head-portal-image">
                                        <img src="./assets/img/feedback/portal-image.svg" alt="Изображение портала">
                                    </div>
                                </div>
                            </div>
                            <div class="feedback__item-content" tabindex="0">
                                <p class="feedback__item-content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.

                                </p>
                            </div>
                            <div class="feedback__item-about">
                                <p class="feedback__item-about-doctor"><b>Врач:</b> Баиндурашвили А. Г.</p>
                            </div>
                        </div>
                        <div class="feedback__item">
                            <div class="feedback__item-head">
                                <div class="feedback__item-head-user">
                                    <a href="./assets/img/feedback/propusk.pdf" class="feedback__item-head-user-image"
                                       style="background-image: url(./assets/img/feedback/doc.png)">
                                    </a>
                                    <div class="feedback__item-head-user-info">
                                        <p class="feedback__item-head-user-username">Ольга Ивановна</p>
                                        <small class="feedback__item-head-user-date">16 декабря 2019</small>
                                    </div>
                                </div>
                                <div class="feedback__item-head-portal">
                                    <p class="feedback__item-head-portal-text">Отзыв с портала</p>
                                    <div class="feedback__item-head-portal-image">
                                        <img src="./assets/img/feedback/portal-image.svg" alt="Изображение портала">
                                    </div>
                                </div>
                            </div>
                            <div class="feedback__item-content" tabindex="0">
                                <p class="feedback__item-content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.
                                </p>
                            </div>
                            <div class="feedback__item-about">
                                <p class="feedback__item-about-doctor"><b>Врач:</b> Баиндурашвили А. Г.</p>
                                <p class="feedback__item-about-ordinary"><b>Направление:</b> Оториноларингология</p>
                            </div>
                        </div>
                        <div class="feedback__item">
                            <div class="feedback__item-head">
                                <div class="feedback__item-head-user">
                                    <a href="./assets/img/tools/1.jpg" class="feedback__item-head-user-image"
                                       style="background-image: url(./assets/img/feedback/doc.png)">
                                    </a>
                                    <div class="feedback__item-head-user-info">
                                        <p class="feedback__item-head-user-username">Ольга Ивановна</p>
                                        <small class="feedback__item-head-user-date">16 декабря 2019</small>
                                    </div>
                                </div>
                                <div class="feedback__item-head-portal">
                                    <p class="feedback__item-head-portal-text">Отзыв с портала</p>
                                    <div class="feedback__item-head-portal-image">
                                        <img src="./assets/img/feedback/portal-image.svg" alt="Изображение портала">
                                    </div>
                                </div>
                            </div>
                            <div class="feedback__item-content" tabindex="0">
                                <p class="feedback__item-content-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda
                                    commodi
                                    consectetur corporis eum exercitationem facere, fuga itaque nobis pariatur sapiente.
                                    Accusamus animi atque blanditiis doloribus minima minus pariatur quidem tempora
                                    voluptate
                                    voluptates. Debitis dicta minima optio quam. Dolorum inventore neque numquam quae
                                    quos saepe
                                    vero. Quidem repudiandae, suscipit.

                                </p>
                            </div>
                            <div class="feedback__item-about">
                                <p class="feedback__item-about-doctor"><b>Врач:</b> Баиндурашвили А. Г.</p>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <a href="#" class="pagination-back"><img src="./assets/img/pagination/arrow.svg"
                                                                 alt="назад"></a>
                        <ul class="pagination-list">
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link">1</a></li>
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link">2</a></li>
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link active">3</a>
                            </li>
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link">4</a></li>
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link">5</a></li>
                            <li class="pagination-list__item"><a href="#" class="pagination-list__link">6</a></li>
                        </ul>
                        <a href="#" class="pagination-next"><img src="./assets/img/pagination/arrow.svg"
                                                                 alt="вперед"></a>
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



