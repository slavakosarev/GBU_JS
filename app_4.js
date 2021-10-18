'use strict';
window.onload = function () {
   /** 1.
    * * Функция разбивает число по разрядам и возвращает объект с записанными разрядами числа.
    * * Метод Number.isInteger() определяет, является ли тип переданного значения «числом», а само число — целым значением. Метод возвращает true, если передаваемое значение целое число, в противном случае возвращаемое значение false.
    * * Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
    * @param {*} num Число в диапазоне [0 .. 999], которое разобьется на разряды
    * @returns {*} Объект с разрядами числа или пустой объект в случае ошибки
    */
   function getDigitOfNumber(num) {
      if (!Number.isInteger(num) || num < 0 || num > 999) {
         console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
         return {};
      }
      return {
         units: num % 10, // остаток от деления = 3, разряд - единицы.
         tens: Math.floor(num / 10) % 10, // остаток от деления = 2.3, округление в меньшую сторону = 2, разряд десятки.
         hundereds: Math.floor(num / 100), // округление в меньшую сторону = 1, разряд сотни.
      }
   }
   console.log(getDigitOfNumber(123));

   /** 2.1
    * * Конструктор без наследования по типу ES5.
    * @param {*} name
    * @param {*} price
   */
   function Product(name, price) {
      this.name = name;
      this.price = price;
   }
   Product.prototype.make25PercentDiscount = function () {
      this.price = this.price * 0.75;
   }
   let prod1 = new Product('Prod1', '500');
   prod1.make25PercentDiscount();
   console.log(prod1);
   let prod2 = new Product('Prod2', '1000');
   prod2.make25PercentDiscount();
   console.log(prod2);

   /**
    * * Конструктор без наследования по типу ES6.
    * @param {*} name
    * @param {*} price
    */
   class Product {
      constructor(name, price) {
         this.name = name;
         this.price = price;
      }
      make25PercentDiscount() {
         this.price = this.price * 0.75;
      }
   }
   let prod1 = new Product('Prod1', '500');
   prod1.make25PercentDiscount();
   console.log(prod1);
   let prod2 = new Product('Prod2', '1000');
   prod2.make25PercentDiscount();
   console.log(prod2);

   /** 2.2
    * * Конструктор c наследованием по типу ES5.
    * @param {*} autor 
    * @param {*} text 
    * @param {*} date 
    * @param {*} highlighted 
   */
   function Post(autor, text, date) {
      this.autor = autor;
      this.text = text;
      this.date = date;
   }
   Post.prototype.edit = function () {
      this.text = ('Some text ' + this.text);
   }
   function AttachedPost(autor, text, date, _highlighted) {
      Post.call(this, autor, text, date);
      this.highlighted = false;
   }
   AttachedPost.prototype = Object.create(Post.prototype);
   AttachedPost.prototype.constructor = AttachedPost;
   AttachedPost.prototype.makeTextHighlighted = function () {
      this.highlighted = true;
   }
   let post1 = new Post('Jhon Doe', 'text1', '31.12.2020');
   post1.edit();
   console.log(post1);
   let post2 = new AttachedPost('Jhon Smith', 'text2', '01.01.2021', 'false');
   post2.edit();
   post2.makeTextHighlighted();
   console.log(post2);

   /**
    * * Конструктор c наследованием по типу ES6.
    * @param {*} autor
    * @param {*} text
    * @param {*} date
    * @param {*} highlighted
    */
   class Post {
      constructor(autor, text, date) {
         this.autor = autor;
         this.text = text;
         this.date = date;
      }
      edit() {
         this.text = ('Some text ' + this.text);
      }
   }
   class AttachedPost extends Post {
      constructor(autor, text, date, _highlighted) {
         super(autor, text, date);
         this.highlighted = false;
      }
      makeTextHighlighted() {
         this.highlighted = true;
      }
   }
   let post1 = new Post('Jhon Doe', 'text1', '31.12.2020');
   post1.edit();
   console.log(post1);
   let post2 = new AttachedPost('Jhon Smith', 'text2', '01.01.2021', 'false');
   post2.edit();
   post2.makeTextHighlighted();
   console.log(post2);
}