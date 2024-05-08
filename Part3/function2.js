function calculatePrice(...num1){ //...=> rest operator
    return num1
}
console.log(calculatePrice(200,300,100));

const user = {
    username : "Suman",
    price : 200
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handelObject(user)
handelObject({
    username : "ABC",
    price : 900
})

const myNewArr = [23,44,67,77]
function returnSecVal (getArray ){ //getarray - paramete
    return getArray [1]
}
console.log(returnSecVal(myNewArr));
console.log(returnSecVal([274,40,42,208]));