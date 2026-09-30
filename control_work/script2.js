function task2() {
    let studentCount = +prompt("Введіть кількість учнів:");
    let marks = "";
    let studentMark = 0;
    let sum = 0;
    let avg = 0; 
    let marksGreaterThanSeven = 0;
    let marksLessThanSeven = 0;
    let maxMark = 0;

    while (!Number.isInteger(studentCount)) {
        studentCount = +prompt("Помилка! Введіть кількість учнів ще раз:");
    }

    for(let i = 1; i <= studentCount; i++) {
        studentMark = +prompt(`Введіть оцінку учня № ${i}:`);
        while (!Number.isInteger(studentMark) || studentMark < 1 || studentMark > 12) {
            studentMark = +prompt(`Помилка! Введіть оцінку учня № ${i} ще раз:`);
        }
        sum += studentMark;
        if (studentMark > maxMark) {
            maxMark = studentMark;
        }
        if (i < studentCount) {
            marks += `${studentMark}, `;
        }
        else {
            marks += `${studentMark}`;
        }
        if (studentMark >= 7) {
            marksGreaterThanSeven++;
        }
        else {
            marksLessThanSeven++;
        }
    }

    avg = sum / studentCount;

    console.log(`Кількість учнів: ${studentCount}\nОцінки: ${marks}\n`)
    console.log(`Сума: ${sum}\nСередня: ${avg}\nОцінок 7 і вище: ${marksGreaterThanSeven}\nОцінок нижче 7: ${marksLessThanSeven}\nНайбільша оцінка: ${maxMark}`);
}