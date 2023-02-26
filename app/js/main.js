$(function name(params) {
  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__logo').toggleClass('header__logo--active');
    $('.burger').toggleClass('burger--active');
    $('.header__top').toggleClass('header__top--active'); 
    $('.dropdown').toggleClass('dropdown-center');
    $('.header__bottom').toggleClass('header__bottom--active');
  })
})