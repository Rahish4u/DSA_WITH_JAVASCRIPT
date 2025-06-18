// This program prints a right-angled triangle pattern of asterisks based on user input.

// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         Process.stdout.write("*");
//     }
//     console.log();
// }

//1. Square Pattern
// function squarePattern(n) {
//   for(let i = 1; i <= n; i++) {
//     let row = '';
//     for(let j = 1; j <= n; j++) {
//       row += '*';
//     }
//     console.log(row);
//   }
// }
// squarePattern(5);

// 2. Right-Angled Triangle Pattern
// function rightAngledTrianglePattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// rightAngledTrianglePattern(5);


// 3. Inverted Right-Angled Triangle Pattern
// function invertedTriangle(n) {
//   for(let i = n; i >= 1; i--) {
//     let row = '';
//     for(let j = 1; j <= i; j++) {
//       row += '*';
//     }
//     console.log(row);
//   }
// }
// invertedTriangle(4);


// 4. Pyramid Pattern (with spaces)
function pyramidPattern(n) {
  for(let i = 1; i <= n; i++) {
    let row = '';
    // Spaces
    for(let s = 1; s <= n - i; s++) {
      row += ' ';
    }
    // Stars
    for(let j = 1; j <= 2 * i - 1; j++) {
      row += '*';
    }
    console.log(row);
  }
}
pyramidPattern(8);