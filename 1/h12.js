let x = 123.4569;
let y = new Number(123.455);
console.table([x,y]);
console.log(y);

console.log(x.toString().length);
console.log(x.toFixed(2),typeof x.toFixed(2));
console.log(x.toPrecision(3),typeof x.toPrecision(4));
console.log(123.879.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

const min = 10;
const max = 20;
let a = Math.floor(Math.random()*(max-min+1)) + min;
console.log(a);
