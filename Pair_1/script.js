// alert("Hello!");

// const name = "Bohdan";
// let age = 17;
// const isStudent = true;
// console.log(typeof(isStudent))

// let school = prompt("Which school do you study in?")
// console.log(school)

// let num1 = Number(prompt("Enter a number:"));
// let num2 = Number(prompt("Enter a number:")); // +(prompt("Enter a number:"))
// console.log(num1 + num2);

// let num3 = 13;
// console.log(typeof String(num3));

let productName = prompt("Enter your product name:")
let productPrice = +prompt("Enter your product price:")
let productCount = +prompt("Enter your product count:")
let delivery = +prompt("Enter your delivery:")
let discount = +prompt("Enter your discount (in %):")
let moneyToPay = +prompt("Enter the amount of money you got to pay:")

let fullPrice = productCount * productCount + delivery;
let totalPrice = fullPrice * (1 - discount / 100)

let enoughMoney = moneyToPay >= totalPrice ? "You have enough money" : "You don't have enough money";

alert(`The product you delivered is ${productName}.\nThe total payment will be ${totalPrice}.\n${enoughMoney}`);