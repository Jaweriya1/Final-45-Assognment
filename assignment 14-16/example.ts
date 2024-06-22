// for each
let num = [1,2,3,4,5];

num.forEach(number => console.log(number*2));

// map
let doubleNum = num.map(number => number*2);
console.log(doubleNum);
// splice()
num.splice(0,5,15)
console.log(num);
// add something in array beginning
// unshift()
let fruits:string[] = ["apple", "banana"]
fruits.unshift("mango");

console.log(fruits);
// math.floor itg divide properly
let num1:number = 9.99
let nums:number = Math.floor(num1)
console.log(nums);
