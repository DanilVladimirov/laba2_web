var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surname) {
        return this.name + " " + surname;
    };
    return User;
}());
var tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
