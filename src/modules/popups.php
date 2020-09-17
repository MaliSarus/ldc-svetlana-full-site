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
                            <input type="tel" class="appointment__phone" id="popup-phone" name="phone" autocomplete="off" required>
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
                    <label for="customerMessage">Текст отзыва (Вы можете написать в своем отзыве имя и фамилию
                        врачей, которые помогли Вам, а также описать услугу)</label>
                </div>
                <label for="feedback-file" class="btn btn_dark valid"><span>Загрузите ваше фото</span>
                    <input type="file" name="file" id="feedback-file"></label>
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
