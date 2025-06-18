
// Loop to print "Hello World" 100 times
// for (let i = 0; i < 100; i++) {
//   console.log("Hello World");
// }

// Loop to print numbers from 1 to 100
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// } 

// Loop to print numbers from  100 to 1
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }


// sum of first n natural numbers
// let pr = Number(prompt("Enter a number: "));
// if (pr === null){
//   console.log("cancelled");
// }else{

//   var n = Number(pr);
// }

// if (isNaN(pr)) {
//   console.log("Invalid Input.");
// }
// else { 
//   if (n>0) {
//     var sum = 0;
//     for (var i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   }
//   else{
//     console.log("Should be positive and more than 0.");
//   }
// }


// Factors of a number
// let pr = Number(prompt("Enter a number: "));
// if (pr === null){
//   console.log("cancelled");
// }else{

//   var n = Number(pr);
// }

// if (isNaN(pr)) {
//   console.log("Invalid Input.");
// }
// else { 
//   if (n>0) {
//     for (var i = 1; i <= Math.floor (n/2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       } 
//     }
//     console.log(n);
//   }
//   else{
//     console.log("Should be positive and more than 0.");
//   }
// }


// Prime numbers from 1 to n

// let pr = Number(prompt("Enter a number: "));
// if (pr === null){
//   console.log("cancelled");
// }else{

//   var n = Number(pr);
// }

// if (isNaN(pr)) {
//   console.log("Invalid Input.");
// }
// else { 
//   if (n>0) {
//     var isPrime  = true;
//     for (var i = 2; i <= Math.floor (n/2); i++) {
//       if (n % i === 0) {
//         isPrime = false;
//       } 
//     }
//     console.log(isPrime);
//   }
//   else{
//     console.log("Should be positive and more than 0.");
//   }
// }

// guess the number game

// let random = Math.floor(Math.random() * 100) + 1;
// let guess = 0;
// while (guess !== random){
//   guess = Number(prompt("Guess a number between 1 and 100: "));
//   if(isNaN(guess) || guess<1 || guess>100) {
//     console.log("Invalid input. Please enter a number between 1 and 100.");
//     continue;
//   }
//   if (guess>random) {
//     console.log("Too high! Try again.");
//   }
//   else if (guess<random) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("Congratulations! You've guessed the number: " + guess);
//   }
// }

// console.log("Hell0 world")


