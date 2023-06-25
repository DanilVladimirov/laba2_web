class Person {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
}
  
class Employee extends Person {
  
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}
 
function printPerson(user: Person): void{
    console.log(`Person ${user.name}`);
}
  
function personFactory(userName: string): Person {
    return new Employee(userName, "не установлено");
}
  
let tom : Person = new Employee("Tom", "Microsoft");
printPerson(tom);
 
let bob = personFactory("Bob");
printPerson(bob);