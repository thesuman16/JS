//Declear Objects -> literals & constracter
//singleton
//object.creat

//Object literals
//declear object
const mySym = Symbol("key1")

const SpeedUser ={
    name: "Suman",
    "Full Name" : "Suman Ghosh",
     mySym : "mykey1", //this is not an way to define symbol
    [mySym] : "mykey1", //syntax of symbol
    age: 24,
    location: "Gurap",
    email: "suman@speedmodi.com",
    isloggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}  
console.log(SpeedUser);
console.log(SpeedUser.email);
console.log(SpeedUser["email"]); //Because email, name treat as a string
console.log(SpeedUser["Full Name"]); //automatic detacted
console.log(SpeedUser.mySym); //it is not used as symbol
console.log(typeof SpeedUser.mySym); //string not a symbol
console.log(SpeedUser[mySym]); //it is  used as symbol

SpeedUser.email = "suman@google.net" //change user email
// Object.freeze(SpeedUser) //freez a user
SpeedUser.email = "suman@change.net" //not change because we freez speeduser in previous line
console.log(SpeedUser);

console.log("================================================");

SpeedUser.greeting = function(){
        console.log("Hello User");
}
SpeedUser.greeting2 = function(){
        console.log(`Hello User, ${this.name}`);  // `` -> string interpolation
}
console.log(SpeedUser.greeting); //undenined if freez and on unfree function return back
console.log(SpeedUser.greeting()); // give error, first unfrezz jsuser
console.log(SpeedUser.greeting2()); 