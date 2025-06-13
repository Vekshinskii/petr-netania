// Simple router implementation
function navigateTo(path) {
    window.history.pushState({}, '', path);
    handleRoute();
}

function handleRoute() {
    const path = window.location.pathname;
    console.log(path);
    // Check if it's a service route
    const serviceRoute = services.find(s => path === s.route);
    if (serviceRoute) {
        renderServicePage(serviceRoute.id);
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
    // Render your home page here
    document.getElementById('app').innerHTML = `
           <main class="home_wrapper">
        <div class="main_page">
            <div class="content">
                <h1 class="title">ПЕРЕВОД ДОКУМЕНТОВ <br> УСЛУГИ В ИЗРАИЛЕ</h1>
                <button class="order_consultation">Получить консультацию</button>
                <div class=" whatsapp"></div>
            </div>
            <img class="elem_light" alt="elem_light" src="https://ваш-сайт.com/Utills/images/elem_light.jpg"/>
            <div class="form_section">
                <img class="man" alt="man" src="./Utills/images/man.webp"/>
                <form id="shared-form" class="form">
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

            <span class="list_services">
                <a href="#">БРАКИ</a>
                 <a href="#">АПОСТИЛЬ</a>
                 <a href="#">ПЕРЕВОД ДОКУМЕНТОВ</a>
                 <a href="#">ЗАПОЛНЕНИЕ АНКЕТ</a>
                 <a href="#">СОСТАВЛЕНИЕ ЗАВЕЩАНИЯ</a>
                 <a href="#">ПОДТВЕРЖДЕНИЯ<br> ОТЦОВСТВА / МАТЕРИНСТВА</a>
                 <a href="#">ПОМОЩЬ В ПОДГОТОВКЕ<br> ДОКУМЕНТОВ</a>
                 <a href="#">ОФОРМЛЕНИЕ ГРАЖДАНСТВА<br> ДЛЯ “ПРЕСТОРЕЛОГО РОДИТЕЛЯ”</a>
                 <a href="#">ЗАКАЗ И ПОЛУЧЕНИЕ ДОКУМЕНТОВ<br> ИЗ СТРАН БЫВШЕГО СНГ</a>
            </span>

            <!--        <img class="mobile_man" alt="mobile_man" src="./Utills/images/mobile_man.png"/>-->
            <div class="whatsapp-float">
                <div class="whatsapp-ring"></div>
                <a href="#" target="_blank">
                    <img src="./Utills/images/whatsapp.svg" alt="WhatsApp">
                </a>
            </div>
        </div>
        <div id="about">
            <div class="contact_page">
                <div class="contact_part">
                    <div id="contact" class="contact_section">
                        <h1>Контакты</h1>
                        <div class="about_us_text_mobile">
                            <p>Сегодня наша компания называется «Агентство НАТАНИЯ – ПЕТР»
                                и по-прежнему находится по тому же адресу, что и 25 лет назад:</p>
                        </div>
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
                        <div class="contact_group_blue">
                            <div class="contact_text">
                                <p>+(972)505-382121</p>
                                <p>+(972)544-388831</p>
                                <p>+(972)508-621927</p>
                            </div>
                            <img src="./Utills/images/icon_phone.png" alt="icon_phone" class="icon_phone"/>
                        </div>
                        <div class="about_us_text">
                            <p>Сегодня наша компания называется «Агентство НАТАНИЯ – ПЕТР»
                                и по-прежнему находится по тому же адресу, что и 25 лет назад.</p>
                        </div>
                    </div>
                    <div class="about_info">
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
                            <div class="whatsapp contact"></div>
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
            <h1>404 - Страница не найдена</h1>
            <button onclick="navigateTo('/')">Вернуться на главную</button>
        </div>
    `;
}

// Initialize router
window.addEventListener('popstate', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);