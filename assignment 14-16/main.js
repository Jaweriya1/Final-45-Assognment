// assignment 14
// define array of guest
var guestList = ["Absar", "Usama", "Aslam"];
// invite each guest for dinner
// for each method
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordinally invited to dinner"));
});
// map method
var invitation = guestList.map(function (guest) { return "Dear ".concat(guest, ", you are cordinally invited to dinner"); });
console.log(invitation);
// for each method
invitation.forEach(function (invitations) {
    console.log(invitations);
});
// assignment 15
// removing name who can not make to dinner
// slice to remove from array
var unableToAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableToAttend, " cant make dinner"));
// pupsh new member
guestList.push("Jaweriya");
console.log(guestList);
// print a msg using for each method
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are cardinally invited for dinner"));
});
// answer no 16
console.log("Great we found a bigger table");
// unshift method to add new name in starting
guestList.unshift("Mehrunisa");
console.log(guestList);
// splice() to add
guestList.splice(Math.floor(guestList.length / 2), 0, "Usaama");
// push() to add on end, its for append
guestList.push("Ansar");
console.log(guestList);
// foreach method to invite all seperately
guestList.forEach(function (family) {
    console.log("dear ".concat(family, " you are cordinally invited for dinner"));
});
