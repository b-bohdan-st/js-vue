function task3() {
    let pincode = 2026;
    let attempts = 3;
    let actualAttempt = 1;
    let code = 0;
    let attemptsLeft = 0;

    while (actualAttempt <= attempts) {
        code = +prompt("Введіть PIN-код:");

        attemptsLeft = attempts - actualAttempt;
        actualAttempt++;

        if (attemptsLeft > 0) {
            if (code === pincode) {
                alert("Доступ дозволено");
                break;
            }
            else {
                alert(`Невірний PIN-код!\nЗалишилося спроб: ${attemptsLeft}`);    
            }
        } 
        else {
            if (code === pincode) {
                alert("Доступ дозволено");
                break;
            }
            else {
                alert("Доступ заблоковано");
            }
        }
    }
}