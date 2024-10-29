// 宣告一個不可改變的常數
const age: number = 25;

// 嘗試更改 age 的值（這會導致 TypeScript 錯誤）
// age = 30; // 會報錯，因為 age 是用 const 聲明的，不能改變其值

// 宣告一個可以改變的變數
let name: string = "Alice";

// 更改 name 的值
name = "Bob"; // 這是合法的，因為 name 是用 let 聲明的，可以被重新賦值

console.log(`Age: ${age}`);
console.log(`Name: ${name}`);
