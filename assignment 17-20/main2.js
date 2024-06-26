// assignment 18
var placeToVisit = ["Palestine", "Turkey", "Italy", "China", "Indonatia"];
// printing in original order
console.log("Original order:", placeToVisit);
// printi array in alphabetical order 
console.log("Alphabetical order:", placeToVisit.slice().sort());
// show that its still in original order
console.log("Original order:", placeToVisit);
// printing in reverse alphabetical order
console.log("Reverse order:", placeToVisit.slice().sort().reverse());
// show that its still in original order
console.log("Original order:", placeToVisit);
// reverse order and show that its order has changed
console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);
// again reverse to original order
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);
// sort to change your array so it is sorted in reverse alphabetical order
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
// assignment 19
var guestList = ["Absar", "Jaweriya", "Aslam"];
// print msg
console.log("unfortunately! the new dinner table wont arrive so we can not invite more");
// add new guest
guestList.unshift("alice", "bob");
console.log("updated list of guest:", guestList);
// removing guest by pop method
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log("sorry, ".concat(removeGuest, ", we cant invite you"));
    }
}
// print msg for 2 people who are invited
guestList.forEach(function (finalGuest) {
    console.log("Dear ".concat(finalGuest, ", you both are invited for the dinner"));
});
// remove last 2 names too
guestList.splice(0, guestList.length);
// print updated empty list
console.log("Updated Empty list!", guestList);
// assignment 20
var countries = ["USA", "Canada", "France", "Germany", "Japan"];
console.log("Print list of countries:", countries.forEach(function (country) {
    console.log(country);
}));
