//this => current context
const user = {
    username : "Suman",
    price : 899,

    welcomeSms: function () {
        console.log(`${this.username} , welcome to site`);
    }
}
user.welcomeSms()

//basic arrow fun
const addtwo = (num1, num2) => {
    return num1+ num2
}
console.log(addtwo(3,5));

//Implicit return
const addT = (num1, num2) => (num1 + num2)
console.log(addT(3,5));