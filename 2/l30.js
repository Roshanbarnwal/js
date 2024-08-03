const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => num > 4)

console.log(newNums.map( (x) => [x,x-1]))
console.log(newNums.flatMap( (x) => [x,x-1]))
// console.log(myNums)

//Array.reduce((total,value,index,Array) => { return total + value, inital_value})
//By default, total's initial value is equal to first element of the array
console.log(myNums.reduce((total,value) => 
    {   
        console.log(`total: ${total} and value: ${value}`)
        return total + value //initial_value is not possible like below
    }));

console.log(myNums.reduce((total,value) => total + value, 0))
console.log(myNums.reduce((total,value) => total + value, 1))

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 5999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
    {
        itemName: "data science course",
        price: 22999
    }
]

const priceToPay = shoppingCart.reduce((total,item) => 
                                total + item.price, 0)
console.log(priceToPay)