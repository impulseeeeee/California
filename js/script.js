let subMenuActivation = document.querySelector('.arrow');
let subMenu = document.querySelector('.sub-menu');

subMenuActivation.addEventListener("click", function (ev) {
    subMenu.classList.toggle("active");
});

document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        subMenu.classList.remove("active");
    }
});


let burgerIcon = document.querySelector('.burger');
let menu = document.querySelector('.menu')

if (burgerIcon) {
    let navbar = document.querySelector('.navbar');
    burgerIcon.addEventListener("click", function (e) {
        navbar.classList.toggle('active')
        document.body.classList.toggle("active");
        menu.classList.toggle("active")
    })
}
/*
let searchInput = document.querySelector('.input');
let search = document.querySelector('.search');

search.addEventListener("click", function (ev) {
    searchInput.classList.toggle("active");
});*/

new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 100,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    autoHeight: true,
    variableWidth: true,
})