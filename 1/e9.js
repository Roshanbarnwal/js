/*
Primitive (pass by value)
7 types: String, Number, Boolean, null, undefined, Symbol
         BigInt

Reference ( Non primitive)
Array, Objects, Functions

JS is dynamically typed language. variables are give datatype 
runtime
*/
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
console.log(id == anotherId);

const heroes = ["s","n","d"]
let obj = {
    name : "roshan",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(Array.isArray(heroes));
console.log(heroes.constructor == Array);
console.log(heroes instanceof Array);
console.log(typeof myFunction);