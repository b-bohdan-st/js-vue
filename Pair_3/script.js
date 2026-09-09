// const age = +prompt("Enter your age:");
// const isRegistered =  confirm("Are you registered?");

// if (age >= 18 && isRegistered === true) {
//     alert("Welcome!");
// }
// else {
//     alert("Sorry, you cannot enter.");
// }

//__________________________________________________________________________________

// admin, teacher
// const accessLevel = prompt("Enter your access level:");

// switch (accessLevel) {
//     case "admin": 
//         alert("Welcome!");
//         break;
//     case "teacher":
//         alert("Welcome!");
//         break;
//     default:
//         alert("Access denied.");
//         break;
// }

//__________________________________________________________________________________

// const isRegistered =  confirm("Are you registered?");

// if (isRegistered === true) {
//     const age = +prompt("Enter your age:");
//     if (age >= 18) {
//         alert("Welcome!");
//     } else {
//         alert("Sorry, you cannot enter.");
//     }
// } else {
//     alert("Sorry, you cannot enter.");
// }

//__________________________________________________________________________________

// let grade = +prompt("Please enter your grade:");
// // 90-100 - excellent, 70-89 - good, 60-69 pass, 0-59 bad
// if (grade >= 90) {
//     alert("Excellent!");
// }
// else if (grade >= 70) {
//     alert("Good");
// }
// else if (grade >= 60) {
//     alert("Pass");
// }
// else {
//     alert("Bad");
// }

//__________________________________________________________________________________

// // Access roles: Teacher, Student
// let role = prompt("What is your access role?");
// let isBlocked = confirm("Is your account blocked?")

// if (role === "Teacher") {
//     if (isBlocked === true) {
//         alert("Access denied!");
//     }
//     else {
//         alert("Welcome!");
//     }
// }
// else if (role === "Student") {
//     if (isBlocked === true) {
//         alert("Access denied!");
//     }
//     else {
//         let gotSubscription = confirm("Do you have subscription?");
//         if (gotSubscription === true) {
//             alert("Welcome!")
//         }
//         else {
//             alert("You are using the demo version");
//         }
//     }
// }

//__________________________________________________________________________________

// const promo = "Sale";
// const discount = 0.1;
// const discountMinSum = 1000;
// const deliveryCost = 200;

// let goodsName = prompt("Enter the goods name:");
// let goodsCount = prompt("Enter the goods count:");
// let goodsPrice = prompt("Enter the goods price:");
// let isRegistered = confirm("Are you registered?");

// let defaultPrice = goodsCount * goodsPrice + deliveryCost;

// if (defaultPrice >= discountMinSum && isRegistered === true) {
//     let totalPrice = defaultPrice * (1 - discount);
//     let isVip = confirm("Do you have VIP account?");
//     if (isVip === true) {
//         alert(`${goodsCount} ${goodsName}(s) will cost ${totalPrice}`);
//     }
//     else {
//         let gotPromo = confirm("Do you have promo code?");
//         if (gotPromo === true) {
//             let userPromo = prompt("Enter your promo code:");
//             if (userPromo === promo) {
//                 alert(`${goodsCount} ${goodsName}(s) will cost ${totalPrice}`);
//             }
//             else {
//                 alert(`${goodsCount} ${goodsName}(s) will cost ${defaultPrice}`);
//             }
//         }
//         else {
//                 alert(`${goodsCount} ${goodsName}(s) will cost ${defaultPrice}`);
//         }
//     }

// }
// else {
//     alert(`${goodsCount} ${goodsName}(s) will cost ${defaultPrice}`);
// }