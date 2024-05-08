//stack (Primitive) and  ==> you get copy of vale
//heap (Non primitive) memory ==> you get reference of vale

let myName = "Suman" //stack
let anotherName = myName
anotherName = "rikta"


console.log(myName);
console.log(anotherName);
// heap
let userOne = {
    userEmail : "User@speedmodi.com",
    upi : "suman@ysdf"
}

// let userTwo = {
//     userEmail : "User2@speedmodi.com",
//     upi : "suman2@ysdf"
// }

user3 = userOne
userOne.userEmail = "suman@abju.com"
console.log(userOne.userEmail);
console.log(user3.userEmail);