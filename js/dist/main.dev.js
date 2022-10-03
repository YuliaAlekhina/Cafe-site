"use strict";

/*---Карусель------*/
$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    //nav:true,
    //dots:false,
    // startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
/*----Вкладки-----------------*/

$(function () {
  $('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});
/*----Корзина----*/

$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'menu-wrap__item',
    buttonAddToBasket: 'card__button',
    productPrice: 'card__price-number',
    productSize: 'product__size-element',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'cart-min',
    countryCode: '+7',
    smartBasketCurrency: '$',
    smartBasketMinIconPath: '../img/menu/basket.svg',
    agreement: {
      isRequired: true,
      isChecked: true,
      isLink: 'https://artstranger.ru/privacy.html'
    },
    nameIsRequired: false
  });
});
/*----Аккордион------*/

$(document).ready(function () {
  $('.block-faq__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});