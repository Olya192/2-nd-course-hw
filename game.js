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