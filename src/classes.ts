//creating interface for class
interface Userinterface{
    name:string
    email:string
    age:number
    register():any
    payinvoice():any
}


class User implements Userinterface{
//properties of user
    name:string
    email:string
    age:number
    //constructor
    constructor(name:string, email:string, age:number){
    this.name=name
    this.email=email
    this.age=age
    console.log("user created" +" "+ this.name )
    }
    //method called register
    register(){
        console.log(this.name +"is now rgistered")
    }
    payinvoice(){
        console.log(this.name + 'paid invoice')
    }
}
//box is an object assigned to class User
//let box = new User('felix',  'felexonyango19@gmail.com',  43)
 //box.register()

 //inheritance
 //class member inheriting properties from class User
 class Member extends User{

    id:number;
    constructor(id:number,name:string, email:string, age:number){
        super(name,email,age)
        this.id= id

    }
    payinvoice(){
        super.payinvoice()
    }
 }
 var  mike :User =new Member(4,"Felix",'felxoyango@gmailcom',56)
 mike.payinvoice()


 // simple class2
 //implementing interface of a class

interface Iprint{
    print() :any
}
function  printclass(a:Iprint){
    a.print()

}


 class classA implements Iprint{
     print(){
         console.log("class A.print.()")
     }



 }
 class classB implements Iprint{
    print(){
        console.log("class B .print()")
    }


 }
 let  class1 = new classA()
 class1.print()
 let class2 =new classB()
 class2.print()
 

 // class constructor

 class  Classwithconstructor{

    id:number;
    name:string;

    constructor(_id:number, _name:string){
        this.id =_id;
        this.name=_name;

    }
    getname():string{
    return this.name
    }
    getid():number{
        return this.id
    }
 }

 let instace = new Classwithconstructor( 5676, "hello");
 console.log(instace.getname())
 console.log(instace.id)
 
 // modifiers

//public access,
//private access,
//protected

//inheritance
