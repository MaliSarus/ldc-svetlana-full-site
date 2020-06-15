<div class="popup">
    <div class="popup__block">
        <span class="popup-close-button cross"></span>
        <span class="text">Спасибо! Ваша заявка принята</span>
        <span class="popup-close-button"></span>
    </div>
</div>

<div class="popup-iphone">
    <div class="popup-iphone__block">
        <div class="popup-iphone__item popup-iphone__actions">
            <a href="#">
                <div class="popup-iphone__action"></div>
            </a>
            <a href="#">
                <div class="popup-iphone__action"></div>
            </a>
        </div>
        <div class="popup-iphone__item popup-iphone__cancel">
            Отменить
        </div>
    </div>
</div>

<section class="appointment_popup">
    <div class="container container_size_1667">
        <div class="row">
            <div class="appointment__block">
                <div class="content content_flex content_between">
                    <div class="appointment__title">
                        <h2 class="title">Запись на прием</h2>
                        <a href="tel:+78126270203">+7 (812) 627 02 03</a>
                        <div class="appointment__close"><img src="./assets/img/appointment/close-cross.svg"
                                                             alt="Кнопка закрыть"></div>
                    </div>
                    <form action="#" class="appointment__form" id="popup-form-for-date">
                        <div class="appointment__input-wrapper">
                            <input type="text" class="appointment__customerName" id="popup-customerName"
                                   name="customerName" required>
                            <label for="popup-customerName">Имя</label>
                        </div>
                        <div class="appointment__input-wrapper">
                            <input type="tel" class="appointment__phone" id="popup-phone" name="phone" required>
                            <label for="popup-phone">Телефон</label>
                        </div>
                        <input name="name-of-service" type="hidden" value=""><!--            Здесь хранится название страницы (Фио врача или название услуги-->
                        <input name="id-of-service" type="hidden" value=""><!--            Если нажата кнопка записи на элемент из прайса, то прокидываем ID-->
                        <label class="confident-label"><input class="appointment__confident" name="confident"
                                                              type="checkbox" value="yes"
                                                              required>
                            <small>Даю согласие на обработку <a href="#">персональных данных</a></small>
                        </label>
                        <button type="submit" class="btn btn_white">Записаться на приём <img
                                    src="./assets/img/appointment/submit-icon.svg"
                                    alt="Иконка кнопки"></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
