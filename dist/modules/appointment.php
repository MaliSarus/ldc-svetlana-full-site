<section class="appointment">
    <div class="container container_size_1667">
        <div class="row">
            <div class="appointment__block">
                <div class="content content_flex content_between">
                    <div class="appointment__title">
                        <h2 class="title">Запись на прием</h2>
                        <a href="tel:+78126270203">+7 (812) 627 02 03</a>
                    </div>
                    <form action="#" class="appointment__form" id="form-for-date">
                        <div class="appointment__input-wrapper">
                            <input type="text" class="appointment__customerName" id="customerName" name="customerName" required>
                            <label for="customerName">Имя</label>
                        </div>
                        <div class="appointment__input-wrapper">
                            <input type="tel" class="appointment__phone" id="phone" name="phone" required>
                            <label for="phone">Телефон</label>
                        </div>
                        <label class="confident-label"><input class="appointment__confident" name="confident" type="checkbox" value="yes"
                                                              required>
                            <small>Даю согласие на обработку <u>персональных данных</u></small>
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