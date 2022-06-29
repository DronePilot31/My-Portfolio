var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
};
ScrollReveal().reveal('.slide-up', slideUp);
// selectores
// btnMenuMob
var btnMenuMob = document.querySelector('#btnMenuMob');
var menuMob = document.querySelector('#menuMob');
// eventos
// menu mob
btnMenuMob.addEventListener('click', function(){
  menuMob.classList.toggle('d-block');
});