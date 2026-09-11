// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i)
// }

// for (let i = 20; i > 0; i--) {
//     console.log(i)
// }

// let counter = 0
// for (let i = 20; i > 0; i--) {
//     counter += i
// }
// console.log(counter)

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//______________________________________________________#1

// let numbers = [];
// for(let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         numbers.push(i);
//     }
// }
// console.log(numbers);

//______________________________________________________

// for(let i = 1; i <= 100; i++) {
//     if (i > 25 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

//______________________________________________________

// for(let i = 1; i <= 30; i++) {
//     if (i % 5 ===0) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

//______________________________________________________

// let students = +prompt("Введіть кількість учнів:");
// let sum = 0;
// let avg = 0;
// let goodGrade = 0;
// let badGrade = 0;
// let maxGrade = 1;
// let minGrade = 12;

// for (let i = 1; i <= students; i++) {
//     let grade = +prompt(`Введіть оцінку учня № ${i}:`);
//     if (!(grade >= 1 && grade <= 12)) {
//         alert("Помилка! Оцінка повинна бути в діапазоні від 1 до 12. Спробуйте ще раз.");
//         i--;
//         continue;
//     }
//     sum += grade;
//     if (grade >= 7) {
//         goodGrade++;
//     }
//     else {
//         badGrade++;
//     }
//     if (grade > maxGrade) {
//         maxGrade = grade;
//     }
//     if (grade < minGrade) {
//         minGrade = grade;
//     }
// }
// avg = sum / students;
// alert(`Всього учнів: ${students}.\nСередня оцінка: ${avg}.\nНайвища оцінка: ${maxGrade}.\nНайнижча оцінка: ${minGrade}.\nКількість учнів з оцінкою >= 7: ${goodGrade}.\nКількість учнів з оцінкою < 7: ${badGrade}.`);

//______________________________________________________#2

let testMembers = 0;
let testResult = 0;
let avgResult = 0;
let sumResult = 0;
let excellentResults = 0; // >= 90 <= 100
let goodResults = 0; // >= 60, < 90
let satisfactoryResults = 0; // < 60
let maxResult = 0;
let minResult = 100;
let firstHundredResult = 0;

testMembers = +prompt("Введіть кількість учасників тестування:");
for (let i = 1; i <= testMembers; i++) {
    testResult = +prompt(`Введіть результат учасника № ${i}:`);
    if (!(testResult >= 0 && testResult <= 100)) {
        alert("Помилка! Результат повинен бути в діапазоні від 0 до 100. Спробуйте ще раз.");
        i--;
        continue;
    }
    sumResult += testResult;
    if (testResult === 100 && firstHundredResult === 0) {
        firstHundredResult = i;
    }
    if (testResult >= 90 && testResult <= 100) {
        excellentResults++;
    }
    else if (testResult >= 60 && testResult < 90) {
        goodResults++;
    }
    else {
        satisfactoryResults++;
    }
    if (testResult > maxResult) {
        maxResult = testResult;
    }
    if (testResult < minResult) {
        minResult = testResult;
    }
}
avgResult = sumResult / testMembers;
console.log(`Всього учасників: ${testMembers}.\nСередній результат: ${avgResult}.\nНайкращий результат: ${maxResult}.\nНайгірший результат: ${minResult}.\nКількість учасників з результатом 90-100: ${excellentResults}.\nКількість учасників з результатом 60-89: ${goodResults}.\nКількість учасників з результатом менше 60: ${satisfactoryResults}.\nПерший учасник з результатом 100: ${firstHundredResult}.`);