//Під-МЕНЮ
const subMenu = document.querySelector('.sub-menu');

document.addEventListener("click", function (sub) {
    if (sub.target.closest(".arrow")) {
        subMenu.classList.toggle("active");
    }

    ;

    if (!sub.target.closest(".activation")) {
        subMenu.classList.remove("active");
    }
}

);

document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        subMenu.classList.remove("active");
        popUp.classList.remove('open')
    }
}

);



//Бургер Меню
const burgerIcon = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burgerIcon) {
    const navbar = document.querySelector('.navbar');

    burgerIcon.addEventListener("click", function () {
        navbar.classList.toggle('active');
        document.body.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

;

//Слайдер 
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

    ,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }

    ,
    spaceBetween: 100,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    }

    ,
    autoHeight: true,
    variableWidth: true,
}

);


//Пошук за словами
const words = document.querySelector('.words');
const pasteBtn = words.querySelectorAll('.btn');
const searchInput = document.querySelector('#search');

pasteBtn.forEach(element => {
    element.addEventListener("click", function () {
        searchInput.value = element.innerHTML;
    });
}

);


//Pop-Up
const search = document.querySelector('.search');
const popUp = document.querySelector('.popup');
const closePopUp = document.querySelector('.popup__close')

document.addEventListener("click", function (pop) {
    if (pop.target.closest(".search")) {
        popUp.classList.add('open')
        document.body.classList.add("open");
    };

    if (pop.target.closest(".popup__close")) {
        popUp.classList.remove('open')
        document.body.classList.remove("open");
    };

    popUp.addEventListener("click", function (close) {
        if (!close.target.closest(".popup__content")) {
            popUp.classList.remove('open')
            document.body.classList.remove("open");
        };
    });
});