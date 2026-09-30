function task1() {
    let age = +prompt("Введіть свій вік:");
    let dayType = +prompt("Введіть тип дня (1 - будній, 2 - вихідний):");
    let price = 0;

    while (!Number.isInteger(age) || age < 1 || age > 100) {
        age = +prompt("Помилка! Введіть вік від 1 до 100:");
    }
    while (dayType !== 1 && dayType !== 2) {
        alert("Помилка: неправильний тип дня");
        dayType = +prompt("Помилка! Введіть тип дня ще раз (1 - будній, 2 - вихідний):");
    }

    if (dayType === 1) {
        price = 200;
    }
    else {
        price = 250;
    }
    if (age >= 60) {
        price *= 0.6;
    }
    // else if (age >= 18 && age <= 59) {
    //     price = price;
    // }
    else if (age >= 8 && age <= 17) {
        price *= 0.5;
    }
    else if (age <= 7) {
        price = 0;
    }

    console.log(`Вік: ${age}\nДень: ${dayType}\nРезультат: ${price} грн`);
}