// question 11
// array
// defines an array of names
let names:string[] = ["Jaweriya", "Alishba", "Hadiqa"];

// loop method
for (let i = 0; i < names.length; i++) {
    console.log (names[i]);
}
// for each
names.forEach(friends => {
    console.log(friends);
    
});
// for of loop method
for (const friendName of names) {
    console.log(friendName);
}
// assignment 12'
// adding message with previous names
// by loop method
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! how are you today?`);
}

// for each method
names.forEach(friends => {
    console.log(`hi, ${friends}! how are you today?`);
});

// for loop method
for (const friendsName of names) {
    console.log(`dear, ${friendsName}! how are you today?`);
    
}
// assignment 13
let transportationMode:string[] = ["car", "bicycle", "motorcycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
// for each method
transportationMode.forEach(mode => {
    console.log(`I would like to own ${mode}`);
    
});