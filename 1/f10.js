// Stack (Primitive), Heap (Non-primitve)
// stack gives copy while heap gives reference 

let a = "roshanbarnwal"; //stack
let b = a;  //copy of a is assigned

console.log(b);
b = "sanyam";
console.log(b);

let user = {
    email : "user@google.com",
    upi: "user@ybl"
}
let user2 = user; //reference of user is assigned
console.log(user.email);
user2.email = "roshan@google.com";
console.log(user.email);