//singleton //constarctor
// const tinderUser = {} //non singleton object

const tinderUser = new Object() //singleton object
tinderUser.id = "syy56"
tinderUser.name = "Suman"
tinderUser.isloggedIn = false

console.log(tinderUser);

console.log("================================================");

const speeduser = {
    email : "suman@mail.com",
    fullname : {
        Userfname : {
            fname : "Suman",
            lname : "Ghosh"
        }
    }
} 
console.log(speeduser.fullname.Userfname.fname); 
console.log("================================================");
//MERGE  objet
const obj1 = {1: "a", 2: "b"} //keys as number, values as string
const obj2 = {3: "c", 4: "d"} //keys as number, values as string
const obj3 = {obj1, obj2}
console.log("object 3 is ", obj3); //merge two objects
console.log("================================================");

const obj4 = Object.assign(obj1, obj2)
console.log("object 4 is ", obj4); //merge two objects
console.log("================================================");

const obj5 = Object.assign({},obj1, obj2)   //for multiple object 
console.log("object 5 is ", obj5); //merge two objects
console.log("================================================");
//main merge method......... spread method
const obj6 = {...obj1, ...obj2}
console.log(obj6);

console.log("====================Data come from data base =======================");

const user = [
    {
        email : "s@mail.com",
        id : "4857"
    },

    {
        email : "s@mail.com",
        id : "4857"
    },

    {
        email : "s@mail.com",
        id : "4857"
    },
     {
        email : "s@mail.com",
        id : "4857"
    }
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //output data type is array
console.log(Object.values(tinderUser)); //values
console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty('isloggedin')); // check property to avoid DB crash