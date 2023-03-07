$(function name(params) {
  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('.dropdown').toggleClass('dropdown-center');
  })
})