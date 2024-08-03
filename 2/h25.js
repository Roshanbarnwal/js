/*
Javascript Execution COntext (JEC)
- GLobal Execution COntext <= this
- Function Execution Context
- Eval Execution Context

Two phase: Memory phase & execution phase
*/
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

/*
Steps:
1. Global Execution : this
    - in browser, this represents 'window object'
2. Memory Phase
    . val1 -> undefined
    . val2 -> undefined
    . addNum -> definition
    . result1 -> undefined
    . result2 -> undefined

3. Execution Phase
    . val1 -> 10
    . val2 -> 5
    . addNum -> it creates its own execution context 
        (new variable environment + execution thread)
        1. Memory phase
            . val1 -> undefined
            . val2 -> undefined
            . total -> undefined
        2. Execution Context
            . num1 -> 10
            . num2 -> 5
            . total -> 15 (returned to parental execution context (GE))
            . this execution context is deleted
    . result1 = 15
*/
//callStack of function calls