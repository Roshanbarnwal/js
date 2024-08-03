const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
  
myVehicle(vehicleOne);
  
function myVehicle({type, color, brand, model}) { //note that the object properties do not need to be declared in a specific order.
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  
    console.log(message);
}

// let {a,b,c,d } = vehicleOne;   //while destructuring objects, its properties name are used
let { brand,model,type,...rest} = vehicleOne;
console.log(brand)
console.log(model)
console.log(type)
console.log(rest)