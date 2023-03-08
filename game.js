function gameSeason() {

    let month = Number(prompt('Введите номер месяца'));

    if (month === 12 || month <= 2 && month > 0) {
        alert('Зима');
    } else if (month > 2 && month <= 5) {
        alert('Весна');
    } else if (month > 5 && month <= 8) {
        alert('Лето');
    } else if (month > 8 && month <= 11) {
        alert('Осень');
    } else {
        alert('Такого месяца не существует');
    }

}


function gameWords() {

    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    words = words.map((word) => word.toUpperCase());
    alert(words);

    let userAnswerOne = prompt('Введите первое слово').toUpperCase();
    let userAnswerTwo = prompt('Введите последнее слово').toUpperCase();


    if (userAnswerOne === words[0] && userAnswerTwo === words[6]) {
        alert('Победа!!!');
    } else if (userAnswerOne === words[0] || userAnswerTwo === words[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Ответ не верный. Попробуйте еще раз.');
    }

}