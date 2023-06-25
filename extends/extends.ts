class Person {
   
    name: string;
    constructor(name: string) {
   
        this.name = name;
    }
    print(): void {
        console.log(`Имя: ${this.name}`);
    }
}
   
class Employee extends Person {
   
    company: string;
    constructor(name: string, company: string) {
   
        super(name);
        this.company = company;
    }
    print(): void {
        super.print();
        console.log(`Працює в компанії: ${this.company}`);
    }
}
 
let bob: Employee = new Employee("Bob", "Microsoft");
bob.print();