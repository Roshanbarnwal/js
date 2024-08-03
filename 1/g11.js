let str = "roshan barnwal";
console.log(str.__proto__);
console.log(str.__proto__.toUpperCase());
console.log(str.toUpperCase());
console.log(`Hello, ${str}. How are you?`);
console.log(str['0']);

const str1 = str.substring(4,-13); //negative index change into 0
console.log(str1);
console.log(str.substring(4,-13)); //lowest index will be starting point
console.log(str.slice(-10,6));
console.log(str.substring(-10,10));

const url = "https://hitesh.com/hitesh$20barnwal";
console.log(url.replace("$20","-"));

console.log(url.includes("gmail"));
console.log(url.split("."));