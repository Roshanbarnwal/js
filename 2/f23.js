const user = {
    username: "roshan",
    price: 999,

    welcomeMessage: function(){
        console.log(this)
        console.log(`${this.username} , welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this) //in browser, window Object while here empty object

function chai(){
    let username = "hitesh"
    console.log(this);
    // console.log(this.username)  //username won't be accessed
}
chai();

//Arrow function
console.log("arrow function")
const chai1 = () => {
    let username = "roshan"
    console.log(this.username) //undefined
    console.log(this) //empty object
}
chai1()

const add = (num1, num2) => {
    return num1 + num2
}

const add1 = (num1, num2 ) => num1 + num2
console.log(add1(9, 8))

const add2 = (x,y ) => ({username: "roshan"}) //use parenthesis for return object in arrow fxn
// const add2 = (x,y ) => {username: "roshan"}
console.log(add2(9,8))
console.log("obj " + {username: "sanua"})
console.log({username: "barnwal"})