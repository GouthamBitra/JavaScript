// class Employee{

//     setDetails(name,id){    //setting funtion
//         this.name=name;
//         this.id=id;

//     }
// }

// let emp1=new Employee(); 
// let emp2=new Employee();       //object intializtion
// emp1.setDetails('Goutham','007');
// emp2.setDetails('Bitra','008');
// console.log(emp2.name);
// console.log(emp2.id);

//creating class with constructors

class Employee{
    constructor(name,id){
    this.name=name;
    this.id=id;
    }
}

let emp1=new Employee('Goutham',001);
let emp2=new Employee('Bitra',002);

console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);