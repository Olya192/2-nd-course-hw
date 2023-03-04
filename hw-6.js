// Задание №1

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
//     if (numbs[i] === 10) break;
// }




// Задание №2

// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs.indexOf(4));



// Задание №3

// let numbs = [1, 3, 5, 10, 20];
// numbs = numbs.join(' ');
// console.log(numbs);




// Задание №4

// const numbs = [];

// for (let i = 0; i < 3; i++) {
//     const miniNumbs = [];

//     for (let j = 0; j < 3; j++) {
//         miniNumbs.push(1);
//     }

//     numbs.push(miniNumbs);
// }
// console.log(numbs);




// Задание №5

// const numbs = [1, 1, 1];

// for (let i = 0; i < 3; i++) {
//     numbs.push(2);
// }

// console.log(numbs);




// Задание №6

// const numbs = [9, 8, 7, 'a', 6, 5];
// numbs.sort();
// numbs.pop();
// console.log(numbs);



// Задание №7

// const numbs = [9, 8, 7, 6, 5];

// let user = Number(prompt('введите число'));

// let comparison = numbs.indexOf(user);

// if (comparison < 0) {
//     console.log('число не найдено');
// } else {
//     console.log('число найдено');
// }




// Задание №8

// const letters = 'abcdef';
// let text = letters.split('');
// text.reverse();
// let textRev = text.join('');
// console.log(textRev);



// Задание №9

// let numbs =  [[1, 2, 3,],[4, 5, 6]];

// const result = [...numbs[0], ...numbs[1]];

// console.log(result);




// Задание №10

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {

//     if (i + 1 < numbs.length) {
//         console.log(numbs[i] + numbs[i + 1]);
//     } else if (i + 1 === numbs.length) {
//         break;
//     }
// }
