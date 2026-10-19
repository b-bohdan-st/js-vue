// function isHighScore(score) {
//     return score >= 10;
// };

// scores = [1, 2, 6, 11, 12, 9, 4];

// let highScore = scores.filter(isHighScore);
// console.log(highScore);

// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);

// let courses = [
//     {id: 1, title: "HTML", description: "HTML course", price: 300, active: false},
//     {id: 2, title: "CSS", description: "CSS course", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "JavaScript course", price: 450, active: true},
//     {id: 4, title: "Vue", description: "Vue course", price: 600, active: false}
// ]

// let idCourse = +prompt("Enter the course id:")
// let foundCouse = courses.find(course => course.id === idCourse);
// if (foundCouse !== undefined) {
//     console.log(foundCouse.title);
// }
// else {
//     console.log(`Error! There's no course with id: ${idCourse}`)
// }

// let activeCourses = courses.filter(course => course.active === true)
// console.log(activeCourses);

// let titleCourse = courses.map(course => course.title);
// console.log(titleCourse);

// let code = "DISC10";
// let enteredCode = prompt("Enter the promo code:");
// if (enteredCode === code) {
//     let pricesCourse = courses.map(course => course.price * 0.9)
//     console.log(pricesCourse)
// }

// let jsSearch = courses.filter(course => course.description.includes("JavaScript course"));
// console.log(jsSearch);

// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олександра Серйозна", year: 2026, available: true},
//     {id: 2, title: "CSS для початківців", author: "Олександра Весела", year: 2025, available: true},
//     {id: 3, title: "JS для початківців", author: "Олександра Зла", year: 2026, available: false},
//     {id: 4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", year: 2023, available: true},
// ];

// let yearEnter = +prompt("Рік видання:");
// let years = books.filter(book => book.year === yearEnter);
// console.log(years);

// let titles = books.map(book => book.title);

// let search = books.filter(book => book.title.includes("початківців"));
// console.log(search);

// let prices = [500, 200, 800];

// console.log(prices.sort((a, b) => a - b))

// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олександра Серйозна", year: 2026, available: true},
//     {id: 2, title: "CSS для початківців", author: "Олександра Весела", year: 2025, available: true},
//     {id: 3, title: "JS для початківців", author: "Олександра Зла", year: 2026, available: false},
//     {id: 4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", year: 2023, available: true},
// ];

// let lowerUpper = [...books].sort((a, b) => a.year - b.year);
// console.log(lowerUpper);

// let existingBooks = books.filter(book => book.available === true).sort((a, b) => a - b).map(book => `${book.title} - ${book.author}`);

// function isHighScore(score) {
//     return score >= 10;
// };

// scores = [1, 2, 6, 11, 12, 9, 4];

// let highScore = scores.filter(isHighScore);
// console.log(highScore);

// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);

// let courses = [
//     {id: 1, title: "HTML", description: "HTML course", price: 300, active: false},
//     {id: 2, title: "CSS", description: "CSS course", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "JavaScript course", price: 450, active: true},
//     {id: 4, title: "Vue", description: "Vue course", price: 600, active: false}
// ]

// let idCourse = +prompt("Enter the course id:")
// let foundCouse = courses.find(course => course.id === idCourse);
// if (foundCouse !== undefined) {
//     console.log(foundCouse.title);
// }
// else {
//     console.log(`Error! There's no course with id: ${idCourse}`)
// }

// let activeCourses = courses.filter(course => course.active === true)
// console.log(activeCourses);

// let titleCourse = courses.map(course => course.title);
// console.log(titleCourse);

// let code = "DISC10";
// let enteredCode = prompt("Enter the promo code:");
// if (enteredCode === code) {
//     let pricesCourse = courses.map(course => course.price * 0.9)
//     console.log(pricesCourse)
// }

// let jsSearch = courses.filter(course => course.description.includes("JavaScript course"));
// console.log(jsSearch);

// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олександра Серйозна", year: 2026, available: true},
//     {id: 2, title: "CSS для початківців", author: "Олександра Весела", year: 2025, available: true},
//     {id: 3, title: "JS для початківців", author: "Олександра Зла", year: 2026, available: false},
//     {id: 4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", year: 2023, available: true},
// ];

// let yearEnter = +prompt("Рік видання:");
// let years = books.filter(book => book.year === yearEnter);
// console.log(years);

// let titles = books.map(book => book.title);

// let search = books.filter(book => book.title.includes("початківців"));
// console.log(search);

// let prices = [500, 200, 800];

// console.log(prices.sort((a, b) => a - b))

// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олександра Серйозна", year: 2026, available: true},
//     {id: 2, title: "CSS для початківців", author: "Олександра Весела", year: 2025, available: true},
//     {id: 3, title: "JS для початківців", author: "Олександра Зла", year: 2026, available: false},
//     {id: 4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", year: 2023, available: true},
// ];

// let lowerUpper = [...books].sort((a, b) => a.year - b.year);
// console.log(lowerUpper);

// let existingBooks = books.filter(book => book.available === true).sort((a, b) => a - b).map(book => `${book.title} - ${book.author}`);

// console.log(existingBooks);