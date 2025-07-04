// Variable and Declaration

// Practice some questions on variable declaration in JavaScript. 
    // 1. Declare your name and city using const , and your age using let .
    // const name = "Rahish Ali";
    // const city = "Varanasi";
    // let age = 24;
    // console.log(name, city, age);

// 2. Try this and observe the result.
    //  let a = 10;
    //  let a = 20; // This will throw an error because 'a' is already declared with let
    //  console.log(a);  

// 3. Guess the output 
    // console.log(a);
    //const a = 10; // This will throw an error because 'a' is used before declaration  

// 4. Create a const object and add a new key to it — does it work?
    // const person = {name : "Rahish", age: 24};
    // person.city = "Varanasi"; // This will work because we are modifying the object, not reassigning it
    // console.log(person); // Output: { name: 'Rahish', age: 24

// 5. Try accessing a let variable before declaring it — what error do you see?
     // console.log(b); // This will throw a ReferenceError because 'b' is accessed before declaration
     // let b = 20; 

// 6. Change a const array by pushing a value. Will it throw an error?
    // const arr = [10, 20, 50];
    // arr.push(100); // This will work because we are modifying the array, not reassigning it
    // console.log(arr); 


// Data Types + Type System

// typeOf operator
    // typeof "Sheryians" // "string"
    // typeof 99 // "number"
    // typeof true // "boolean"
    // typeof undefined // "undefined"
    // typeof null // "object" ← known bug
    // typeof [] // "object"
    // typeof {} // "object"
    // typeof function(){} // "function"

// type coercion (Auto Conversion)
    // "5" + 5 // "55" (string concatenation)
    // "5" - 5 // 0 (string to number conversion)
    // true + 1 // 2 (boolean to number conversion)
    // null + 1 // 1 (null to number conversion)
    // undefined + 1 // NaN (undefined to number conversion)

// Practice Questions

// 1.predict the output
    // console.log(null + 1);
    // console.log("5" + 3);
    // console.log("5" - 3);
    // console.log(true + false); 

// 2. Check types
    // console.log(typeof []);
    // console.log(typeof null);
    // console.log(typeof 123n);

// 3. Truthy or Falsy?
    // console.log(Boolean(0)); // falsy
    // console.log(Boolean("0")); // truthy
    // console.log(Boolean([])); // truthy
    // console.log(Boolean(undefined)); // falsy
    // console.log(Boolean(null)); // falsy
    // console.log(Boolean("false")); // truthy
    // console.log(Boolean("")); // falsy
    // console.log(Boolean(NaN)); // falsy
    // console.log(Boolean(1)); // truthy

// 4. Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
/* function isEmpty(value){
    return value === null || value === undefined || value === "";
}
// Test cases
 console.log(isEmpty("Hello")); // false
 console.log(isEmpty("0")); // false
 console.log(isEmpty("")); // true
 console.log(isEmpty(null)); // true
 console.log(isEmpty(undefined)); // true */

// 5. Compare with loose vs strict:
// console.log(5 == "5"); // true (loose equality, type coercion)
// console.log(5 === "5"); // false (strict equality, no type coercion)

// Operators
// types of operators
// 1. Arithmetic Operators
//    +, -, *, /, %, ** (exponentiation)
// 2. Assignment Operators
//    =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators
//    ==, ===, !=, !==, <, >, <=, >=
// 4. Logical Operators
//    && (AND), || (OR), ! (NOT)
// 5. Bitwise Operators
//    &, |, ^, ~, <<, >>, >>>
// 6. Ternary Operator
// 7. Unary Operators
//  +, - (unary plus and minus) ++, -- (increment and decrement)

// Practice Questions
// 1. Predict the output
    // console.log("10" + 1);
    // console.log("10" - 1);
    // console.log(true + false);
    // console.log(!!"Sheryians");

// 2. Convert using unary +
    // let str = "42";
    // let num = +str;
    // console.log(num); // 42

// 3. Use Ternary 
    // let age = 16;
    // let msg = age >= 18 ? "Adult" : "Minor";
    // console.log(msg); // "Minor"

// 4. Build a calculator function
// function calculator(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//         case '%':
//             return a % b;
//         case '**':
//             return a ** b;
//         default:
//             return "Invalid operator";
//     }
// }
 // Test cases
// console.log(calculator(10, 5, '+')); // 15
// console.log(calculator(10, 5, '-')); // 5
// console.log(calculator(10, 5, '*')); // 50
// console.log(calculator(10, 5, '/')); // 2
// console.log(calculator(10, 5, '%')); // 0
// console.log(calculator(10, 5, '**')); // 100000
// console.log(calculator(10, 5, 'hd')); // "Invalid operator"

// 5. Score logic
    // let score = 99;
    // let grade = score >= 90 ? "A" : 
    //         score >= 80 ? "B" : 
    //         score >= 70 ? "C" : 
    //         score >= 60 ? "D" : "F";
    // console.log(`Your grade is: ${grade}`); // "Your grade is: A"

