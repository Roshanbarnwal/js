function calculate(...num){
    return num;
}
console.log(calculate(200,400,500))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

const arr = [200,300,400]
function myArr(x){
    return x[1]
}
console.log(myArr(arr));
console.log(myArr([1,3,4,6,9]));