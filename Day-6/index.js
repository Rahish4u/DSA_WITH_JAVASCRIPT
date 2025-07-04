// left and right rotation of an array by 1
// let arr = [1, 2, 3, 4, 5];
// // Left rotation
// let leftRotation = arr[0];
// for(let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = leftRotation;
// console.log("Left rotated array: " + arr);

// Right rotation
// let arr = [10, 20, 30, 40, 50];
// let rightRotation = arr[arr.length - 1];
// for(let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = rightRotation;
// console.log("Right rotated array: " + arr);

//  map(), filter(), and reduce()

// let numbers = [1,2,3,4,5,6]
// map
// let squares = numbers.map(num => num * num);
// console.log("Squares of numbers: " + squares);


// filter
// let evenNumbers = numbers.filter(num => num % 2 ===0);
// console.log("Even numbers: " + evenNumbers);

// reduce
// let sum  = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Sum of numbers: " + sum);


//  Problem 1: Move all zeros to the end

// function moveZeros(arr) {
//   let result = [];
//   let zeroCount = 0;
//   for (let num of arr) {
//     if (num === 0) zeroCount++;
//     else result.push(num);
//   }
//   while (zeroCount--) result.push(0);
//   return result;
// }
// console.log(moveZeros([0, 1, 0, 3, 12, 0, 52, 0, 0, 66])); // [1, 3, 12, 0, 0]

function rahish() {
  let count = 10;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = rahish();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5