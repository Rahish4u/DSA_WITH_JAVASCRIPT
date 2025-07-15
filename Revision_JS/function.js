// function expression

// const greet = function(){  // when we store function in a variable it called function expression
//     console.log("hello")
// }
// greet();

// Arrow function

// const greet = () =>{
//     console.log("Hi")
// }
// greet();

// Default + Rest + Spread

// function multiply(a = 1, b = 2 ){
//     return a*b
// }

// function sum(...nums){
//     return nums.reduce((acc, val) => acc + val, 0);
// }

// let nums = [1, 2, 3];
// console.log(sum(...nums));

// First-Class Functions

// function shout (msg){
//    return msg.toUpperCase();
// }

// function processMassage(fn){
//     console.log(fn("hi this side Rahish"))
// }

// processMassage(shout);

//  Higher-Order Functions (HOF)

// function createMultiplier(x){
//     return function (y){
//         return x*y;
//     };
// }
// let double = createMultiplier(5);
// console.log(double(10));

//  Closures & Lexical Scope
// function outer(){
//     let count = 0;
//     return function (){
//         count++
//         console.log(count)
//     };
// }
//     let counter = outer();
//     counter();
//     counter();

// IIFE – Immediately Invoked Function Expression
// (function(){
//     console.log("Hello")
// })();

// Practice Zone

// 1. BMI Calculator

// function calBmi (weightKg, heightMtr){
//     if (weightKg <= 0 || heightMtr <= 0){
//         return "Please enter a Positive Number"
//     }

//     const bmi = weightKg / (heightMtr * heightMtr);
//     let category = ""

//     if (bmi <= 18){
//         category = "Under Weight"
//     }else if (bmi <= 25){
//         category = "Normal Weight"
//     }else if (bmi <= 30){
//         category = "Over Weight"
//     }else{
//         category = "obess"
//     }
//     return `Your BMI is ${bmi.toFixed(2)} (${category})`
// }

// console.log(calBmi(53, 1.64));
// console.log(calBmi(70, 1.64));

// 2. Create a greet function with default name

// function greet(name = "guest"){
//     console.log(`Hi my name is ${name}`)
// }
// greet("Rahish");

// 3. Sum all numbers using rest parameter

// function sum (...nums){
//     return nums.reduce((acc, val)  => acc + val, 0);
// }

// let nums = [1, 2, 3, 8];
// console.log(sum(...nums));

// 4. Create a closure counter function

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// let counter = outer();
// counter();
// counter();

// 5. Write a function that returns another function

// function getMassage(greeting){
  
//     return function(name){
//         return `${greeting}, ${name}`
        
//     }
// }

// const sayHello = getMassage("Hello");
// console.log(sayHello("Rahish"));

// 6. Use a function to log even numbers in array

// function logEvenNumbers(arr){
//     for(num of arr){
//         if(num%2==0){
//             console.log(num)
//         }
//     }
// }

// let numbers = [2, 50, 620, 88, 7, 6, 9, 20];
// logEvenNumbers(numbers);

// 7. Create a pure function to add tax

// function addTax(amount, taxRate){
//     return amount + (amount * taxRate)
// }

// console.log(addTax(100, 0.));

// 8. Use IIFE to show welcome message

// (function(){
//     console.log("Welcome to Varanasi")
// })();

// 9. Write a discount calculator (HOF style)
//  function disCal(disRate){
//     return function(price){
//         return price - (price * disRate)
//     }
//  }

//  const discount = disCal(0.1);
//  console.log(discount(100));

// 10.  toUpperCase Transformer (HOF Style)

function shout (msg){
   return msg.toUpperCase();
}

function processMassage(fn){
    console.log(fn("hi this side Rahish"))
}

processMassage(shout);