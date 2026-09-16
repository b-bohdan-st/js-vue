// let num = 1

// while(num <= 5) {
//     console.log(num);
//     num++;
// }

// let userNumber = +prompt("Enter your name:");
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt("Incorrect number! Enter your number again:");
//     console.log("Error!)");
// }

// console.log(Number("7"));
// console.log(Number("hello"));

// let age = +prompt("Enter your age:");
// while (Number.isNaN(age) || age < 0 || age >= 100) {
//     age = +prompt("Incorrect age! Enter your age again:");
// }

// console.log(age);

// const correctPin = 1234;

// let userPin = +prompt("Enter a valid pin");
// let attempts = 1;

// while (correctPin !== userPin && attempts < 3) {
//     userPin = +prompt("Error. Enter a valid pin");
//     attempts++;
// }

// if (userPin === correctPin) {
//     console.log("Welcome");
// } else {
//     console.log("Заблоковано");
// }

// const correctPin = 1234;
// let attempts = 1;
// while (attempts <= 3) {
//     let userPin = +prompt("Enter a valid pin");
//     if (userPin === correctPin) {
//         console.log("Welcome");
//         break;
//     } else {
//         console.log("Error. Enter a valid pin");
//         attempts++;
//     }
// }

// let menuChoice;
// do {
//     menuChoice = prompt(`Оберіть опцію:\n
//         1 = переглянути профіль\n
//         2 = налаштування\n
//         3 = статистика\n
//         0 = вихід`);
//     if (menuChoice === "1") {
//         console.log("Перегляд профілю");
//     } else if (menuChoice === "2") {
//         console.log("Налаштування");
//     } else if (menuChoice === "3") {
//         console.log("Статистика");
//     } else if (menuChoice === "0") {
//         console.log("Вихід з меню");
//     } else {
//         console.log("Невірний вибір. Спробуйте ще раз.");
//     }
// } while (menuChoice !== "0");

//___________________________________________________________
// let menuChoice;
// do {
//     menuChoice = prompt(`Оберіть опцію:\n
//         1 = переглянути профіль\n
//         2 = налаштування\n
//         3 = статистика\n
//         0 = вихід`);
//     switch (menuChoice) {
//         case "1":
//             console.log("Перегляд профілю");
//             break;
//         case "2":
//             console.log("Налаштування");
//             break;
//         case "3":
//             console.log("Статистика");
//             break;
//         case "0":
//             console.log("Вихід з меню");
//             break;
//         default:
//             console.log("Невірний вибір. Спробуйте ще раз.");
//             break;
//     }
// } while (menuChoice !== "0");
//___________________________________________________________

// let count = 1;
// let sum = 0;
// while (count <= 5) {
//     let mark = +prompt("Введіть оцінку від 1 до 12:");
//     if (Number.isNaN(mark) || !Number.isInteger(mark) || mark < 1 || mark > 12) {
//         alert("Помилка! Оцінка повинна бути від 1 до 12!");
        
//     }
//     sum += mark;
//     count++;
// }
// avg = sum / count;
// alert(`Середня оцінка: ${avg}. Сума оцінок: ${sum}`);

// let questionsNumber = 1, score = 0;
// while (questionsNumber <= 5) {
//     let question = "", correctAnswer = "";
//     switch (questionsNumber) {
//         case 1:
//             question = "Ключове слово для створення змінної";
//             correctAnswer = "let";
//             break;
//         case 2:
//             question = "Оператор and";
//             correctAnswer = "&&";
//             break;
//         case 3:
//             question = "Оператор or";
//             correctAnswer = "||";
//             break;
//         case 4:
//             question = "Як зупинити цикл?";
//             correctAnswer = "break";
//             break;
//         case 5:
//             question = "Строга рівність позначається..."
//             correctAnswer = "==="
//             break;
//     }
//     answer = prompt(`Запитання № ${questionsNumber} із 5.\n
//         ${question}. Ваша відповідь:`)
//     if (answer === "") {
//         alert("Відповідь не може бути пуста")
//         continue;
//     }
//     if (answer === correctAnswer) {
//         alert("Вірно!")
//         score++;
//         questionsNumber++;
//         console.log(`Відповідь на питання № ${questionsNumber} вірна`)
//     }
//     else {
//         alert("Не вірно!")
//         questionsNumber++;
//         console.log(`Відповідь на питання № ${questionsNumber} не вірна`)
//     }
// }

// if (score === 5) {
//     alert("Молодець");
// }
// else if (score >= 3){
//     alert("Нормально");
// }
// else {
//     alert("Треба вчитись...")
// }



//___________________________________________________________TASK

const correctPin = 4321;

while (true) {
    let age = +prompt("Введіть ваш вік:");  
    if (age >= 12 && age <= 90) {
        let attempts = 0;
        let isPinCorrect = false;
        while (attempts < 3) {
            let pincode = +prompt("Введіть ваш пін-код:");
            if (pincode === correctPin) {
                isPinCorrect = true;
                break;
            } else {
                attempts++;
                alert("Невірний PIN! Спробуйте ще раз.");
            }
        }
        if (isPinCorrect) {
            let menu;
            do {
                menu = +prompt("Оберіть опцію:\n1 - Особистий кабінет\n2 - Повідомлення\n3 - Налаштування\n0 - Вихід");
                switch (menu) {
                    case 1:
                        alert("Особистий кабінет");
                        break;
                    case 2:
                        alert("Повідомлення");
                        break;
                    case 3:
                        alert("Налаштування");
                        break;
                    case 0:
                        alert("Вихід");
                        break;
                    default:
                        alert("Такого пункту немає.");
                        break;
                }
            } while (menu !== 0);
        } else {
            alert("Спроби вичерпано. Доступ заблоковано!");
        }
        break;
    } else {
        alert("Невірний вік! Введіть вік у діапазоні від 12 до 90.");
    }
}