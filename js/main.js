'use strict'
const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function (elem) {
    elem.addEventListener('click', open);
});

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn--active');
    });
    target.classList.add('choose__color-btn--active');

    contentItem.forEach(function (item) {
        item.classList.remove('content-item__active');
    });

    contentActive.forEach(function (item) {
        item.classList.toggle('content-item__active');
    });
}
  // JavaScript для плавного перехода
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  // Функция для прокрутки к элементу с указанным идентификатором
function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Обработчик события клика на кнопке
  document.getElementById('scrollButton').addEventListener('click', function(){
    scrollToElement('buyButton')
  })
  // Обработчик события клика на элементе 'buyButton'
//   document.getElementById('buyButton').addEventListener('click', function() {
//     scrollToElement('scrollButton');
//   });
  
    const openPopBuy =  document.getElementById('buyButton');
    const closePopBuy = document.getElementById('closePopupButton')
    const popWindow = document.getElementById('popup')
    openPopBuy.addEventListener('click', function(){
        popup.style.display = 'block'
    })
    closePopBuy.addEventListener('click', function(){
        popup.style.display = 'none'
    })