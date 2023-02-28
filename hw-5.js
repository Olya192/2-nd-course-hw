// // Задача №1

// const compare = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(compare(4, 6))




// Задача №2

// const parity = (a) => {
//     let b = a % 2;
//     if (b === 0) {
//         console.log('Число четное');
//     } else {
//         console.log('Число нечетное');
//     }
// }

// parity(8);




// Задача №3.1

// function square(a) {
//     let b = a ** 2;
//     console.log(b);
// }

// square(6);




// Задача №3.2

// function square(a) {
//     return a ** 2;
// }

// console.log(square(4));




// Задача №4

// const ageHello = () => {

//     let ageAnswer = prompt('Введите сколько вам лет');

//     if (ageAnswer < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (ageAnswer === 0 || ageAnswer < 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }

// }

// ageHello();




// Задача №5

// function definition() {

//     let param1 = Number(prompt('Введите 1 число'));
//     let param2 = Number(prompt('Введите 2 число'));


//     if (isNaN(param1) || isNaN(param2)) {
//         console.log('Одно или оба значения не являются числом');
//     } else {
//         console.log(param1 * param2);
//     }

// }

// definition();




// Задача №6

// function square() {

//     let n = Number(prompt('Введите число n'));

//     n = n ** 2

//     if (isNaN(n)) {
//         console.log('Переданный параметр не является числом');
//     } else {
//         console.log(`n в кубе равняется ${n}`);
//     }


// }

// square();

