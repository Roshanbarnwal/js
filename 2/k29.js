// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    process.stdout.write(num + " ")
    console.log(num)
}

const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)
for(const key of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(`destructure: ${key} ${value} ${key,value} 
        ${value,key} ${key+value}`)
}
for(const key in map){ //no output
    console.log(key);
}

//for of objects
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for(const [key,value] of myObj){
//     console.log(key, ' :- ' ,value);
// }
// for(let value of myObj){
//     console.log( value);
// }
for(let key in myObj){
    console.log( `${key} is  ${myObj[key]}`);
}

//array
const programming = ['js','rb', 'py', 'java', 'c']
for(const key in programming){
    console.log(programming[key])
}

//arr.forEach((value,index,arr) => {})
programming.forEach((x) => console.log(`forEach: ${x}`))
// programming.forEach(function (x) => console.log(`forEach: ${x}`)) //error

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})