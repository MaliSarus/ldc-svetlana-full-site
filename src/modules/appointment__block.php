<div class="appointment__block">
    <div class="content content_flex content_between">
        <div class="appointment__title">
            <h3 class="title">Запись на прием</h3>
            <a href="tel:+78126270203">+7 (812) 627 02 03</a>
        </div>
        <form action="#" class="appointment__form" id="form-for-date">
            <div class="appointment__input-wrapper">
                <input type="text" class="appointment__customerName" id="customerName" name="customerName" required>
                <label for="customerName">Имя</label>
            </div>
            <div class="appointment__input-wrapper">
                <input type="tel" class="appointment__phone" id="phone" name="phone" autocomplete="off" required>
                <label for="phone">Телефон</label>
            </div>
            <input name="name-of-service" type="hidden" value=""><!--            Здесь хранится название страницы (Фио врача или название услуги-->
            <input name="id-of-service" type="hidden" value=""><!--            Если нажата кнопка записи на элемент из прайса, то прокидываем ID-->
            <label class="confident-label"><input class="appointment__confident" name="confident" type="checkbox" value="yes"
                                                  required>
                <small>Даю согласие на обработку <a href="#">персональных данных</a></small>
            </label>
            <button type="submit" class="btn btn_white">Записаться на приём <img
                    src="./assets/img/appointment/submit-icon.svg"
                    alt="Иконка кнопки"></button>
        </form>
    </div>
</div>