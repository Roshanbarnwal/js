console.log("2" > 1); //changes to number I guess //true
console.log("02" > '1'); //compare alphabetically //false
console.log("02" > 1); //changes to number I guess //true

console.log(null > 0);
console.table([null == 0, null >= 0, undefined == 0, undefined >=0])
//equality and comparisons work differently. comparison changes null into number while 
//equality doesn't.

// === ; strint check => data type as well as value
