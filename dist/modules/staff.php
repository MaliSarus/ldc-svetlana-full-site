<section class="staff">
    <div class="container container_size_1667">
        <div class="row">
            <div class="staff__block">
                <div class="staff__head">
                    <div class="content">
                        <div class="title">Врачи ЛДЦ</div>
                        <div class="staff__tabs">
                            <div class="staff__tabs_item staff__tabs_item_active">Врачи</div>
                            <div class="staff__tabs_item">Кураторы направлений</div>
                        </div>
                    </div>
                </div>
                <div class="staff__content">
                    <div class="content">
                        <div class="staff__content-top">
                            <div class="staff__search-form-wrapper">
                                <form action="#" class="staff__search-form">
                                    <input name="search" type="search" class="staff__search-form-field"
                                           placeholder="Поиск по сайту">
                                    <button type="submit" class="staff__search-form-button">
                                        <img src="./assets/img/header/search.svg" alt="Поиск">
                                    </button>
                                </form>
                            </div>
                            <div class="staff__filters">
                                <div class="staff__filters_item">Доктора медицинских наук</div>
                                <div class="staff__filters_item">Профессора</div>
                                <div class="staff__filters_item">Кандидаты медицинских наук</div>
                            </div>
                        </div>
                        <div class="staff__content-bottom">
                            <div class="staff__content_tab staff__content_tab_active">
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
                            </div>
                            <div class="staff__content_tab">
                                <div class="staff__ordinary">
                                    <div class="title">Неврологи</div>
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
    </div>
</section>
