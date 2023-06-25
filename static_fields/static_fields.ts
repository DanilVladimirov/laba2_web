class Person {
  
    age: number;
    name: string;
     
    static retirementAge: number = 65;
    static calculateYears(age: number): number{
         
        return Person.retirementAge - age;
    }
     
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {}
 
let years = Employee.calculateYears(36);
console.log(Employee.retirementAge);