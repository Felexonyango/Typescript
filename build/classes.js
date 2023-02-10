"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //constructor
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created" + " " + this.name);
    }
    //method called register
    User.prototype.register = function () {
        console.log(this.name + "is now rgistered");
    };
    User.prototype.payinvoice = function () {
        console.log(this.name + 'paid invoice');
    };
    return User;
}());
//box is an object assigned to class User
//let box = new User('felix',  'felexonyango19@gmail.com',  43)
//box.register()
//inheritance
//class member inheriting properties from class User
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payinvoice = function () {
        _super.prototype.payinvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(4, "Felix", 'felxoyango@gmailcom', 56);
mike.payinvoice();
function printclass(a) {
    a.print();
}
var classA = /** @class */ (function () {
    function classA() {
    }
    classA.prototype.print = function () {
        console.log("class A.print.()");
    };
    return classA;
}());
var classB = /** @class */ (function () {
    function classB() {
    }
    classB.prototype.print = function () {
        console.log("class B .print()");
    };
    return classB;
}());
var class1 = new classA();
class1.print();
var class2 = new classB();
class2.print();
// class constructor
var Classwithconstructor = /** @class */ (function () {
    function Classwithconstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    Classwithconstructor.prototype.getname = function () {
        return this.name;
    };
    Classwithconstructor.prototype.getid = function () {
        return this.id;
    };
    return Classwithconstructor;
}());
var instace = new Classwithconstructor(5676, "hello");
console.log(instace.getname());
console.log(instace.id);
// modifiers
//public access,
//private access,
//protected
//inheritance
