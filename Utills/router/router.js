navigateTo('/');

// Simple router implementation
function navigateTo(path) {
    // Check if it's a service route
    const serviceRoute = services.find(s => path === s.route);

    if (serviceRoute) {
        renderServicePage(serviceRoute.id);
        return;
    }

    if (path === 'back') {
        window.location.reload();
        window.scrollTo({
            top: 0, //behavior: "smooth" // Smooth scrolling animation
        });

        return;
    }

    // Home page
    if (path === '/') {
        renderHomePage();
        return;
    }

    // 404 page
    renderNotFound();
}

function renderHomePage() {
    document.getElementById('app').innerHTML = `
           <main class="home_wrapper">
           <div class="blur-overlay"></div>
<img class="elem_light_mobile" alt="elem_light_mobile" src="./Utills/images/mobile_home.webp"/>
<img class="elem_blue" alt="elem_blue" src="./Utills/images/elem_blue.webp"/> 
<img class="elem_blue_mobile" alt="elem_blue_mobile" src="./Utills/images/mobile_blue_home.webp"/>
        <div id="main_page" class="main_page">
            <div class="content">
                <h1 class="title">ПЕРЕВОД ДОКУМЕНТОВ <br> УСЛУГИ В ИЗРАИЛЕ</h1>
                <button class="order_consultation">Получить консультацию</button>
                <a href="https://wa.me/972547615507"><div class="whatsapp"></div></a>
            </div>
              <a href="https://wa.me/972547615507"><div class="whatsapp_mobile"></div></a>
            <img class="elem_light" alt="elem_light" src="./Utills/images/elem_light.webp"/>
            <div class="form_section">
                <img class="man" alt="man" src="./Utills/images/man.webp"/>
                <form class="form">
                <span class="form_group">
                <label for="name"></label>
                <input name="name" id="name" type="text" placeholder="Имя">
                </span>
                    <span class="form_group">
                <label for="phone"></label>
                <input name="phone" id="phone" type="text" placeholder="Телефон">
                </span>
                    <div class="form_group">
                <textarea
                        class="custom-textarea"
                        placeholder="Удобное&#10;время для связи"
                        rows="1"
                ></textarea>
                    </div>
                    <button class="send_button">Отправить</button>
                </form>
            </div>

            <div class="list_services">
                <a class="navi_to" data-path="/marriage" href="" >БРАКИ</a>
                <a class="navi_to" data-path="/apostille" href="">АПОСТИЛЬ</a>
                <a class="navi_to" data-path="/translation" href="">ПЕРЕВОД ДОКУМЕНТОВ</a>
                <a class="navi_to" data-path="/forms" href="">ЗАПОЛНЕНИЕ АНКЕТ</a>
                <a class="navi_to" data-path="/will" href="">СОСТАВЛЕНИЕ ЗАВЕЩАНИЯ</a>
                <a class="navi_to" data-path="/parentage" href="">ПОДТВЕРЖДЕНИЯ<br> ОТЦОВСТВА / МАТЕРИНСТВА</a>
                <a class="navi_to" data-path="/document-preparation" href="">ПОМОЩЬ В ПОДГОТОВКЕ<br> ДОКУМЕНТОВ</a>
                <a class="navi_to" data-path="/parent-citizenship" href="">ОФОРМЛЕНИЕ ГРАЖДАНСТВА<br> ДЛЯ “ПРЕСТАРЕЛОГО РОДИТЕЛЯ”</a>
                <a class="navi_to" data-path="/cis-documents" href="">ЗАКАЗ И ПОЛУЧЕНИЕ ДОКУМЕНТОВ<br> ИЗ СТРАН БЫВШЕГО СНГ</a>
            </div>
       
        </div>
        <div id="about">
            <div class="contact_page">
                <div class="contact_part">
                    <div id="contact" class="contact_section">
                        <h1>Контакты</h1>
                        <div class="contact_group">
                            <div class="contact_text">
                                <p>Нетания</p>
                                <p>ул. Смилянски</p>
                                <p>дом 4,этаж 7</p>
                            </div>
                            <img src="./Utills/images/icon_map.svg" alt="icon_map" class="icon_map"/>
                        </div>
                        <div class="contact_group">
                            <div class="contact_text">
                                <p>da321@mail.ru</p>
                                <p>da321@gmail.com</p>
                            </div>
                            <img src="./Utills/images/icon_email.svg" alt="icon_email" class="icon_email"/>
                        </div>
                        <div class="contact_group">
                            <div class="contact_text">
                                <p>+(972)505-382121</p>
                                <p>+(972)544-388831</p>
                                <p>+(972)508-621927</p>
                            </div>
                            <img src="./Utills/images/icon_phone.webp" alt="icon_phone" class="icon_phone"/>
                        </div>
                        <div class="about_us_text">
                            <p>Сегодня наша компания называется «Агентство НАТАНИЯ - ПЕТР»
                                и по-прежнему находится по тому же адресу, что и 25 лет назад.</p>
                        </div>
                    </div>
                    <div id="about_info" class="about_info">
                        <h1>О нас</h1>
                        <div class="about_text">
                            <p>Наше агентство было создано в 1990 году, когда в Израиль приехало много репатриантов.
                                Целью было — оказать всестороннюю помощь новым гражданам Израиля по самым разным
                                вопросам.</p>
                            <p>С годами перечень услуг менялся в зависимости от спроса. Но неизменными оставались высокое
                                качество нашей работы, внимательное обслуживание и доброжелательное отношение к каждому
                                клиенту.</p>
                            <p>Именно поэтому те, кто хоть раз обратился в наше агентство, вновь и вновь возвращаются к нам
                                для решения новых вопросов.</p>
                            <div class="about_us_text_mobile">
                            <p>Сегодня наша компания называется «Агентство НАТАНИЯ - ПЕТР»
                                и по-прежнему находится по тому же адресу, что и 25 лет назад.</p>
                        </div>
                            <a href="https://wa.me/972547615507"><div class="whatsapp contact"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    `;
}

function renderNotFound() {
    document.getElementById('app').innerHTML = `
    <div class="not-found">
        <img class="elem_light_mobile" alt="elem_light_mobile" src="./Utills/images/mobile_home.webp"/>
        <img class="elem_blue" alt="elem_blue" src="./Utills/images/elem_blue.webp"/> 
        <img class="elem_blue_mobile" alt="elem_blue_mobile" src="./Utills/images/mobile_blue_home.webp"/>
          <img class="elem_light" alt="elem_light" src="./Utills/images/elem_light.webp"/>
        <div class="not-found_content">
            <h1>404 - Страница не найдена</h1>
            <h2>
            Кажется, вы попали не туда.<br/> 
            Возможно, страница удалилась, переехала... или просто решила взять выходной.
            Извините за неудобство!
            Вы можете вернуться на главную страницу и найти всё, что нужно — там всё на своих местах.
            А если что-то пошло совсем не так — мы всегда на связи и готовы помочь.
            </h2>
            <button onclick="navigateTo('back')">Вернуться на главную</button>
        </div>
    </div>
    `;
}
