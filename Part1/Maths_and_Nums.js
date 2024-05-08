// Nums
const score = 340
console.log(score);

const balance = new Number (200)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
const anotherBal = 223.908
console.log(anotherBal.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log("//=================MATHS========================//");
//=================MATHS========================//
console.log(Math); // object

console.log(Math.abs(-48)); //convert neg value to positive
console.log(Math.round(64.587)); // most used
console.log(Math.ceil(64.587)); // round off lowest number from round value
console.log(Math.floor(64.587));// round off highest number from round value

console.log(Math.min(3,2,5,1,7,6,4));//find minimun value
console.log(Math.max(3,2,5,1,7,6,4));//find maximun value
console.log(Math.random());//between 0-1

console.log((Math.random()*10) +1);//between 1-10
console.log(Math.floor(Math.random()*10) +1);//between 1-10

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min +1)) + min)

