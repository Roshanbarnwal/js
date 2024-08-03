const balance = 1000
if (balance > 500) console.log("test"), console.log("not a standard notion to use comma");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    default:
        console.log("invalid");
        break;
}

const userEmail = " "
if(userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email")
}

/*
falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values: "0", 'false', " ", [], {}, function(){}
*/

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log(`emptyObj is empty`)
}
//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val2 = null ?? 11
val3 = undefined ?? 12
val4 = null ?? 10 ?? 20
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

//Terniary operator
//condition ? true: false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log
("more than 80")