// Primitive Datatypes
// 7 types --> String, Number, Boolean, NULL, Undefined, Symbol, BigInt


const score = 100
const scoreVal = 100.4
const isLoggedin =false
const temp = null
let userEmail ; //let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // both similar but as uniq , return is not same

const BigNum = 4378888748728472n


// Non - Primitive Datatypes (Reference)
// types --> Array, Object, Functions

const friend = ["Suman", "Akash", "Disha", "Dishar bestie"]; //array

let myObj = {
    name: "Suman",
    age: 24
}

//function
const myFunction = function(){
    console.log("Hello world");
}

console.log( typeof temp);