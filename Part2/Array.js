//Array
//array is resizeable in JS and mix of data types.
//declear array
const myArr = [1,4,7,2,8,9]
const myFriends = ["Suman", "Sanjana", "Akash","Disha"]

const myArr2 =  new Array (1,32,5,6,)

console.log(myArr[1]);

//Array methods
myArr.push(6) // add new value in Array
myArr.push(0)
myArr.pop()  // remove last value from array
// console.log(myArr);
console.log("================================================");

myArr.unshift(77) //add value in first
myArr.shift()

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));
console.log(myArr);

console.log("================================================");

const newArr = myArr.join()
console.log(newArr);
console.log("================================================");

//Slice and Splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

console.log("================================================");

const myn2 = myArr.splice(1,3) //splice manipulate orginal array and remove the array in range create new.
console.log("C",myArr); 
console.log(myn2);
//  outout:
// C [ 1, 8, 9, 6 ]
// [ 4, 7, 2 ]
