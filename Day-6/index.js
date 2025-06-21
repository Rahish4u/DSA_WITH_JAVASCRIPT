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
let arr = [10, 20, 30, 40, 50];
let rightRotation = arr[arr.length - 1];
for(let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = rightRotation;
console.log("Right rotated array: " + arr);
