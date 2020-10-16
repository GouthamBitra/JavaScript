let number=[1,2,3,4,5];
console.log(number)

let cars=new Array('BMW', 'Audi', 'Skoda');
console.log(cars)

cars.push('VW')

//abcd

console.log(cars)

console.log(cars.length);

for(let x in cars){
    console.log(cars[x]);
}

for(let x of cars){
    console.log(x);
}