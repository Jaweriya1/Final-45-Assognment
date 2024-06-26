// in object what we learned
// default typed object
// update StyleProperty
// add new property
// define custom type property
// use any with object
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let student = {
//     name: "Abdullah",
//     rollnumber: 23,
//     grades: [85, 90, 75]
// };
// console.log(student.name);
// console.log(student.grades[2]);
// // type interface anad its value in object, it helps in defining custom data type
// interface person {
//     name:string;
//     city:string;
//     age:number;
// }
// let person1:person ={
// name: "john",
// city: "london",
// age: 30,
// }
// let person2:person ={
//     name: "john1",
//     city: "lahore",
//     age: 29,
// }
// console.log(person1.name);
// assignment 21
var objectContainingItems = {
    "laptop": {
        name: "Laptop",
        price: "8000",
        description: "High performance laptop with fast processor"
    },
    "mouse": {
        name: "Mouse",
        price: "1000",
        description: "high performance mouse"
    },
    "keyboard": {
        name: "keyboard",
        price: "5000",
        description: "high performance keyboard"
    }
};
console.log(objectContainingItems);
// assignment 22
/**Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */
var internationalError = [1, 2, 3, 4, 5];
console.log(internationalError[10]);
var internationalErrors = [1, 2, 3, 4, 5];
console.log(internationalErrors[2]);
// assignment 23
//onditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// test 2
console.log("Is car == 'Toyota'? I predict False.");
console.log(car == 'Toyota');
// test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// test 4
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru');
// test 5
console.log("Is car.length > 0? I predict true");
console.log(car.length > 0);
// test 6
console.log("Is car.length < 5? I predict false");
console.log(car.length < 5);
// teest 7
console.log("Is car.toUppeCase() === `SUBARU`? I pridict True");
console.log(car.toUpperCase() === "SUBARU");
// test 8
console.log("Is car.toUppeCase() === `subaru`? I pridict True");
console.log(car.toUpperCase() === "subaru");
// test 9
console.log("Is car.toLowerCase() === `subaru`? I pridict True");
console.log(car.toLowerCase() === "subaru");
// test 10
console.log("Is car.includes(`u`)? I predict true");
console.log(car.includes("u"));
