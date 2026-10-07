// let prices = [12, 5, 92, 10, 15];
// const prices2 = [12, 5, 92, 10, 15];

// console.log(prices2[2]);

// prices2[1] = 30;
// console.log(prices2[1]);
// console.log(prices.length);

// let sum = 0;
// for(let i = 0; i < prices.length; i++) {
//     sum += prices[i];
//     if (prices[i] % 2 === 0) {
//         console.log(prices[i]);
//     }
// }
// console.log(sum);

// function countLimit(prices, limit) {
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit) {
//             count++;
//         }
//     }
//     return count;
// }

// let prices = [50, 45, 30, 100, 55];
// let limit = 50;

// console.log(countLimit(prices, limit));

//_________________________________________________#1

// function countAvg(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(countAvg(numbers));

//_________________________________________________#2

function numberSum() {
    let numbersAmount = +prompt("Enter the amount of numbers you want to sum:");
    let numbers = [];
    for (let i = 0; i < numbersAmount; i++) {
        let number = +prompt(`Enter number ${i + 1}:`);
        numbers[i] = number;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(numberSum());