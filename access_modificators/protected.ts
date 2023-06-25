class Person {
    protected name: string;
    private year: number;
    constructor(name: string, age: number) {
  
        this.name = name;
        this.year = this.setYear(age);
    }
    protected printPerson(): void {
 
        console.log(`Имя: ${this.name}  Год рождения: ${this.year}`);
    }
    private setYear(age: number): number {
  
        return new Date().getFullYear() - age;
    }
}
class Employee extends Person {
 
    protected company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public printEmployee(): void {
        this.printPerson();
        console.log(`Компания: ${this.company}`);
    }
}
 
let sam = new Employee("Sam", 31, "Microsoft");
sam.printEmployee();