$(function name(params) {
  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('.dropdown').toggleClass('dropdown-center');
    $('.header__logo_burger').toggleClass('header__logo--active');
    $('.decor-order__form_label__radio').toggleClass('decor-order__form_label__radio--active');
    $('.delivery').toggleClass('delivery--active');
  })
})