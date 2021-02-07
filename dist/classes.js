"use strict";
class User {
    //constructor
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created" + " " + this.name);
    }
    //method called register
    register() {
        console.log(this.name + "is now rgistered");
    }
    payinvoice() {
        console.log(this.name + 'paid invoice');
    }
}
//box is an object assigned to class User
//let box = new User('felix',  'felexonyango19@gmail.com',  43)
//box.register()
//inheritance
//class member inheriting properties from class User
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payinvoice() {
        super.payinvoice();
    }
}
var mike = new Member(4, "Felix", 'felxoyango@gmailcom', 56);
mike.payinvoice();
function printclass(a) {
    a.print();
}
class classA {
    print() {
        console.log("class A.print.()");
    }
}
class classB {
    print() {
        console.log("class B .print()");
    }
}
let class1 = new classA();
class1.print();
let class2 = new classB();
class2.print();
// class constructor
class Classwithconstructor {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    getname() {
        return this.name;
    }
    getid() {
        return this.id;
    }
}
let instace = new Classwithconstructor(5676, "hello");
console.log(instace.getname());
console.log(instace.id);
// modifiers
//public access,
//private access,
//protected
//inheritance
