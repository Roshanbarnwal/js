let a = parseInt("3")
console.log(a)
process.stdout.write("hello ")
process.stdout.write("world!!\n")
console.log(typeof console.log(a)) //console.log() returns undefined
//https://262.ecma-international.org/#sec-tostring
let obj = {a:10}
console.log(obj)
console.log(obj.valueOf())
console.log(obj.toString())
console.log(2-[],3-[''],4-['r'],5-['0'],6-['o'],7-[undefined],8-{},9-[null])
//overriding the valueOf() and toString() of obj1
let obj1 = {b:99,valueOf(){return 98},toString(){return "roshan"}} 

console.log(obj1)
console.log(obj1.valueOf(),obj1.toString())

console.log(1-"",2-"  ",3-'0',4-'-0',(5-'3.24').toFixed(2),6-'0.',7-'.',8-'009',10-'0xf',11-'0xz',12-'0o12')

let x = {a:3}
console.log(3+x) //(3+x) calls x.valueOf() which returns non-primitive so then x.toString() is called
                 //which returns "[object Object]"
console.log(3-x)
let obj2 = {a:10,valueOf(){return obj2.a}}
console.log(100-obj2)
/*
Every language has got some mechanism for type interconversion: for example-> in Java if we do:
    System.out.println("hello" + 22);
the above code will print -> Hello22 i.e. it did convert 22 from number into string and concatenated.
Coercion -> type interconversion
Abstract operations -> these are operations/functions which are not available for end users to use.
But JS internally uses it & these are mentioned in the official docs to actually aid the documentation.
E.g. ToPrimitive(),ToString(),ToNumber(),ToBoolean()
We cannot directly call them. But few JS operations like '-','+',etc. internally calls them and hence we 
can mimic them using these operations.

# ToNumber(argument)
 We can use '-' to mimic ToNumber(). Substraction always converts both the operands to a Number
 (a-b) :- a->lval and b->rval
 lnum = ToNumber(a);
 rnum = ToNumber(b);
 return lnum - rnum;
 
    The abstract operation ToNumber(argument) converts 'argument' as per the below list:
    a. Undefined -> return NaN
    b. Null -> return +0
    c. Boolean -> if argument is true,return 1 else +0
    d. Number -> return argument(no conversion)
    e. String -> if it can be converted to a number,then OK otherwise NaN.
    f. Symbol -> Throw a TypeError exception
    g. Object -> primValue = ToPrimitive(argument,hint="Number")
                 return ToNumber(primValue)

# ToString(argument)
 We can use '+' to mimic ToString(argument)
 (a-b) :- a->lval and b->rval
 lprim = ToPrimitve(a);
 lprim = ToPrimitive(b);
 if(lprim is a string or rprim is a string)
    we convert both to string and do string concatenation and return it.
 else
    lnum = ToNumber(lprim)
    rnum = ToNumber(rprim)
    return lnum + rnum

The abstract operation ToString(argument) converts 'argument' as per the below list:
    a. Undefined -> return "undefined"
    b. Null -> return "null"
    c. Boolean -> if argument is true,return "true" else return "false"
    d. Number -> 
    e. String -> return argument
    f. Symbol -> Throw a TypeError exception
    g. Object -> primValue = ToPrimitive(argument,hint="String")
                 return ToString(primValue)
e.g.
    null -> "null" , undefined -> "undefined" , true -> "true"
    false -> "false", 3.145 -> "3.145", 0 -> "0", -0 -> "0",
    [] -> "", [1,2,3] -> "1,2,3", [null] -> "", [undefined] -> "",
     [null,undefined] -> ","
     [[],[],[]] -> ",,,"
     [,,,,] -> ",,,,"

# ToPrimitive(input [,preferredType])
   This function takes an input argument and converts it into a non-object type(primitive type). 
   If it can't convert it can throw error.
   It takes one more optional parameter called as preferredType. If we have
   2 or more than 2 values that can become answer, we take the preferredType.
   ->
     if preferredType is not given, hint = "default"
     else if preferredType is "string", hint = "String"
     elseif preferredType is "Number", hint = "Number"

     if hint is "default", then hint = "Number"
     calls OrdinaryToPrimitive(input,hint)
        -> hint == "String" 
             a = hint.toString().
             if a is object, b = a.valueOf()
                if b is object, throw error
                else return b
             else return a
        -> hint == "Number"
             a = hint.valueOf()
             if a is object, b = a.toString()
                if b is object, throw error
                else return b
             else return a
*/
/*
valueOf() and toString() are not abstract operations. That means we can call them.
By default, toString() on an object returns "[object Object]"
By default, valueOf() on an object returns the same object
*/