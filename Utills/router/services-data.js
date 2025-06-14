const services = [
    {
        id: "marriage",
        route: "/marriage",
        title: "Браки",
        subtitle: "Оформление брака в Израиле для граждан СНГ: профессиональная помощь от нотариальной компании",
        description: "Израиль, будучи многонациональной страной, привлекает множество пар из стран СНГ, желающих узаконить свои отношения. Однако, процесс оформления брака в Израиле для иностранных граждан имеет свои нюансы и может быть сложным без квалифицированной помощи.",
        mainImage: "./Utills/images/rings_2.png",
        altText: "wedding rings",
        stepsTitle: "Мы предлагаем",
        steps: [
            {
                title: "Консультации",
                text: "Наши опытные юристы предоставляют подробные консультации по всем вопросам, связанным с оформлением брака в Израиле."
            },
            {
                title: "Подготовка документов",
                text: "Мы поможем вам собрать и подготовить все необходимые документы для подачи в соответствующие органы."
            },
            {
                title: "Сопровождение",
                text: "Наши специалисты будут сопровождать вас на всех этапах процесса оформления брака."
            },
            {
                title: "Представление интересов",
                text: "Мы представляем ваши интересы в государственных органах и организациях."
            }
        ],
        featuresTitle: "Почему выбирают нас?",
        features: [
            "30-летний опыт работы в Израиле",
            "Полное сопровождение",
            "Индивидуальный подход"
        ],
        about: "Обратившись в нашу нотариальную компанию, вы получите профессиональную помощь и поддержку на каждом этапе оформления брака в Израиле...",
        ctaTitle: "Нужна помощь?",
        ctaText: "Возникли вопросы? Мы всегда готовы объяснить всё максимально ясно и подробно."
    },
    {
        id: "apostille",
        route: "/apostille",
        title: "Апостиль в Израиле",
        subtitle: "Что такое апостиль?",
        description: "<strong>Апостиль</strong> — это специальный способ легализации документов для их признания в других странах. Этот процесс делает документы официальными и действительными за пределами страны, где они были выданы.",
        mainImage: "./Utills/images/docs.png",
        altText: "apostille",
        stepsTitle: "Как получить апостиль в Израиле?",
        steps: [
            {
                title: "Подготовка документа",
                text: "Убедитесь, что он оформлен правильно и содержит все необходимые подписи и печати."
            },
            {
                title: "Обращение к нотариусу",
                text: "Нотариус подтвердит подлинность подписи на вашем документе."
            },
            {
                title: "Подача заявки",
                text: "После заверения документ подаётся в Министерство иностранных дел Израиля."
            },
            {
                title: "Получение апостиля",
                text: "Вы получаете документ с апостилем, пригодный для использования за границей."
            }
        ],
        featuresTitle: "Для каких документов нужен Апостиль?",
        features: [
            "Свидетельства о рождении",
            "Брачные свидетельства",
            "Уголовные справки",
            "Учебные дипломы",
            "Полномочия и доверенности"
        ],
        reasonsTitle: "Почему выбирают нас?",
        reasons: [
            "30-летний опыт работы в Израиле",
            "Полное сопровождение",
            "Индивидуальный подход"
        ],
        ctaTitle: "Нужна помощь с апостилем?",
        ctaText: "Возникли вопросы? Мы всегда готовы объяснить всё максимально ясно и подробно."
    },
    {
        id: "translation",
        route: "/translation",
        title: "Перевод документов в Израиле",
        subtitle: "Официальный перевод с нотариальным заверением",
        description: "<strong>Официальный перевод</strong> — это точный перевод документа с одного языка на другой, выполненный профессиональным переводчиком. При необходимости документ заверяется нотариусом для официального использования.",
        mainImage: "./Utills/images/translate.png",
        altText: "translation",
        stepsTitle: "Как проходит процесс перевода?",
        steps: [
            {
                title: "Отправка документа",
                text: "Вы отправляете документ через WhatsApp или email."
            },
            {
                title: "Перевод",
                text: "Мы выполняем точный перевод с учётом требований органов, куда подаётся документ."
            },
            {
                title: "Получение",
                text: "Вы получаете готовый перевод — в электронном виде или с печатью нотариуса."
            }
        ],
        featuresTitle: "Какие документы мы переводим?",
        features: [
            "Свидетельства о рождении, браке, разводе",
            "Дипломы, аттестаты и приложения",
            "Паспорта, удостоверения личности",
            "Справки МВД и медицинские документы",
            "Нотариальные доверенности и контракты"
        ],
        reasonsTitle: "Почему выбирают нас?",
        reasons: [
            "30+ лет опыта в переводах для Израиля и зарубежья",
            "Перевод на иврит, английский, русский и др.",
            "Нотариальное заверение и срочные услуги"
        ],
        ctaTitle: "Нужен срочный перевод?",
        ctaText: "Свяжитесь с нами — мы всё объясним, переведём и оформим документы точно в срок."
    },
    {
        id: "forms",
        route: "/forms",
        title: "Заполнение анкет в Израиле",
        subtitle: "Профессиональная помощь в оформлении документов",
        description: "<strong>Заполнение анкет</strong> — это важный этап при подаче заявлений в государственные органы, консульства, учебные заведения и другие инстанции. Мы помогаем правильно заполнить анкеты, чтобы избежать ошибок, задержек и отказов.",
        mainImage: "./Utills/images/form.png",
        altText: "forms",
        stepsTitle: "Как проходит процесс заполнения анкет?",
        steps: [
            {
                title: "Первичная консультация",
                text: "Вы сообщаете, в какую инстанцию и для какой цели нужна анкета."
            },
            {
                title: "Сбор информации",
                text: "Мы помогаем собрать нужные данные и документы."
            },
            {
                title: "Заполнение анкеты",
                text: "Оформляем анкету точно и корректно, на нужном языке."
            },
            {
                title: "Проверка и передача",
                text: "Отдаём вам готовую анкету или отправляем в нужную организацию."
            }
        ],
        featuresTitle: "С какими анкетами мы работаем?",
        features: [
            "Анкеты в МВД Израиля (Мисрад а-Пним)",
            "Консульские анкеты (визы, гражданство)",
            "Анкеты для вузов и школ",
            "Заявления на алию, статус, вид на жительство",
            "Рабочие и студенческие анкеты"
        ],
        reasonsTitle: "Почему выбирают нас?",
        reasons: [
            "Глубокое знание израильской бюрократии",
            "Многоязычная поддержка (русский, иврит, английский)",
            "Индивидуальный подход и конфиденциальность"
        ],
        ctaTitle: "Нужна помощь с анкетами?",
        ctaText: "Обратитесь к нам — мы подробно объясним, что нужно, и всё оформим правильно с первого раза."
    }
];

