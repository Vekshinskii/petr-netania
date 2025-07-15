const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const scrollThreshold = 10; // Порог скролла в пикселях, после которого меняется цвет
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const blurOverlay = document.querySelector('.blur-overlay');
const mobileForm = document.querySelector('.form_mobile');
const aboutLink = document.getElementById('about_link');
const contactLink = document.getElementById('contact_link');
const navi_to = document.getElementsByClassName('navi_to');
const nav_to_section = document.getElementsByClassName('nav_to_section');
const return_section = document.getElementById('return_section');
const form = document.createElement('form');
form.setAttribute('id', 'shared-form');
form.classList.add('form');
form.innerHTML = `
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
    </div>\n                    
    <button class="send_button">Отправить</button>`;

window.addEventListener('resize', () => {
    if(window.innerHeight < 500)
        document.querySelector('.form_mobile').style.position = 'fixed';
    else
        document.querySelector('.form_mobile').style.position = 'absolute';
});


function showFormIn() {
    mobileForm.appendChild(form);
}

document.addEventListener('DOMContentLoaded', function () {
    Array.from(navi_to).forEach(function(elem) {
      elem.addEventListener('click', (e)=> {
          e.preventDefault();
          let path = e.currentTarget.dataset.path;
          navigateTo(path);
          window.scrollTo({
              top: 0,
              behavior: "smooth" // Smooth scrolling animation
          });
          closeBurgerMenuAndAllDropDownMenus();
      });
    });

    Array.from(nav_to_section).forEach(function(elem) {
        elem.addEventListener('click', (e)=> {
            e.preventDefault();
            navigateTo('/');
            let div = document.getElementById(e.currentTarget.dataset.to);
            div.scrollIntoView({behavior: 'smooth'});
            closeBurgerMenuAndAllDropDownMenus();
        });
    });

    function closeBurgerMenuAndAllDropDownMenus() {
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            if(dropdownContent.style.display === 'block')
                dropdownBtn.click();
            burgerMenu.click();
        }
    }

    window.addEventListener('scroll', function (e) {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    showFormIn();
    // Для мобильных устройств используем клик вместо ховера
    if (window.innerWidth <= 768) {
        dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Закрываем дропдаун при клике вне его области
        document.addEventListener('click', function (e) {
            if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-content a')) {
                mobileForm.detach(form);
                dropdownContent.style.display = 'none';
            }
        });

        logo.addEventListener('click', function () {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            blurOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    burgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        blurOverlay.classList.toggle('active');

        // Блокировка скролла при открытом меню
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

    });

    // Закрытие меню при клике на блюр
    blurOverlay.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    aboutLink.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        blurOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    contactLink.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
        blurOverlay.classList.remove('active');
    });
});