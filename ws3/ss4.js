/**
 * NaN (Not a Number)
 * typeOf NaN -> //number
 * ->It doesn't actually mean not a number, rather it gives
 * notion of an invalid number.
 * ->NaN is the only primitive value in JS that doesn't follow
 *   identity property and is not equal to itself
 */
console.log(NaN === NaN,NaN == NaN,NaN == "ro",1 == NaN);
console.log(null == undefined,null === undefined,null === NaN);
console.log(null == NaN,undefined == NaN);
let x = NaN;
console.log(x === x);
/**
 * isNaN() -> this function has some issues
 *  this isNaN() funciton coerces the argument into number before checking for
 *  NaN. Now string is not NaN,right? but when we convert string 
 *  like 'abc' to a number it becomes NaN & hence isNaN('abc') 
 *  returns true.
 */
let a = "10", b = "abc", c ="roshan", d = 10 - c;
console.log(a,b,c,d);
console.log(isNaN(a),isNaN(b),isNaN(c),isNaN(d));
let y = NaN;
console.log((typeof(y) == "number" && isNaN(y)) ? "NaN value": "Not NaN value")
/**
 * Number.isNaN() is utility function which doesn't do coercion
 */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"));