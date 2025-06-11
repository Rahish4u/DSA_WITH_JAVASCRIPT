
// Sum of two variables
// let a = 10;
// let b = "20";
// console.log(typeof(a+b))

// Type of variables
// let a = 10;
// let b = "20";
// console.log(typeof(a+b))

// Sum of two variables with string concatenation
// let a = 10;
// let b = "20";
// console.log(" Sum of a and b is " + (a+b))

//Tyepe coercion

// console.log("10" + 20); // "1020"
// console.log(10 + "20"); // "1020"
// console.log(10 + 20); // 30 
// console.log("10" - 20); // -10
// console.log("10" * 20); // 200
// console.log("10" / 20); // 0.5
// console.log("10" % 20); // 10


// Accept and print the Answer
// let age = Number(prompt("Enter your age"));
// console.log(typeof(age)); // string


// swap teo variables
// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;
// console.log("a = " + a); // a = 20
// console.log(a)
// console.log(b)

// let a = 10;
// let b = 20;
// console.log(Math.floor(a/b)); // 2

// pre and post increment
// let a = 11;
// a = a++ + ++a;
// console.log(a); 

// Q.
// let a = 10, b = 20;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);
// console.log("b=" + b); 
// console.log("c=" + c);  

//Q.
// let a = true;
// a++;
// console.log(a); //2

//Q.
// let a = false;
// a++;
// console.log(a); //1


//example
// let arr = [10, 20, 30];
// console.log(arr[1]);

// let sum = 0;
// for (let i = 1; i <= Array.length; i++) {
//     sum += arr[i];
// }
// console.log(sum); 

// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr.length; j++) {
//     console.log(arr[i], arr[j]);
//   }
// }

// Problem 1: Print numbers from 1 to N
function printNumbers(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}

printNumbers(20); 

// Problem 2: Check if a number is even or odd (O(1))
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(10)); 
console.log(isEven(15)); 