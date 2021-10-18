'use strict';
window.onload = function () {
   /**
    * * 5.1.1 Используя поиск по id, получите ссылку с текстом link4 и выведите ее в консоль.
    */
   let linkId = document.getElementById('four');
   console.log(four);

   /**
    * * 5.1.2 Используя поиск по имени класса, получите все элементы с классом .one и выведите их в консоль.
    */
   let className = document.getElementsByClassName('one');
   console.log(className);

   /**
    * * 5.1.3 Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с классом .card-link, которые находятся в card-body и выведите их в консоль.
    */
   let selectParent = document.getElementsByTagName('div');
   let selectLink = selectParent[1].querySelectorAll('a.card-link');
   console.log(selectLink);
   // или так:
   let select = document.querySelectorAll('div a.card-link');
   console.log(select);

   /**
    * * 5.1.4 Используя поиск по селектору (метод querySelector) найдите div с атрибутом aria-valuenow="50" и выведите его в консоль.
    */
   let selectDiv = document.querySelector('.progress-bar[aria-valuenow="50"]');
   console.log(selectDiv);

   /**
    * * 5.1.5 Выведите содержимое тега title в консоль.
    */
   console.log(document.title);

   /**
    * * 5.2.1 Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с классом .media-body.
    */
   let childElem = document.querySelector('.mt-0');
   let parentElem = childElem.parentNode;
   console.log(parentElem);

   /**
    * * 5.2.2 Добавьте в div c помощью appendChild следующую разметку: <h3>hello world</h3>
    */
   let makeDiv = document.createElement('div');
   makeDiv.classList.add('552');
   let getElem = document.querySelector('.empty');
   let parentDiv = getElem.parentNode;
   parentDiv.insertBefore(makeDiv, getElem);
   let makeHead = document.createElement('h3');
   makeHead.innerText = 'hello world';
   makeDiv.appendChild(makeHead);
   console.log(makeDiv);

   /**
    * * 5.2.3 Найдите элемент с классом .btn-outline-warning и удалите его. Аналогичным образом удалите элемент с классом .btn-outline-dark.
    * * 5.2.4 Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка".
    */
   let delElem = document.querySelector('.btn-outline-warning');
   delElem.remove();
   let delElem2 = document.querySelector('.btn-outline-dark');
   delElem2.remove();
   let btnText = document.querySelector('.btn-info');
   btnText.innerText = 'Кнопка';
   console.log(btnText);

   /**
    * * 5.3.1 Найдите тег ul и добавьте ему класс .one.
    */
   let ulClass = document.querySelector('ul');
   ulClass.classList.add('one');
   console.log(ulClass);

   /**
    * * 5.3.2 Найдите элемент с классом .nav-link и используя метод toggle из свойства classList у элемента и удалите(и добавьте) класс .active.
    */
   let delAddClass = document.querySelector('.nav-link');
   delAddClass.classList.toggle('active');
   delAddClass.classList.toggle('active');
   console.log(delAddClass);

   /**
    * * 5.3.3 Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList у элемента, и метод remove().
    * * 5.3.4 Добавьте в div с классом .menu следующую разметку: <a href="#">link</a> используя метод insertAdjacentHTML.
    */
   let delClass = document.querySelector('.dropdown-menu');
   delClass.classList.remove('dropdown-menu');
   console.log(delClass);
   let elemHTML = '<a href="#">link</a>';
   delClass.insertAdjacentHTML("beforeend", elemHTML);
   console.log(delClass);

   /**
    * * 5.3.5 Выведите в консоль значение атрибутов data - dismiss и aria - label с помощью метода getAttribute.
    */
   let attribute = document.querySelector('.close');
   console.log(attribute.getAttribute('data-dismiss'));
   console.log(attribute.getAttribute('aria-label'));

   /**
    * * 5.3.6 Добавьте заголовку атрибут data-one="один" и атрибут     data-two="два" с помощью метода setAttribute.
    */
   let headerAtt = document.querySelector('h1');
   headerAtt.setAttribute('data-one', 'один');
   headerAtt.setAttribute('data-two', 'два');
   console.log(headerAtt);

   /**
    * * 5.3.7 Найдите заголовок с id="title" и замените значение id на что-то другое.
    */
   let headerId = document.getElementById('title')
   headerId.id = 'subtitle';
   console.log(headerId);

   /**
    * * 5.4.1 Отследите когда все теги будут добавлены на страницу (событие DOMContentLoaded) и выведите alert'ом сообщение: "все теги добавлены на страницу".
    */
   document.addEventListener('DOMContentLoaded', function () {
      alert('все теги добавлены на страницу!');
   });

   /**
    * * 5.4.2 Дождитесь когда все картинки загрузятся (событие load) и   покажите с помощью alert сообщение: "все картинки загружены".
    */
   window.addEventListener('load', function () {
      alert('все картинки загружены!');
   });

   /**
    * * 5.4.3 Сделайте, чтобы по клику по кнопке с классом .btn появлялся alert('клик').
    */
   let btn = document.getElementsByClassName('btn');
   let click = btn[9];
   click.addEventListener('click', function () {
      alert('клик');
   });

   /**
    * * 5.4.4 Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "вы навели на textarea".
    */
   let textArea = document.querySelector('textarea');
   textArea.addEventListener('mouseover', function (_event) {
      console.log('вы навели на text area');
   });
}