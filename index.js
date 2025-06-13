const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const scrollThreshold = 10; // Порог скролла в пикселях, после которого меняется цвет
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const form = document.getElementById('shared-form');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const blurOverlay = document.querySelector('.blur-overlay');
const navLink = document.querySelector('.nav_link');
const mobileForm = document.querySelector('.form_mobile');
const aboutLink = document.getElementById('about_link');
const contactLink = document.getElementById('contact_link');


function showFormIn() {
    mobileForm.appendChild(form);
}

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Для мобильных устройств используем клик вместо ховера
    if (window.innerWidth <= 768) {
        showFormIn();
        dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Закрываем дропдаун при клике вне его области
        document.addEventListener('click', function (e) {
            if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-content a')) {
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