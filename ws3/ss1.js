console.log("roshan" + {"a" : 10});
/**
 * "roshan" -> is alread a primitive
 * {"a" : 10} -> is not a primitive, so, we call ToPrimitive without a hint,
 * means hint -> number
 * we first call valueOf on {"a":10} -> and it returns same object
 * we call toString() -> toString will return "[object Object]" which is a string i.e. prim.
 * 
 * "roshan" + "[object Object]" -> roshan[object Object]
 */
console.log(10 - {a:45});
/**
 * 10 is already a number
 * {a:45} is going to get converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint == Number
 * first we call valueOf -> it returns the same object -> {a:45}
 * then we call toString -> it returns "[object Object]" which is primitive
 * So call ToNumber on "[object Object]" again which gives NaN
 * 
 * 10 - NaN -> NaN
 */
let x = {b:90, valueOf(){return 2;}, toString(){return "custom";}}
console.log(x-10)
console.log(2-[2,3,4])
console.log([2,3,4].valueOf(),[2,3,4].toString())
console.log({}.toString())

console.log({} + "hello");
/**
 * In browser console, 
 *      {} + "hello" will give error because if a line starts with {},it is considered as block
 *      
 *      "hello" + {} -> hello[object Object]
 */
//here, both valueOf and toString are returning Object, so TypeError exception is thrown.
// console.log("roshan" + {a : 90, valueOf(){return {}}, toString(){return {}}});

console.log(`And, "${[].toString()}"`)