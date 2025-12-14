/*
- Числа
const age = 18;

- Строки
const surname = 'Иванов';

- Булевые значения (true/false)
const isAdmin = true;

- undefined (не заданное значение)
const isAdmin = undefined;
let data;

- Пустое значение
let data = null;

- Уникальное неизменимое значение
const admin = Symbol('Admin');

- Работа с большими числами
const big = BigInt(99999999999999999);
*/

let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'строка';
console.log(typeof a);

let isAdmin = false;
console.log(typeof isAdmin);
isAdmin = a > 10;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(typeof d);
console.log(d == null);
console.log(typeof d == null);
console.log(typeof (d == null));