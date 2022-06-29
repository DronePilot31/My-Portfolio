// Selectores
// Btn Menu mob
var btnMenuMob = document.querySelector('#btnMenuMob');
var menuMob = document.querySelector('#menuMob');
// modal
var btnOutline = document.querySelector('#btnOutline');
var overlay = document.querySelector('#overlay');
var imgVideo = document.querySelector('#imgVideo');
// Eventos
// Menu mob
btnMenuMob.addEventListener('click', function () {
    menuMob.classList.toggle("d-block");
});
// modal
btnOutline.addEventListener('click', function () {
    overlay.classList.add("d-block");
    imgVideo.classList.add("d-block");
});
overlay.addEventListener('click', function () {
    overlay.classList.remove("d-block");
    imgVideo.classList.remove("d-block");
});