class User {
  
    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
 
let tom = new User("Tom", 36);
tom.print();