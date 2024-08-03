//singleton created by constructor
//Object.create
//object literals
let mySym = Symbol("key1");
const jsUser = {
    name: "roshan",
    "full name" : "roshan Barnwal",
    [mySym]: "mykey1",
    age: 22,
    location: "odisha",
    isLoggedIn: false,
    lastLoginDays: ['monday','tuesday']
}
console.log(jsUser);
console.log(jsUser['full name'])
jsUser.name = 'sanyam'
console.log(jsUser.name);
// Object.freeze(jsUser);
jsUser.name = "roshan";
console.log(jsUser.name);
console.log(jsUser[mySym]);
console.log(jsUser.mySym); //mySym properties doesn't exist

jsUser.greeting = function (){
    console.log("hello " + this.name);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());