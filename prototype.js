let EmpDetails=function(name,age){
    this.name=name;
    this.age=age;

};

EmpDetails.prototype.getName=function(){
    return this.name;
}

EmpDetails.prototype.getAge=function(){
    return this.age;
}

let emp1= new EmpDetails('Goutham',25);
let emp2=new EmpDetails('Bitra',30);

console.log(emp1.getName());
console.log(emp2.getAge());