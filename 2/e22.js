//closure function
function one(){
    const username = 'roshan';

    function two(){
        const website  = 'youtube'
        console.log(username);
    }
    //console.log(website); //website is not accessible
    two()
}
one()

if (true){
    var username = "saurav"
    if(username === "hitesh"){
        var website = " youtube"
        console.log(username + website)
    }
    console.log("hello " + website);
}
console.log(username);

addOne(5)
function addOne(num){   //hoisted
    return num + 2
}

addTwo(6)
const addTwo = function(num){   //not hoisted
    return num + 2
}
addTwo(5)