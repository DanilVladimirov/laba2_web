var User = /** @class */ (function () {
    function User(userName, userAge) {
        this.name = "Default user";
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.print = function () {
        console.log("name: ".concat(this.name, "  age: ").concat(this.age));
    };
    return User;
}());
var tom = new User("Tom", 36);
tom.print();
