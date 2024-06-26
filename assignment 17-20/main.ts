// assignment 17
let guestList:string[] = ["Absar", "Jaweriya", "Aslam"];
// print msg
console.log("unfortunately! the new dinner table wont arrive so we can not invite more");
// add new guest
guestList.unshift("alice", "bob");
console.log("updated list of guest:", guestList);
// removing guest by pop method
while(guestList.length > 2) {
    let removeGuest:string | undefined = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry, ${removeGuest}, we cant invite you`);
        
    }
}
// print msg for 2 people who are invited
guestList.forEach(finalGuest => {
    console.log(`Dear ${finalGuest}, you both are invited for the dinner`);
    
});
// remove last 2 names too
guestList.splice(0, guestList.length)
// print updated empty list
console.log("Updated Empty list!", guestList);
