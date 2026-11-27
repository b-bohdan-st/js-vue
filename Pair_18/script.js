let username = document.querySelector("#username");
let usernameError = document.querySelector("#username-error");
let email = document.querySelector("#email");
let emailError = document.querySelector("#email-error");
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#toggle-password");
let passwordError = document.querySelector("#password-error");
let strengthText = document.querySelector("#strength-text");
let passwordConfirm = document.querySelector("#password-confirm");
let confirmError = document.querySelector("#confirm-error");
let terms = document.querySelector("#terms");
let termsError = document.querySelector("#terms-error");
let submitButton = document.querySelector("#submit-button");
let submitError = document.querySelector("#submit-error");

function submitPress() {
    let usernameContent = username.textContent;
    let emailContent = email.textContent;
    let passwordContent = password.textContent;
    let passwordConfirmContent = passwordConfirm.textContent;

    if (usernameContent === "") {
        let usernameErrorText = "Поле ім'я не може бути пустим!";
        let errorElement = document.createElement();
        errorElement.textContent = usernameErrorText;
        usernameError.append(errorElement);
        setTimeout(() => {usernameError.remove(errorElement);}, 2000);
    }
    if (emailContent === "") {
        let emailErrorText = "Поле пошти не може бути пустим!";
    }
    else if (!emailContent.includes("@") || !emailContent.includes(".")) {
        let emailErrorText = "Помилка! Перевірте вашу пошту ще раз."
    }
    if (passwordContent === "") {
        let passwordErrorText = "Поле паролю не може бути пустим!";
    }
    if (passwordConfirmContent === "") {
        let passwordConfirmErrorText = "Поле повторного паролю не може бути пустим!";
    }

};

submitButton.addEventListener(submitPress);