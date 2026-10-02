// function hello() {
//     alert("Hello, World!");
// }

// hello();
// hello();

// function showInfo(name, price = "Немає у наявності", count) {
//     console.log(`Магазин у Сані\nГрафік роботи: 9:00 - 18:00\nТелефон: +380673254512\nТовар: ${name}\nЦіна: ${price}`);
// }

// showInfo("Зелений чай", 100);
// showInfo("Зелений чай");

// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma;
//     if (suma >= 5000) {
//         discount = 0.1;
//     } else {
//         discount = 0;
//     }
//     totalSuma = suma * (1 - discount);
//     return totalSuma;
// }

// let total = calculateTotal(2500, 3);
// console.log(total);

// function showInfo(name, price = "Немає у наявності", count) {
//     console.log(`Магазин у Сані\nГрафік роботи: 9:00 - 18:00\nТелефон: +380673254512\nТовар: ${name}\nЦіна: ${price}\nКількість: ${count}`);
// }

// function getProductTotalPrice(price, count) {
//     return price * count;
// }

// function getDiscountPercentage(total) {
//     if (total >= 10000) {
//         return 15;
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else if (total >= 2000) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }

// function getDiscountValue(total, percent) {
//     return total * (percent / 100);
// }

// function getFinalPrice(total, discount) {
//     return total - discount;
// }

// let productName = prompt("Введіть назву товару:");
// let productPrice = +prompt("Введіть ціну товару:");
// let productCount = +prompt("Введіть кількість товару:");

// let productTotal = getProductTotalPrice(productPrice, productCount);
// let discountPercent = getDiscountPercentage(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);

// showInfo(productName, productPrice, productCount);

// console.log(`Товар "${productName}"\nЦіна: ${productPrice} грн\nКількість: ${productCount}\nСума: ${productTotal} грн\nЗнижка: ${discountPercent}%\nСума знижки: ${discountValue} грн\nДо сплати: ${finalPrice} грн`);

//============================================================================================================================

// let ticketPrice = +prompt("Введіть ціну квитка:");
// let ticketCount = +prompt("Введіть кількість квитків:");

// function calculateTickets(price, count) {
//     let total = price * count;
//     return total;
// }

// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 0.15;
//     }
//     else if (total >= 1000) {
//         return 0.1;
//     }
//     else if (total >= 500) {
//         return 0.05;
//     }
//     else {
//         return 0;
//     }
// }

// function calculateTicketDiscount(total, percent) {
//     return total * percent;
// }

// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }

// let totalPrice = calculateTickets(ticketPrice, ticketCount);
// let discount = getTicketDiscount(totalPrice);
// let discountPrice = calculateTicketDiscount(totalPrice, discount);
// let finalPrice = calculateTicketFinalPrice(totalPrice, discountPrice);

// console.log(`Загальна вартість квитків: ${totalPrice} грн`);
// console.log(`Знижка: ${discountPrice} грн`);
// console.log(`Фінальна вартість квитків: ${finalPrice} грн`);

//============================================================================================================================

let login = "";
let password = "";
let userLogin = "";
let userPassword = "";

function register(loginEntered, passwordEntered) {
    login = loginEntered;
    password = passwordEntered;
    alert("Реєстрація успішна!");
}

function loginUser(loginEntered, passwordEntered) {
    let attempts = 3;
    while (attempts > 0) {
        if (loginEntered === login && passwordEntered === password) {
            alert("Вхід успішний!");
            break;
        } 
        else if (loginEntered !== login && passwordEntered === password) {
            attempts--;
            alert("Невірний логін.");
            break;
        }
        else if (loginEntered === login && passwordEntered !== password) {
            attempts--;
            alert("Невірний пароль.");
            break;
        }
        else {
            attempts--;
            alert("Невірний логін та пароль.");
            break;
        }
    }
}

while (true) {
    let action = +prompt("Оберіть дію (1 - реєстрація, 2 - вхід, 0 - вихід):");

    if (action === 1) {
        userLogin = prompt("Введіть логін:");
        if (userLogin === null) {
            alert("Скасовано.");
            continue;
        }
        userPassword = prompt("Введіть пароль:");
        if (userPassword === null) {
            alert("Скасовано.");
            continue;
        }
        if (userLogin.trim() === "" || userPassword.trim() === "") {
            alert("Помилка. Логін та пароль не можуть бути порожніми!");
        } else {
            register(userLogin, userPassword);
        }
    }
    else if (action === 2) {
        if (login === "" || password === "") {
            alert("Помилка. Спочатку потрібно зареєструватися!");
            continue;
        }
        userLogin = prompt("Введіть логін:");
        if (userLogin === null) {
            alert("Скасовано.");
            continue;
        }
        userPassword = prompt("Введіть пароль:");
        if (userPassword === null) {
            alert("Скасовано.");
            continue;
        }
        loginUser(userLogin, userPassword);
    }
    else if (action === 0) {
        alert("Вихід з програми.");
        break;
    }
    else {
        alert("Невірна дія. Спробуйте ще раз.");
    }
}