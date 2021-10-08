'use strict';

/** 1.
   ** Создаем переменную с счетчиком. Итерации ограничиваем пока переменная не станет равной 10.
   ** В теле цикла for создаем конструкцию с ветвлением.
   ** Первое условие, если num равен 0. Выводим в консоль.
   ** Второе условие, если num по модулю не равен 0. Выводим в консоль.
   ** Иначе num - четное число.
   ** @param {number} num;
*/
for (let num = 0; num <= 10; num++) {

   if (num == 0) {
      console.log(`${num} - это ноль`)
   }
   else if (num % 2 != 0) {
      console.log(`${num} - нечетное число`)
   }
   else {
      console.log(`${num} - четное число`)
   }

}

/** 2. 
 ** Mетод Object.values(), чтобы вернуть массив значений свойств объекта.
 ** Дальше обращаемся к индексу массива для вызова значения. 
 ** К свойсвам объектов обращаемся по имени, не придумал как применить Object.values глубже по иерархии.
 ** @param {Object [string, number]} post;
 ** @param {Array} arr;
*/
const post = {
   author: "John", //вывести этот текст
   postId: 23,
   comments: [
      {
         userId: 10,
         userName: "Alex",
         text: "lorem ipsum",
         rating: {
            likes: 10,
            dislikes: 2 //вывести это число
         }
      },
      {
         userId: 5, //вывести это число
         userName: "Jane",
         text: "lorem ipsum 2", //вывести этот текст
         rating: {
            likes: 3,
            dislikes: 1
         }
      },
   ]
};
let arr = Object.values(post);
console.log(arr[0]);
console.log(arr[2][0].rating.dislikes);
console.log(arr[2][1].userId);
console.log(arr[2][1].text);

/** 3.
   ** Метод forEach вызывает функцию для каждого элемента. Ничего не возвращает. 
   ** В функцию передадим первый параметр obj. В obj последовательно будут попадать все элементы массива. 
   ** При выводе в консоль обращаемся к каждому элементу массива по имени свойства внутри него и вычисяем значение за минусом 15%.
   **Для этой задачи решил применить еще один метод - map. 
   ** Метод map позволяет применить заданную функцию для каждого элемента массива. При этом метод не изменяет исходный массив, а возвращает новый. 
   ** Логика таже, что и в предыдущем методе, только здесь мы возвращаем полученный результат и присваиваем его переменной riceWithDiscount.
   ** @param {Array} products;
   ** @param {number []} priceWithDiscount;
*/
const products = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price: 1000,
   },
];
products.forEach(function (obj) {
   console.log(obj.price * 0.85)
});
let priceWithDiscount = products.map(function (obj) {
   return obj.price * 0.85;
});
console.log(priceWithDiscount);

/** 4. 
   ** 4.1  Вызываем метод filter() на массиве products, состоящим из объектов и передаём функцию, которая отрабатывает на каждом элементе массива. 
   ** Внутри функции проверяем, есть ли значение photos у каждого элемента. Если да, то функция отдаёт true. 
   ** Дальше выполняем вторую проверку, по длине массива, если > 0, то получаем второе true и возвращаем результат подходящий по всем условиям. 
   ** Присваиваем результрат фильтрации в переменную productsFilter и выводим в консоль.
   ** 4.2 Метод сортировки вместо строкового может использовать числовое сравнение. 
   ** Функция сравнения будет вычитать a - b, а результат отсортирует по возрастанию. Выводим в консоль массив. 
   *! Вычетание ведется справа налево, т.е. браузер в a кладет второй по очереди элемент.
   ** @param {Array} products;
   ** @param {Array} productsFilter;
*/
const products = [
   {
      id: 3,
      price: 127,
      photos: [
         "1.jpg",
         "2.jpg",
      ]
   },
   {
      id: 5,
      price: 499,
      photos: []
   },
   {
      id: 10,
      price: 26,
      photos: [
         "3.jpg"
      ]
   },
   {
      id: 8,
      price: 78,
   },
]
let productsFilter = products.filter(function (product) {
   return product.photos !== undefined && product.photos.length > 0;
});
console.log(productsFilter);
products.sort(function (a, b) {
   return a.price - b.price;
});
console.log(products);

/** 5.
 * * Вывод чисел от 0 до 9 с помощью цикла for, не используя тело цикла.
*/
for (let x = 0; x < 10; console.log(x++));

/** 6.
   ** Нарисовать горку с помощью console.log (используя цикл for), у горки должно быть 20 рядов.
*/
for (let x = 'x'; x.length <= 20; x += 'x') {
   console.log(x);
}
for (let x = 0; x <= 20; x++) {
   for (let y = 0; y <= x; y = y + 1) {
      document.write('x');
   }
   document.write("<br>");
}