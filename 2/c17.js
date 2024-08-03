const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

const obj3 = {obj1,obj2}
console.log(obj3);
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);
console.log(`${obj1} obj1 is equal to obj4 : ${obj1 === obj4}`);
console.log(obj1);

const obj5 = {5: "e", 6: "f"}
const obj6 = Object.assign({},obj1,obj2,obj4,obj5) //removes the duplicates
console.log(obj6 === obj1)
console.log(obj6)

console.log("spreaded obj7");
const obj7 = {...obj1,...obj2}
console.log(obj7)

console.log("object.keys, object.values, object.entries")
console.log(Object.keys(obj6))
console.log(Object.values(obj6))
console.log(Object.entries(obj6))

console.log(obj6.hasOwnProperty('isLoggedIn'))