
// Q-1: Write a program to check if a person is eligible to vote or not. A person is eligible to vote if they are 18 years or older.
// var ans = prompt("enter youe name") 
// if(isNaN(ans)) {
//     console.log("Please enter a valid number");
// }
// else if (ans >= 18) {
//     console.log("You are eligible to vote");  
// }else {
//     console.log("You are not eligible to vote");
// }   

// Q-2: Write a program to check if a number is even or odd.
// let amount = Number (prompt("What is the final amount?"));
// let discount = 0;
// if (amount> 0 && amount <= 5000){
//     discount = 0;
// }else if (amount > 5000 && amount <= 7000){
//     discount = 5;
// }else if (amount > 7000 && amount <= 9000){
//     discount = 10;
// }else if (amount > 9000){
//     discount = 20;  
// }
// console.log(amount - Math.floor ((discount * amount) / 100));

let unit = Number(prompt("Enter the number of units consumed:"));
let amount = 0;
if (unit > 400){
    amount = (unit - 400) * 13;
    unit = 400; 
}
if (unit > 200 && unit <= 400){
    amount += (unit - 200) * 10; 
    unit = 200;
}
if (unit > 100 && unit <= 200){
    amount += (unit - 100) * 8;
    unit = 100;
}
amount += unit * 5;
console.log("Total amount to be paid: " + amount + " Rs.");