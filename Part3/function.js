//function defination

// => function FunctionName(){
    // function scope/ Definiation}

function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
}
sayMyName() //function sayMyName(){}  => function referencee (execute)

//add two numbers in function
function addTwoNumbers (num1, num2){
console.log(num1+num2);
}
addTwoNumbers (3,4) //try with null, undefine, "r", "4" ...etc  
const result = addTwoNumbers (3,4)
console.log("Sum:", result);
console.log("================================================");

function addTwoNumbers (num1, num2){
    let result = num1 + num2
    return result   
    //return num1+ num2 => method 2
}
console.log("Result:", result);
console.log("================================================");


function loginUserMsg (username = 'User'){         //if(!username){ => is same as the line}
    if (username === undefined) {
        console.log("Plesae enter a username");
        return
    }
    return `${username} Just logged in`
}
console.log(loginUserMsg("Suman"));
console.log(loginUserMsg());