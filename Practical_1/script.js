const priceMovie = 150;
const priceTheater = 220;
const priceConcert = 350;
const priceWeekend = 1.15;
const discount1000 = 0.05;

let eventType = 0;
let dayType = 0;
let ticketCount = 0;
let price = 0;
let totalPrice = 0;
let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPriceTickets = 0;
let age = 0;
let discountPercent = 0;
let isStudent = false;

while (true) {
  eventType = +prompt("Оберіть тип події:\n1 — кіно\n2 — театр\n3 — концерт");
  while (!Number.isInteger(eventType) || (eventType !== 1 && eventType !== 2 && eventType !== 3)) {
    alert("Невірний ввід даних. Спробуйте, будь ласка, ще раз.");
    eventType = +prompt("Оберіть тип події:\n1 — кіно\n2 — театр\n3 — концерт");
  }
  switch (eventType) {
    case 1:
      price = priceMovie;
      break;
    case 2:
      price = priceTheater;
      break;
    case 3:
      price = priceConcert;
      break;
  }
  dayType = +prompt("Оберіть тип дня:\n1 — будній\n2 — вихідний");
  while (dayType !== 1 && dayType !== 2) {
    dayType = +prompt("Невірний ввід! Оберіть тип дня:\n1 — будній\n2 — вихідний");
  }
  if (dayType === 2) {
    price = price * priceWeekend;
  }
  ticketCount = +prompt("Введіть кількість квитків (від 1 до 6):");
  while (!Number.isInteger(ticketCount) || ticketCount < 1 || ticketCount > 6) {
    ticketCount = +prompt("Некоректна кількість! Введіть кількість квитків (від 1 до 6):");
  }
  for (let i = 1; i <= ticketCount; i++) {
    age = +prompt(`Введіть вік відвідувача № ${i} (-1 для завершення):`);
    while (age !== -1 && (!Number.isInteger(age) || age < 0 || age > 120)) {
      age = +prompt(`Некоректний вік! Введіть вік для відвідувача № ${i} ще раз (-1 для завершення):`);
    }
    if (age === -1) {
      break;
    }
    discountPercent = 0;
    if (age >= 0 && age <= 5) {
      freeTickets++;
      processedTickets++;
      continue;
    } else if (age >= 6 && age <= 12) {
      discountPercent = 0.50;
      discountedTickets++;
    } else if (age >= 13 && age <= 17) {
      discountPercent = 0.20;
      discountedTickets++;
    } else if (age >= 18 && age <= 59) {
      if (age <= 25) {
        isStudent = confirm(`Чи є у відвідувача № ${i} студентський квиток?`);
        if (isStudent) {
          discountPercent = 0.10;
          discountedTickets++;
        } else {
          fullPriceTickets++;
        }
      } else {
        fullPriceTickets++;
      }
    } else if (age >= 60) {
      discountPercent = 0.25;
      discountedTickets++;
    }
    totalPrice += price * (1 - discountPercent);
    processedTickets++;
  }
  break;
}

if (totalPrice > 1000) {
  totalPrice -= totalPrice * discount1000;
}

console.log(`Оброблено квитків: ${processedTickets}`);
console.log(`Безкоштовних: ${freeTickets}`);
console.log(`Зі знижкою: ${discountedTickets}`);
console.log(`За повною ціною: ${fullPriceTickets}`);
console.log(`Загальна сума до сплати: ${totalPrice.toFixed(2)} грн`);