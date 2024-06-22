// assignment 14
// define array of guest
let guestList:string[] = ["Absar", "Usama", "Aslam"];
// invite each guest for dinner
// for each method
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordinally invited to dinner`);
    
});
// map method
let invitation:string[] = guestList.map(guest => `Dear ${guest}, you are cordinally invited to dinner`);
console.log(invitation);
// for each method
invitation.forEach(invitations => {
    console.log(invitations);
    
});
// assignment 15
// removing name who can not make to dinner
// slice to remove from array
let unableToAttend:string = guestList.splice(1,1)[0];

console.log(`${unableToAttend} cant make dinner`);
// pupsh new member
guestList.push("Jaweriya");
console.log(guestList);

// print a msg using for each method
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are cardinally invited for dinner`);
    
});
// answer no 16
console.log("Great we found a bigger table");
// unshift method to add new name in starting
guestList.unshift("Mehrunisa");
console.log(guestList);
// splice() to add
guestList.splice(Math.floor(guestList.length/2),0, "Usaama");
// push() to add on end, its for append
guestList.push("Ansar");
console.log(guestList);
// foreach method to invite all seperately
guestList.forEach(family => {
    console.log(`dear ${family} you are cordinally invited for dinner`);
    
});

