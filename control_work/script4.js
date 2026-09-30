function task4() {
    let carsCount = +prompt("Введіть кількість автомобілів:");
    let hoursCount = 0;
    let carType = 0;
    let carsCorrectCount = 0;
    let carsElectroCount = 0;
    let sum = 0;
    let maxPrice = 0;
    let price = 0;

    while (!Number.isInteger(carsCount) || carsCount < 1 || carsCount > 7) {
        carsCount = +prompt("Помилка! Введіть кількість автомобілів ще раз:");
    }
    
    for (let i = 1; i <= carsCount; i++) {
        hoursCount = +prompt(`Введіть кількість годин стоянки для автомобіля № ${i}:`)
        if (hoursCount === 0) {
            break;
        }
        else if (hoursCount < 0 || hoursCount > 12) {
            continue;
        }

        carType = +prompt("Введіть тип автомобіля (1 - звичайний, 2 - електромобіль):")
        if (!Number.isInteger(carType) || (carType !== 1 && carType !== 2)) {
           alert(`Помилка! Невірний тип автомобіля!`);
           continue;
        }
        if (carType === 1) {
            price = hoursCount * 40;
        }
        else {
            price = hoursCount * 30;
            carsElectroCount++;
        }

        if (hoursCount > 5) {
            price *= 0.8;
        }

        if (price > maxPrice) {
            maxPrice = price;
        }

        sum += price;
        carsCorrectCount++;
    }
    console.log(`Кількість правильно оброблених автомобілів: ${carsCorrectCount}\nКількість електромобілів: ${carsElectroCount}\nЗагальна сума оплати: ${sum}\nНайбільша оплата за один автомобіль: ${maxPrice}`)
}