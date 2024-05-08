function one (){
    const username = "Suman"
    function two (){
        const website = "YT"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


console.log("===================if else scope=============================");
//if else scope

if (true) {
    const username = "Rikta"
    if (username === "Rikta") {
        const website = " Facebook"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//normal
addOne = 4
function addOne(num) {
    return num+1
}

// Hold function in a variale with declear
//addTwo = 5 - not work here

const addTwo = function (num) {
    return num + 2
}
//hoisting