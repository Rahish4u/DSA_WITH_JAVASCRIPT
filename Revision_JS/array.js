// Creating & Accessing Arrays

// let fruits = ["apple", "banana", "papaya", "mango"]
// console.log(fruits)
// console.log(fruits[0])

// fruits[2] = "guava"
// console.log(fruits)

// // common array method

// let array = [1, 2, 3, 5, 6, 8, 9];

// array.push(5); // add in last
// array.pop();  // remove from last

// array.shift();  // romove from 1st index
// array.unshift(55);  // add from 1st index

// array.splice(2, 3);  // remove 3 items starting at index 2
// array.reverse();  // reverse order

// let arr = [1, 5, 6, 7, 45, 56]

// let newArr = arr.slice(1, 3); // Copy from index 1 to 2
//  arr.sort();  // Lexical sort by default
// console.log(arr)
// console.log(newArr)


// Iteration method

 // map()
 // Returns a new array with modified values

//  let prices = [55, 800, 900, 300];
//  let taxedPrice = prices.map(p => p * 1.20);
//  console.log(taxedPrice)

// filter()

// let nums = [ 1, 2, 5, 6, 8, 10];
// let even = nums.filter(n => n % 2 === 0);
// console.log(even);

// reduce()

// let numbers = [20, 10, 20, 30, 50];
// let total = numbers.reduce((acc , val) => acc + val, 0);
// console.log(total);
 
// forEach()
//  numbers.forEach(n => console.log(n));

// find(), some(), every()
// let nums = [2, 6, 8, 11, 77, 45];
// let find = nums.find(n => n > 2);
// console.log(find)

// let nums = [2, 6, 8, 11, 77, 45];
// let some = nums.some(n => n > 6);
// console.log(some)


// let nums = [5, 6, 8, 11, 77, 45];
// let every = nums.every(n => n > 4);
// console.log(every)

// Practice Zone
// 1. Create an array of student names and print each

// let students = ["Rohan", "Mahesh", "Satish", "Sagar"];
// students.forEach(name => {
//     console.log(name)
// });


// 2. Filter even numbers from an array

// let numbers = [ 4, 5, 6, 8, 65, 9, 10, 20];
// let even = numbers.filter((num) => num % 2 === 0);
// console.log(even)


// 3. Map prices to include GST (18%)

// let prices = [ 45, 66, 75, 88, 90];
// let addGst = prices.map(p => p + p * 0.18);
// console.log(addGst)
 


// 4. Reduce salaries to calculate total payroll

//  let salary = [ 1000, 5500, 6500, 7000];
//  let total = salary.reduce((acc , val) => acc + val , 0)
//  console.log(total)

// 5. Find the first student with grade A

// let students = [
//     {name: "Ali" , grade: "A"},
//     {name: "Rahish" , grade: "B"},
//     {name: "Ahan" , grade: "C"},

// ];

// let firstStudent = students.find(student => student.grade === "A");
// console.log(firstStudent);

// 6. Write a function to reverse an array

// let array = [4, 6, 8, 9, 71, 88, 92];

// function arrReturn(arr){
//     return arr.reverse()
// };
// console.log(arrReturn(array));

// 7. Sort array of ages in ascending order

// let ages = [4, 6, 8, 9, 71, 88, 92];
// let agesAcsOrder = ages.sort((a, b) => a -b );
// console.log(agesAcsOrder)

// 8. Destructure first two elements of an array

// let arr = [4, 6, 8, 9, 71, 88];
// let [first, second] = arr;
// console.log(first);
// console.log(second);

// 9. Use some() to check if any student failed

// let students = [
//     {name: "Ali", marks: 35},
//     {name: "Rohan", marks: 75},
//     {name: "Taslim", marks: 88},
//     {name: "Ahil", marks: 99},
// ]

// let isFailed = students.some(hasfailed => hasfailed.marks <= 35);
// console.log(isFailed);

// 10. Use spread to copy and add new item

// let numbers = [ 2, 5, 6, 8];
// let newArr = [...numbers, 10];
// console.log(newArr)