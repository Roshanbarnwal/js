/**
 * Block Scope
 * In Js we can use a pair of curly braces to declare a block
 * {
 * ...  //block ->ifelse block,for block,raw block
 * }
 * Now if a variable/function is only accessible/visible inside a block then
 * it will be having block scope
 * 
 * let,var,const
 * var -> whenever we use a var anywhere inside a function, the variable gets function
 * scope. If we use it outside a function, no matter if it is enclosed in a block or
 * not, it will give the variable global scope.
 */
if(true){
    var x = 11;
    console.log(x);
}
console.log(x - 1.5); //x is undefined
console.log("a: ",a); //hoisted
{
    var a = 10;
    console.log(a);
}
console.log(a);
function fun(){
    console.log(y); //undefined hoisting
    var y = 12;
    console.log(y);
}
// console.log(y);
if(false){          //this proves js is not interpreted language
    var z = 1.5;    //otherwise accessing 'z' outside would give error
}
console.log("z: " ,z);