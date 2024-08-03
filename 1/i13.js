//date: january 1, 1970
/*
d.getFullYear()
d.getDate()
d.getDay() ,d.getMonth(), d.getTime() //ms, 
*/
let d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleString());
console.log(typeof d);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(d.getTime());
console.log(Date.now());

let a = d.toLocaleString('default',{
    weekday: "long",

})
console.log(a);
