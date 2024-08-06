console.log(null == undefined) //true
console.log(undefined == null) //true
console.log(10 == '10'); //ToNumber('10') => 10, 10 == 10 -> true
console.log(10 == '12'); //ToNumber('12') => 12, 10 == 12 -> false
console.log('99' == 99); //ToNumber('99') => 99, 99 == 99 -> true
console.log(false == 0); //ToNumber(false) => 0, 0 == 0 -> true
console.log(true == 10); //ToNumber(true) => 1, 1 == 10 -> false
console.log(10 == {valueOf(){return 10}}); //ToPrimitive({valueOf(){return 10}}) => 10, 10 == 10 -> true
/**
 * There can be chances for same decimal numbers not to be equal because of precision. So, it is said to avoid decimal
 * comparison if possible in binary Search of real numbers
 */
let a = 5;
if(a){
    console.log("Hi, there."); //this line will be printed
}

if(a == true){ //5 == 1 -> false
    console.log("By by"); //this line won't be printed
}
//x > y; '>' applies ToPrimitive(x,hint = 'number') & ToPrimitive(y,hint='number')