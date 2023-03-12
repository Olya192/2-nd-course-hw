// Задание 1

// function getResult(arr, callback) {

//     return callback(arr)

// }

// function mult(array) {
//     let result = 1;
//     for (let index = 0; index < array.length; index++) {
//         result *= array[index];
//     }

//     return result
// }


// function sum(array) {
//     // let result = 0;
//     // for (let index = 0; index < array.length; index++) {
//     //     result += array[index];
//     // }
// return array.reduce(function (currentSum, currentNumber) {
//     return currentSum + currentNumber
//   }, 0)

//     // return result
// }

// // console.log(getResult([3, 4, 1, 9], mult));
// console.log(getResult([3, 4, 1, 9], sum));



// Задание 2

// function getSortedArrayObj(users) {

// users.sort((a,b)=> a.age - b.age)
// console.log(users);

// }

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ]

// getSortedArrayObj(users);


// Задание 3

// function each(arr, callback) {

//     return callback(arr)

// }

// function reversArr(array) {
//     array = array.reverse();
//     return array
// }



// function toNumberArr(array) {


//     for (let i = 0; i < array.length; i++) {

//         array[i] = Number(array[i])
//         if (isNaN(array[i])) {
//             array.splice(i, 1);
//         }

//     }

//     return array;
// }

// console.log(each( [1, '4', 9, 'two'], reversArr));

// console.log(each( [1, '4', false, 9, 'two'], toNumberArr));




// Задание 4

// const timer = () => {

//     const interval = setInterval(() => {
//         console.log(new Date());
//     }, 1000*3);



//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, 30 * 1000)
// };

// timer();



// Задание 5


// function calling() {
//     console.log('Звоню!')
// };

// function beeps(callback) {
//     setTimeout(() => {
//         console.log('Идут гудки...')
//         callback()
//     }, 1000);

   
// }

// function talk() {
//     console.log('Разговор')
// }

// calling();
// beeps(talk);






