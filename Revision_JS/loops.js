// for-loop

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// while-loop

// let j = 0;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// do-while-loop

// let k = 0;
// do {
//     console.log(k)
//     k++;
// } while (k <=15);

// for-of loop
// let arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//     console.log(value);
// }

// forEach loop
// let nums = [10, 20, 30];
//  nums.forEach((num) => {
//  console.log(num);
//  });

// for-in loop
// let user = { name: "Harsh", age: 26 };
//  for (let key in user) {
//  console.log(key, user[key]);
//  }

// Practice Zone
// 1. Print numbers from 1 to 10 using a for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// 2. Print even numbers between 1 to 20

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 3. Print odd numbers between 1 to 20

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 4. Print numbers from 10 to 1 in reverse order

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 5. Reverse a string using loop

// let str = "Shyrian";
// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// console.log(reversedStr);

// 6. Sum of all numbers in an array

// let numbers = [1, 5, 6, 9, 8, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Sum of all numbers in the array:", sum);

// 7. Print all characters of a name using for-of

// let name = "Rahish";
// for (let char of name){
//     console.log(char)
// }

// 8. Print all object keys and values using for-in
// let user = { name: "Harsh", age: 26 };
// for (let key in user) {
//   console.log(key, user[key]);
// }

// 9. Guess number game – use while to ask until correct

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess;

// while (true) {
//   guess = prompt("🎯 Guess a number between 1 and 10:");

//   // ❌ User cancelled or left blank
//   if (guess === null || guess.trim() === "") {
//     alert("⚠️ Please enter a number (don't leave it blank).");
//     continue;
//   }

//   // ✅ Convert to number
//   guess = Number(guess);

//   // ❌ Not a number
//   if (isNaN(guess)) {
//     alert("🚫 That's not a valid number. Try again!");
//     continue;
//   }

//   // ✅ Check guess
//   if (guess < secretNumber) {
//     alert("📉 Too low! Try again.");
//   } else if (guess > secretNumber) {
//     alert("📈 Too high! Try again.");
//   } else {
//     alert("🎉 Correct! You guessed the number! 🎊");
//     break; // Exit the loop
//   }
// }

// 10. Pattern: Print triangle using *

// let rows = 10;

// for(let i = 1; i <= rows; i++){
//   let pattern = "";
//   for(let j = 1; j <= i; j++){
//     pattern += "*";
//   }
//   console.log(pattern)
// }

// reverse print
// let rows = 10;

// for(let i = rows; i >= 1; i--){
//   let pattern = "";
//   for(let j = 1; j <= i; j++){
//     pattern += "*";
//   }
//   console.log(pattern)
// }


 function shout(msg) {
 return msg.toUpperCase();
 }
 function processMessage(fn) {
 console.log(fn("hello"));
 }
 processMessage(shout);