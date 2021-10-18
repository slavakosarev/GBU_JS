'use strict';
window.onload = function () {
   /**
    * * 5.5.1
   * * 1. Сохраните в переменную коллекцию с картинками.
   * * 2. Пробегитесь по этой коллекции с помощью цикла или forEach и выведите каждый элемнт в консоль.
    */
   const images = document.getElementsByTagName('img');
   const imgArr = Array.from(images);
   imgArr.forEach(element => console.log(element));

   /**
    * * 5.5.2
   * * 1. Сохраните в переменную коллекцию элементов с классом one. Для получения элементов используйте метод. getElementsByClassName()
   * * 2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.
    */
   const classOne = document.getElementsByClassName('one');
   const arrayOne = Array.from(classOne);
   for (let tagName of arrayOne) {
      console.log(tagName.tagName)
   };

   /**
    * * 5.5.3
   * * 1. Сохраните в переменную коллекцию с тегами h2, используйте метод getElementsByTagName()
   * * 2. Пробегитесь по этой коллекции с помощью цикла и выведите в консоль значение атрибута class, используя свойство className.
    */
   const headerTag = document.getElementsByTagName('h2');
   for (let className of headerTag) {
      console.log(className.getAttribute('class'))
   };
   // или
   let headerClass = document.getElementsByTagName('h2');
   for (let i = 0; i < headerClass.length; i++) {
      console.log(headerClass[i].className);
   }

   /**
    * * 5.5.4
   * * 1. Сохраните в переменную тег div.
   * * 2. Создайте переменную classes, и в нее сохраните значение свойства classList.
   * * 3. C помощью forEach переберите classes и выведите каждый класс в консоль.
   */
   const divClas = document.querySelector('div');
   const classes = divClas.classList;
   classes.forEach(element => console.log(element));

   /**
    * * 5.5.5
   * * 1. Нужно получить этот div.
   * * 2. Затем обратитесь к списку классов и с помощью метода contains() проверьте есть ли класс hidden у этого тега.
    */
   const addDiv = document.querySelector('.product');
   console.log(addDiv.classList.contains('hidden'));

   /**
    * * 5.5.6
   * * 1. Найдите все "карточки" с классом .card.
   * * 2. Проверьте есть ли у карточки класс hidden с помощью метода contains(), и если есть, то удалите с помощью метода remove().
    */
   const cards = document.querySelectorAll('.card');
   cards.forEach(element => {
      if (element.classList.contains('hidden')) {
         element.classList.remove('hidden');
      }
   });

   /**
    * * 5.5.7
   * * 1. Получите все ссылки.
   * * 2. Проверьте, есть ли в ссылке текст "ссылка", и если нет, то добавьте.
    */
   const links = document.querySelectorAll('a');
   links.forEach(element => {
      if (element.textContent !== 'ссылка') {
         element.textContent = 'ссылка';
      }
   });
   // или
   for (let i = 0; i < document.links.length; i++) {
      if (document.links[i].innerText !== 'ссылка') {
         document.links[i].innerText = 'ссылка';
      }
   }

   /**
    * * 5.5.8
   * * 1. Получите все теги b.
   * * 2. С помощью метода contains() из classList, проверьте, есть ли у тега класс .sign, и если нет, то тогда добавьте с помощью метода add().
    */
   const tagB = document.getElementsByTagName('b');
   for (let signClass of tagB) {
      if (!signClass.classList.contains('sign'))
         (signClass.classList.add('sign'))
   };

   /**
    * * 5.5.9
   * * 1. Получите коллекцию тегов i.
   * * 2. Пробегитесь по этой коллекции и с помощью classList.toggle() сделайте, чтобы где класс .green есть, его не стало, а где нету, чтобы появился.
    */
   const tegI = document.getElementsByTagName('i');
   for (let classTog of tegI) {
      (classTog.classList.toggle('green'))
   };

   /**
    * * 5.6.1
   * * 1. Получите кнопку и сохраните ее в переменную.
   * * 2. Назначьте кнопке обработку клика.
   * * 3. У функции-обработчика клика сделайте параметр event
   * * 4. При клике из event.target выведите в консоль: id, имя класса (используйте свойство className), текст на кнопке.
    */
   const button = document.getElementById('one');
   button.addEventListener('click', function (event) {
      console.log(event.target.id, event.target.className, event.target.innerText)
   });

   /**
    * * 5.6.2
   * * 1. Назначьте обработку клика по параграфу, у функции обработчика объявите параметр event.
   * * 2. При клике выведите в консоль event.target.classList
   * * 3. Переберите с помощью forEach event.target.classList и выведите каждый класс в консоль.
    */
   const p = document.querySelector('.first');
   p.addEventListener('click', function (event) {
      console.log(event.target.classList);
      event.target.classList.forEach(element => {
         console.log(element);
      });
   });

   /**
    * * 5.6.3
   * * 1. Сохраните ссылку на div в переменную
   * * 2. Назначьте div'у обработку клика, у функции-обработчика объявите параметр event.
   * * 3. При клике из event.target c помощью getAttribute() получите значение каждого атрибута и выведите в консоль.
    */
   const div = document.getElementById('exampleModal');
   div.addEventListener('click', function (event) {
      console.log(event.target.getAttribute('class'));
      console.log(event.target.getAttribute('id'));
      console.log(event.target.getAttribute('tabindex'));
      console.log(event.target.getAttribute('aria-labelledby'));
      console.log(event.target.getAttribute('aria-hidden'));
   });
   // или
   const divEvent = document.getElementById('exampleModal');
   divEvent.addEventListener('click', function (event) {
      for (let i = 0; i < event.target.attributes.length; i++) {
         console.log(event.target.attributes[i].value);
      }
   });
   /**
    * * 5.6.4
   * * 1. Сохраните в переменную ссылку на .product
   * * 2. Назначьте обработку клика по .product, у функции обработчика объявите параметр event.
   * * 3. Сделайте, чтобы при клике содержимое .product поменялось на:
   * * <div>Другой товар</div>
   * *<div>Другое описание</div>
   * *для этого вышеописанную разметку пишите в виде строки в innerHTML.
    */
   const prodDiv = document.querySelector('.product2');
   prodDiv.addEventListener('click', function (event) {
      event.target.innerHTML = '<div>Другой товар</div><div>Другое описание</div>';
   });

   /**
    * * 5.6.5
   * * Назначьте обработчик клика по ul и при клике выводите в консоль элемент, на котором произошел клик, с помощью event.target, где event - это объект события, передаваемый в функцию-обработчик клика.
    */
   const ul = document.querySelector('ul');
   ul.addEventListener('click', function (event) {
      console.log(event.target);
   });

   /**
    * * 5.7.1
   * * Сделайте с помощью javascript размер шрифта в кнопке 30px, а в textarea сделайте зеленый фон. Используйте свойство style у каждого из элементов.
    */
   const buttons = document.getElementsByTagName('button');
   const btn = buttons[4];
   btn.style.fontSize = '30px';
   const textarea = document.querySelector('textarea');
   textarea.style.background = 'green';
}