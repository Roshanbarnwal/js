/**
 * Boxing 
 *  It is a phenomena in JS when it tries to convert primitives
 *  into objects either implicitly or explicitly
 *  (9) is eligible for boxing
 * The terms 'boxing' or 'hoisting' will not be found in documentation
 */
// console.log(9.toString()); //error
console.log((9).toString(),9..toString());
console.log(Number(9).toString());
let x = 9;
console.log(x.toString());
console.log("abc".toString(),"abc".length);

//shell script is a pure interpreted language
//c++ is a compiled language