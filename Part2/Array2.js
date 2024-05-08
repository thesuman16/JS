const boys = ["Suman","Akash",]
const girls = ["Rikta","Disha","Sanjana"]
// boys.push(girls) //array as a data
console.log(boys);
// console.log(boys[2][1]); //access elements from array

console.log("================================================");

const allName = girls.concat(boys) // two array as a new array
console.log(allName);

console.log("================================================");

const spreadName = [...boys, ...girls] // two array as a new array
console.log(spreadName); 

console.log("================================================");

const newArr = [1,2,3,[3,6,5,4],3,4,[0,4,5,[9,6,7]]]
const newArr45 = newArr.flat(Infinity)
console.log(newArr45);
console.log("================================================");

console.log(Array.isArray("Suman"));
console.log(Array.from("Suman")); //convervt to array
console.log(Array.from({name: "Suman"})); //convervt to array //EMPTY ARRAY
console.log("================================================");

let score1 = 100
let score2 = 500
let score3 = 400
console.log( Array.of(score1,score2,score3));