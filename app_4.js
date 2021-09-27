'use strict';

/** 1.1
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

/**
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
