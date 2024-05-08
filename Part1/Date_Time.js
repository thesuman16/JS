//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log("____________________________________________");

console.log(typeof myDate);
console.log("____________________________________________");

let myNewDate  = new Date (2024, 0, 3) // month start from 0 in JS - 0 -> january
console.log(myNewDate.toDateString());

let myNewDate2  = new Date (2024, 0, 4, 3,4,67)
console.log(myNewDate2.toLocaleString());
console.log("____________________________________________");

let myNewDate3 = new Date ("01-20-2023")
console.log(myNewDate3.toLocaleDateString());

let myTimeStamp =Date.now
console.log(myTimeStamp()); //give time in mili second => use in bookig system
console.log(myNewDate3.getTime());
console.log(Math.floor(Date.now()/1000));