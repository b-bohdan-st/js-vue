// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// console.log(names);
// console.log(names[-1]);
// console.log(names.length);
//
// names2 = [];
// names2.push("Vlada");
// names2.push("Miroslava");
//
// names2.pop()
// names2.unshift("Miroslava", "Miroslava");
//
// names2.shift()
//
// names.splice(1, 3)
// console.log(names);
// console.log(names2);

// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];

// let deleted = names.splice(2, 1);
// names.splice(1, 0, "Bohdan");
// names.splice(0, 1, "Mariia", "Ksu");

// console.log(deleted);
// console.log(names);

// function register(name) {
//     if (name.trim().length === 0) {
//         alert("Name cannot be empty");
//         return;
//     }
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             alert(`Participant ${name} already registered`);
//             return;
//         }
//     }
//     names.push(name);
//     alert(`Participant ${name} added successfully`);
// }
// function participantRemove(name) {
//     let index = -1;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert(`Participant ${name} not found`);
//         return;
//     }
//     else {
//         names.splice(index, 1);
//         alert(`Participant ${name} removed successfully`);
//     }
// }

// function count() {
//     alert(`Total participants: ${names.length}`);
// }

// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];

// register("Mykyta");
// register("Ivan");
// register("       ");
// participantRemove("Ivan");
// count();

// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

// names.forEach(function(name) {
//     console.log(name);
// });

//____________________________________________1
// let people_list = ["Микита", "Олександра", "Влад", "Іван"];
// people_list.push("Влада");

// people_list.unshift("Аліса");

// people_list.pop();

// people_list[2] = "Мирослава";

// for (let i = 0; i < people_list.length; i++) {
//     console.log(`${i + 1}. ${people_list[i]}`);
// }

// for (let name of people_list) {
//     console.log(name);
// }

// people_list.forEach(function(name) {
//     console.log(name.length);
// });

//____________________________________________2
// let prices = [120, 250, 180, 300, 150, 400]
// let sum = 0;
// let pricesMoreThan200 = 0;

// prices.forEach(function(price) {
//     sum += price;
// });
// console.log(sum);

// prices.forEach(function(price) {
//     if (price >= 200) {
//         pricesMoreThan200++;
//     }
// });
// console.log(pricesMoreThan200);

// let avg = sum / prices.length;
// console.log(avg);

// other ways for sum and pricesMoreThan200
// sum = 0;
// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i];
// }
// sum = 0;
// for (let price of prices) {
//     sum += price;
// }
// sum = 0;
// let a = 0;
// while (a < prices.length) {
//     sum += prices[a];
//     a++;
// }

// pricesMoreThan200 = 0;
// for (let i = 0; i < prices.length; i++) {
//     if (prices[i] >= 200) {
//         pricesMoreThan200++;
//     }
// }
// pricesMoreThan200 = 0;
// for (let price of prices) {
//     if (price >= 200) {
//         pricesMoreThan200++;
//     }
// }
// pricesMoreThan200 = 0;
// let b = 0;
// while (b < prices.length) {
//     if (prices[b] >= 200) {
//         pricesMoreThan200++;
//     }
//     b++;
// }

// console.log(sum);
// console.log(pricesMoreThan200);