function renderServicePage(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return renderNotFound();

    document.getElementById('app').innerHTML = `
    <div class="service_item">
        <div class="text_section">
            <div class="text">
                <section class="first_section">
                    <div class="first_part">
                        <h1>${service.title}</h1>
                        <h2 id="title_service">${service.subtitle}</h2>
                        <p>${service.description}</p>
                        <button class="order_consultation">Получить консультацию</button>
                    </div>
                    <div class="second_part">
                        <img src="./Utills/images/elem_blue_apostile.png" alt="${service.altText}_icon"/>
                        <img id="main_icon_service" src="${service.mainImage}" alt="${service.altText}"/>
                    </div>
                </section>
                <section class="steps_section">
                    <h2>${service.stepsTitle}</h2>
                    <ul class="steps">
                        ${service.steps.map(step => `
                        <li>
                            <img class="icon_apostile_order" src="./Utills/images/icon_apostile_order.png" alt="icon"/>
                            <h3>${step.title}:</h3>
                            ${step.text}
                        </li>
                        `).join('')}
                    </ul>
                </section>
                <section class="second_section">
                    <section>
                        <h2>${service.featuresTitle}</h2>
                        <ul class="features_service">
                            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </section>
                    ${service.reasons ? `
                    <section class="resonse_section">
                        <h2>${service.reasonsTitle || 'Почему выбирают нас?'}</h2>
                        <ul class="reasons">
                            ${service.reasons.map(reason => `<li>${reason}</li>`).join('')}
                        </ul>
                    </section>
                    ` : ''}
                    ${service.about ? `
                    <section class="about_section_married">
                        ${service.about}
                    </section>
                    ` : ''}
                </section>
                <section class="third_section">
                    <section class="return_section" onclick="navigateTo('/')">
                        <img src="./Utills/images/Arrow_return.png" alt="back_icon"/>
                        <h3>Вернуться на главную</h3>
                    </section>
                    <section class="cta">
                        <h2>${service.ctaTitle}</h2>
                        <p>${service.ctaText}</p>
                    </section>
                    <section class="whatsapp_section">
                        <div class="whatsapp_service"></div>
                    </section>
                </section>
            </div>
        </div>
    </div>
    `;
}