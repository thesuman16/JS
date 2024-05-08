const name = "Suman"
const num = 39

// console.log(name + num + " Vale");
// string interpolation -- modern way to right syntax
console.log(`Hello my name is ${name} and my Number is ${num}`); 

const myName = new String("Suman12") // declear string is another way
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));
console.log(myName.indexOf("m"));


//slicing

const newString = myName.substring(0,4)
console.log(newString);

const anotherString = myName.slice(-5,4)
console.log(anotherString);

//trim and replace method
const newTrim = "    Suman      "
console.log(newTrim);
console.log(newTrim.trim());

const url = "https://salesiq.zoho.in/speedmodi%20webserver"
console.log(url.replace('%20','-'));
console.log(url.includes('speed'));