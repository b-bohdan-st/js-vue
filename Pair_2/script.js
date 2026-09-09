// > >= < <= == === != !==

// let a, b;
// a = "1";
// b = 1;

// console.log(a == b); // true
// console.log(a === b); // false

// if (a == b) {
//     console.log("a is equal to b");
// }

// let temp = prompt("Enter a temperature:");
// let result;

// if (temp <= 0) {
//     result = "Cold";
// }
// else if (temp > 0 && temp <= 20) {
//     result = "Warm";
// }
// else if (temp >= 20) {
//     result = "Hot";
// }

// alert(result);

//______________________________

// let number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert("Even");
// }
// else {
//     alert("Odd");
// }

//______________________________

// const login = "admin";
// const password = "admin123";

// let userLogin = prompt("Enter your login:");
// let userPassword = prompt("Enter your password:");

// if (userLogin === login && userPassword === password) {
//     alert("Welcome!");
// }
// else if (userLogin === login && userPassword !== password) {
//     alert("Incorrect password!");
// }
// else if (userLogin !== login && userPassword === password) {
//     alert("Incorrect login!");
// }
// else {
//     alert("Invalid login or password!");
// }

// couries
// post
// pickup

// let delivery = prompt("Enter delivery method:");
// let cost;

// switch (delivery) {
//     case "courier":
//         cost = 200;
//         break;
//     case "post":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//     default:
//         cost = "Invalid delivery method!";
// }

// alert(`Delivery cost: ${cost}`);

//______________________________

// let number = +prompt("Enter a number of day:");

// switch (number) {
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid day number!");
// }

//______________________________

let productName = prompt("Enter product name:");
let productPrice = +prompt("Enter product price:");
let productCount = +prompt("Enter product count:");

let hasCard = confirm("Do you have a discount card?"); //10%

let deliveryType = prompt("Enter delivery type:");

let totalPrice, discount = 0;

totalPrice = productPrice * productCount;

if (totalPrice > 1000) {
    discount = 0.05;
}
else if (totalPrice > 500) {
    discount = 0.1;
}
if (hasCard) {
    discount += 0.1;
    totalPrice *= (1 - discount);
}
else {
    totalPrice *= (1 - discount);
}
switch (deliveryType) {
    case "courier":
        totalPrice += 200;
        break;
    case "post":
        totalPrice += 100;
        break;
    case "pickup":
        totalPrice += 0;
        break;
    default:
        console.log("Invalid delivery type!");
}
alert(`Total price for ${productCount} ${productName}(s) is: ${totalPrice.toFixed(2)}`);