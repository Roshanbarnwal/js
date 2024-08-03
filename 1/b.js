let score = "33";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(Number("33abc"));
console.log(typeof Number("33abc"));

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(Boolean(""));
//1 => true; 0 => false;
//"" => false
//"roshan" => true

let someNumber = 33
console.log(String(someNumber));
console.log(typeof String(someNumber));