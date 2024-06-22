// question 11
// array
// defines an array of names
var names = ["Jaweriya", "Alishba", "Hadiqa"];
// loop method
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (friends) {
    console.log(friends);
});
// for of loop method
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
// assignment 12'
// adding message with previous names
// by loop method
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! how are you today?"));
}
// for each method
names.forEach(function (friends) {
    console.log("hi, ".concat(friends, "! how are you today?"));
});
// for loop method
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendsName = names_2[_a];
    console.log("dear, ".concat(friendsName, "! how are you today?"));
}
// assignment 13
var transportationMode = ["car", "bicycle", "motorcycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("I would like to own ".concat(mode));
});
