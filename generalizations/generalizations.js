var NameInfo = /** @class */ (function () {
    function NameInfo() {
    }
    NameInfo.prototype.printName = function (obj) {
        console.log("Name: ".concat(obj.name));
    };
    return NameInfo;
}());
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var bob = new User("Bob", 38);
var nameInfo1 = new NameInfo();
nameInfo1.printName(bob);
var tom = { id: 1, name: "Tom" };
var nameInfo2 = new NameInfo();
nameInfo2.printName(tom);
