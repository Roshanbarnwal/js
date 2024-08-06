/**
 * ToBoolean
 * -> The ToBoolean abstract operation converts the given type to a Boolean value. 
 *    ToBoolean works a bit differently when compared to ToString or ToNumber. It 
 *    maintains a list of values which when received as an argument returns False.
 *    And everything apart from the list of values, returns True.
 * 
 * -> List of falsy values
 *      a. null
 *      b. undefined
 *      c. +0, -0, NaN , ""(empty string), false
 *    If we get any one of these values in the argument, we return false else true.
 * 
 * -> How can we test the ToBoolean operation?
 *      We can use logical Not operator (!)
 *      !a -> oldValue = ToBoolean(a)
 *            if (oldValue is True)
 *              return false
 *            else 
 *              return true
 */
console.log(!null,!0,!(-4),!{},![],!" ",!"");
console.log(!console.log());
/**
 * Abstract Equality Comparison('==') and Strict Equality Comparison('===')
 *  x '==' y
 *    If Type(x) is the same as Type(y), then
 *      return the result of performing x === y
 *    If x is null and y is undefined, return true
 *    If x is undefined and y is null, return true
 *    If x is number and y is string, x == ToNumber(y)
 *    If x is string and y is number, ToNumber(x) == y
 *    If x is boolean and y is number, ToNumber(x) == y
 *    If x is either String,Number, or Symbol and y is Object, return the
 *      result of the comparison x == ToPrimitive(y)
 *    ...
 * 
 *  x '===' y
 *      If Type(x) is different from Type(y), return false
 *      If Type(x) is Number, then
 *          If x is NaN, return false
 *          If y is NaN, return false
 *          If x is the same Number value as y, return true
 *          If x is +0 and y is -0, return true
 *          If x is -0 and y is +0, return true
 *          Return false
 *      Return SameValueNonNumber(x,y)
 * SameValueNonNumber(x,y)
 *  Assert: Type(x) is not Number
 *  Assert: Type(x) is the same as Type(y)
 *  If Type(x) is Undefined, return true
 *  If Type(x) is Null, return true
 *  If Type(x) is String, then
 *      if x and y are exactly the same sequence of code units,return true
 *      ,otherwise, return false.
 *  If Type(x) is Boolean, then
 *      if x and y are both true or both false,return true otherwise, return 
 *      false
 *  If Type(x) is Symbol, then
 *      if x and y are both the same Symbol value, return true,otherwise, return
 *      false
 *  If x and y are the same Object value, return true. Otherwise, return false
 *      x = {a:10},x === x //true
 *      {b: 10} === {b : 10} //false
 */
//In JS NaN is the only primitive value not equal to itself
console.log("NaN: ",NaN === NaN,NaN === 23,NaN == NaN);
console.log(0 === -0)
console.log(-0 === 0)
console.log(undefined === undefined)
console.log(null === null)
console.log("roshan" === "roshan")
console.log({} === {});
console.log(Symbol("roshan") === Symbol("roshan"));
let y = Symbol("roshan");
console.log(y === y)
/**
 * Actually both == and === checks the types but the difference is both of them do
 * something different after checking the types.
 * So == does type checking and if types are same it calls ===
 * === checks types & if types are not same, returns false
 * 
 * The main difference is 
 *      The abstract equality (==) does coercion if types are not same
 *      Strict equality (===) never does coercion
 */
/**
 * REPL -> Read Evaluate Print Loop
 * browser console is REPL
 */