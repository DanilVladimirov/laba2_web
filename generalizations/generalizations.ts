interface Named{
    name: string;
}
class NameInfo<T extends Named>{
 
    printName(obj: T): void{
 
        console.log(`Name: ${obj.name}`);
    }
}
 
class User{ 
    constructor(public name: string, public age: number){}
}
let bob = new User("Bob", 38);
let nameInfo1 = new NameInfo<User>();
nameInfo1.printName(bob);
 
type Person = {id:number; name:string}
let tom: Person = {id:1, name: "Tom"};
let nameInfo2 = new NameInfo<Person>();
nameInfo2.printName(tom);