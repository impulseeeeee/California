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

if (burgerIcon) {
    let navbar = document.querySelector('.navbar');
    burgerIcon.addEventListener("click", function (e) {
        navbar.classList.toggle('active')
    })
}