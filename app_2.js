'use strict';

/** 1.1.
   ** Инкремент ++a в префиксной форме, сначала увеличивает значение на единицу, потом присваевает переменной, поэтому в c присваивается 2.
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

/** 1.2.
   ** Инкремент b++ в постфиксной форме, сначала присваивает значение переменной, потом увеличивает значение, поэтому в d попадет 1.
*/
d = b++;
alert(d); //ответ: 1

/** 1.3.
   ** Инкремент ++a в префиксной форме, сначала увеличивает значение на единицу, в н.м. а=2 т.к. мы a уже увеличивали на 1, после очередной итерации a=3, прибавляем 2. Полученное значение присваиваем переменной, c=5.
*/
c = 2 + ++a;
alert(c); //ответ: 5

/** 1.4.
   ** Инкремент b++ в постфиксной форме, после предыдущей интерации b=2, сначала считаем 2+2, резудьтат присваиваем d=4. 
   ** Переменная a=3 после двух итераций.
   ** Переменная b=3 после двух итераций.
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3


/** 2.
   ** В скобках мы видим короткую запись операции умножения и присваивания. 
   ** Сначала вычисляется 2*2, результат присваиваем a, теперь a=4. 
   ** После прибавляем 1 и полученный результат присваиваем иксу, x=5. 
*/
let a = 2; //4
let x = 1 + (a *= 2); //5


/** 3.
   ** В switch передаем постоянное значение true. 
   ** В case прописываем условия, а потом инструкции, что делать если условие истинно. 
   ** На мой взгляд, конструкция switch это самое простое и оптимальное решение. Можно было бы повозиться с ветвлением, но врядли получится так лаконично.
*/
let a = -5;
let b = 7;

switch (true) {
   case a >= 0 && b >= 0:
      console.log(a - b);
      break;
   case a < 0 && b < 0:
      console.log(a * b);
      break;
   case a > 0 && b < 0:
      console.log(a + b);
      break;
   case a < 0 && b > 0:
      console.log(a + b);
      break;
}


/** 4.
   ** Создаем функцию, даем ей название согласно тому, что она будет выполнять. 
   ** Указываем два парметра. В теле функции возвращаем арифметический результат. 
   ** Вызываем функцию с заданными числовыми аргументами.
*/
function sumNum(a, b) {
   return a + b;
}
sumNum(5, 7);

function subtracNum(a, b) {
   return a - b;
}
subtracNum(5, 7);

function divideNum(a, b) {
   return a / b;
}
divideNum(5, 7);

function multiplyNum(a, b) {
   return a * b;
}
multiplyNum(5, 7);


/** 5.
   ** function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
   ** В switch передаем параметр operation, в case название функции в строке. 
   ** В инструкциях возвращаем функции из предыдущего задания с новыми аргументами.
*/
function mathOperation(arg1, arg2, operation) {

   switch (operation) {
      case 'sumNum':
         return sumNum(arg1, arg2);
      case 'subtracNum':
         return subtracNum(arg1, arg2);
      case 'divideNum':
         return divideNum(arg1, arg2);
      case 'multiplyNum':
         return multiplyNum(arg1, arg2);
   }
}

mathOperation(3, 8, 'sumNum')
mathOperation(3, 8, 'subtracNum')
mathOperation(3, 8, 'divideNum')
mathOperation(3, 8, 'multiplyNum')

/** 6.
   ** Запрашиваем у пользователя сумму. Поученный результат присваиваем переменной rub. С помощью alert выводим сообщение. В сообщение добавляем шаблонные литералы перемнной rub и вызываем функцию с параметрами. 
   ** Функция getLastCharacter извлекает последний символ из полученной строки. 
   ** Подробнее о функии: 
   ** в премнную str копируем значение rub.
   ** с помощью StringConstructor фиксируем, что переменная имеет строковый тип, чтобы избежать неявного преведения вчисло, с помощь метода .slice извлекаем последний символ и перезаписываем его в переменную str.
   ** с помощь ветвления проверяем на совпадение. Первая проверка на 1 - любое число, где последняя цифра 1, должно именть окончание "рубль". Если это не 1, выполняем следующую проверку. Любое число, где последняя цифра 2, 3 или 4, должно иметь окончание "рубля". Если совпадений нет, выполняем последнюю проверку. Помещаем в switch оставшиеся варианты в отдельные кейсы, без прерывания. Любое собпадение вернет нам "рублей".
   ** @param {string}
   ** @returns {string}
*/
let rub = prompt('Введите сумму для зачисления на счёт: ');

function getLastCharacter() {

   let str = rub;
   str = (String(str.slice(-1)));
   if (str === '1') {
      return 'рубль';
   }
   else
      if (str === '2' || str === '3' || str === '4') {
         return 'рубля';
      }
      else {

         switch (str) {
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
               return 'рублей'
         }
      }
}
alert(`Ваша сумма ${rub} ${getLastCharacter('рубль', 'рублей', 'рубля')} успешно зачислена.`);

/** Дополнительно
 * * * Функция Рекурсия - когда функция вызывает саму себя.
 * @param {*} x 
 * @param {*} n 
 * @returns {number} 
 */
function pow(x, n) {
   if (n == 1) {
      return x;
   } else {
      return x * pow(x, n - 1);
   }
}
console.log(pow(2, 3)); //8

/**
 * * Рекурсия с Фибоначчи(начиная с двух начальных значений, каждое число равно сумме двух предыдущих.)
 * @param {number} n 
 * @param {number} prev1 
 * @param {number} prev2 
 * @returns {string}
 */
function fibonacci(n, prev1, prev2) {
   let current = prev1 + prev2;
   let fibonacci_string = current + " ";
   if (n > 1)
      fibonacci_string += fibonacci(n - 1, current, prev1);
   return fibonacci_string;
}
console.log(fibonacci(15, 1, 0));

// Или так:
function getFibonacci(n) {
   if (n === 0) {
      return 0;
   }
   if (n === 1) {
      return 1;
   }
   else {
      return getFibonacci(n - 1) + getFibonacci(n - 2);
   }
}
let result = getFibonacci(8); //21 
console.log(result); // 21

/**
 * * Функция(рекурсия) определяет факториал числа.
 * * Факториал числа n — это произведение натуральных чисел от 1 до n:
 * * 0! = 1
 * * 1! = 1*1 = 1 (0!*1)
 * * 2! = 1*2 = 2 (1!*2)
 * * 3! = 1*2*3 = 6 (2!*3)
 * * 4! = 1*2*3*4 = 24 (3!*4)
 * * 5! = 1*2*3*4*5 = 120 (!4*5)
 * @param {number} n 
 * @returns {number}
 */
function getFactorial(n) {
   if (n === 1) {
      return 1;
   }
   else {

      return n * getFactorial(n - 1);
   }
}
let result = getFactorial(4);
console.log(result); // 24

/**
 * * Стрелочные функции с рекурсией
 * @param {*} x 
 * @returns {number}
 */
let f = x => x ? x * f(x - 1) : 1; // Факториал
let f = x => x > 1 ? f(x - 1) + f(x - 2) : x; // Фибоначчи