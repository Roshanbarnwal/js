/**
 * In JS,
 *  function scope means throughout the function even before the
 *  declaration.
 *  global scope means throughout the program even before the 
 *  declaration.
 *  block scope means within the block right after the declaration.
 */
/**
 * let -> whenever we initialize a variable with let, it always gets
 * the scope of enclosing Block.It won't be accesible outside the block
 * or before its declaration. It declares a block-scoped local variable,
 * but never a complete global scope.
 * -> let doesn't allow redeclaration but var does.
 * -> const also has block scope(same as let) except reassignment is not allowed.
 */
{
    let a = 10;
    console.log("a: ",a);
}
// console.log(a); //error
function fun(){
    // console.log("x: ",x); //cannot acces x before initialization
    let x = 8;
    console.log("x: ",x);
    let b;
    console.log("b: ",b);
}
fun()
/**
 * How JS parses the code?
 * -> So we know that JS is not interpreted, it definitely is hybrid i.e. compiled + interpreted.
 * So, whenever we try to execute a JS code, JS first parses the whole code, in this parsing
 * phase it assigns scopes to variables/function. Once done, then it reads the code & executes it.
 * 
 *-> Every variable in your code will be used in one of the following ways:
    1. either it will be getting a value assigned i.e. it is used as a target.
        e.g. x = 5;
    2. or it will be used to retrieve a value i.e. it will be used as source.
        e.g. y = 10 + x
            console.log(x)
    
 */