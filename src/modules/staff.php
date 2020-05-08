<section class="staff">
    <div class="container container_size_1667">
        <div class="row">
            <div class="staff__block">
                <div class="staff__head">
                    <div class="content">
                        <h2 class="title">Врачи &lt;лечебно – диагностического центра&gt;</h2>
                        <div class="staff__tabs">
                            <div class="staff__tabs_item staff__tabs_item_active">Врачи клиники</div>
                            <div class="staff__tabs_item">Кураторы направлений</div>
                        </div>
                    </div>
                </div>
                <div class="staff__content staff__content_tab staff__content_tab_active">
                    <div class="content">
                        <div class="staff__content-top">
                            <div class="staff__search-form-wrapper">
                                <form action="#" class="staff__search-form">
                                    <input name="search" type="search" class="staff__search-form-field"
                                           autocomplete="off" id="finder_doc_val">
                                    <label for="finder_doc_val">Начните вводить фамилию или специализацию</label>
                                    <button type="submit" class="staff__search-form-button">
                                        <img src="./assets/img/staff/search-icon.svg" alt="Поиск">
                                    </button>
                                </form>
                            </div>

                            <div class="staff__search-dropdown">
                                <div class="staff__search-dropdown_item">
                                    <div class="staff__search-dropdown_title">Врачи</div>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                    <a href="#" class="staff__search-dropdown_link">Лол кекович</a>
                                    <a href="#" class="staff__search-dropdown_link">Чебурек Валерьяныч</a>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                    <a href="#" class="staff__search-dropdown_link">Невозвратный Петр Андреевич</a>
                                </div>
<!--                                <div class="staff__search-dropdown_item">-->
<!--                                    <div class="staff__search-dropdown_title">Специализации</div>-->
<!--                                    <a href="#" class="staff__search-dropdown_link">Кожемакин Валериан Ипалитович</a>-->
<!--                                </div>-->
                            </div>

                            <div class="staff__filters">
                                <div class="staff__filters_item">Доктора медицинских наук</div>
                                <div class="staff__filters_item">Профессора</div>
                                <div class="staff__filters_item">Кандидаты медицинских наук</div>
                            </div>
                        </div>
                        <div class="staff__content-bottom">
                            <div class="staff__ordinary">
                                <div class="title">Неврологи</div>
                                <?php
                                require "specialists__slider.php"
                                ?>
                            </div>
                            <div class="staff__ordinary">
                                <div class="title">Онкологи</div>
                                <?php
                                require "specialists__slider.php"
                                ?>
                            </div>
                            <div class="staff__find">
                                <div class="staff__find-head">
                                    <div class="title">Результат поиска - <span class="words"></span></div>
                                    <div class="back btn btn_red_fill">Сбросить фильтр</div>
                                </div>

                                <?php
                                require "specialists__slider.php"
                                ?>
                                <button class="btn btn_white">Показать еще</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="staff__content staff__content_tab">
                    <div class="content">
                        <div class="staff__content-top">
                            <div class="staff__info">
                                <div class="staff__info_icon">
                                    <img src="../assets/img/staff/info-icon.svg" alt="иконка информации">
                                </div>
                                <p class="staff__info_text">
                                    Кураторы направлений - врачи, которые обязательно помогут. Данные специалисты обладают
                                    исключительным опытом в своей специальности. Вы всегда можете расчитывать на
                                    качественную и своевременную помощь от данного персонала.
                                </p>
                            </div>
                        </div>
                        <div class="staff__content-bottom">
                            <div class="staff__ordinary">
                                <?php
                                require "specialists__slider.php"
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
