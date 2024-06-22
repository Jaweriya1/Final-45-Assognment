// for each
var num = [1, 2, 3, 4, 5];
num.forEach(function (number) { return console.log(number * 2); });
// map
var doubleNum = num.map(function (number) { return number * 2; });
console.log(doubleNum);
// splice()
num.splice(0, 5, 15);
console.log(num);
// add something in array beginning
// unshift()
var fruits = ["apple", "banana"];
fruits.unshift("mango");
console.log(fruits);
// math.floor itg divide properly
var num1 = 9.99;
var nums = Math.floor(num1);
console.log(nums);
