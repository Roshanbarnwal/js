function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
//when destructuring arrays,the order in which variables are declared is important.
//   const [add, subtract, multiply, divide] = calculate(4, 7);
  const [subtract, add, multiply, divide] = calculate(4, 7);
  
  console.log(typeof calculate(4,7));
  console.log(calculate(4,7) instanceof Array)
  console.log(add)
  console.log(subtract)
  console.log(multiply)
  console.log(divide)

let [firstName, , ...lastName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);
console.log(lastName);

//data can also be extracted from the array returned from a function
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [stName, secondName] = NamesList();

console.log(stName);
console.log(secondName);
