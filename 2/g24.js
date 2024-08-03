//Immediately Invoked function expressions
(function chai(){   //named IIFE
    console.log(`DB CONNECTED`);
})(); //must end with semi-colon for js to understand to end IIFE in this context


( (name) => {
    console.log(`DB CONNECTED 2 ${name}`)
})("roshan barnwal");