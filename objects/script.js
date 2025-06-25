// const person1={
//     firstName:"Rehinas",
//     lastName:"M",
//     age:24,
//     isEmployed:false,
//     sayHello:function(){console.log("Hi, I am rehinas")},
//     eat:function(){console.log("I am eating rice with dal")}
// }
// const person2={
//     firstname:"Ajmal",
//     lastname:"t k",
//     age:25,
//     isEmployed:true,
//     sayHello:()=>{console.log("hey i am ajmal")},
//     eat:function(){console.log("I am eating chapti with egg curry.")}

// }
// // console.log(person1.firstName)
// // console.log(person1.lastName)
// // console.log(person1.age)
// // console.log(person1.isEmployed)
// // console.log(person2.firstname)
// // console.log(person2.lastname)
// // console.log(person2.age)
// // console.log(person2.isEmployed)
// person1.eat()
// person2.eat()
// const person1={
//     name:"rehinas",
//     favfood:'biriyani',
//     sayHello:function(){console.log(`hi i am ${this.name}`)},//arrow funtion not work this eyword
//     eat:function(){console.log(`${this.name} is eathing ${this.favfood}`)}
// }
// person1.eat()
// console.log(this)
// const myObj={
//     a:1,
//     b:2,
//     c:function(a,b){
//         console.log(this,a,b)
//     }
// }
// //bind function writing time//call calling time
// myObj.c=myObj.c.bind(myObj)
// const k=myObj.c
// console.log(k)
// const yourObj={
//     k:12,
//     j:22
// }
// var aa=myObj.c;
// aa.call(myObj)
//this is global space
// "use strict"
// console.log(this) //window object global object window-global obj
// //this keyword inside function
// function x(){
//     console.log(this)
// }
// x()
// //if the value of this keyword is undefind or null 
//  window.x()
// const obj={
//     a:10,
//     x:function(){
//         console.log(this.a)
//     }
// }
// obj.x()// this value is object
//call(),apply(),bind()
// let name={
//     firstName:"Rhinas",
//     lastName:"m",
// }
//  let printFullName=function(hometown){
//         console.log(this.firstName+" "+this.lastName+"from"+hometown)
//     }
// let name1={
//     firstName:"sachin",
//     lastName:"thendukar"
// }
// //call is function borrowing
// printFullName.apply(name1,["bathery"])
// printFullName.apply(name,["chunadle"])


// const obj2={
//     a:20
// }
// const student={
//     name:"rehinas",
//     printName:function(){
//         console.log(this.name)
//     }
// }
// student.printName()
// const student2={
//     name:"Ajmal",
// }
// student.printName.call(student2)
// function greet(greeting,puntcuation){
//     console.log(greeting+','+this.name+punctuation)
// }
// const person={name:'Rehi'},
// greeting.call()
//constructor in jsvascript
// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.color=color,
//     this.year=year
//     this.drive=function(){console.log(`you are drive ${this.model}`)

//     }
// }
// const car1=new Car("Ford","mustang",'red',2025)
// const car2=new Car("Alto",120,"white",2024)
// const car3=new Car("porshe",30,"yellow",2023)
// console.log(car3)
// console.log(car3.drive())
// console.log(car1.drive())
// class Products{
//     constructor(name,price){
//         this.name=name;
//         this.price=price
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`)
//         console.log(`Price:${this.price.toFixed(2)}`)
//     }
//     calculateTotel(salesTax){
//         return this.price+(this.price*salesTax)
//     }
// }
// const salesTax=0.05
// const product=new Products("shirt",999)
// const product2=new Products("jeans",1500)
// const product3=new Products("underware",100.00)
// product.displayProduct()
// product2.displayProduct()
// product3.displayProduct()
// const total=product.calculateTotel(salesTax)
// console.log(`total price with tax${total}`)
// const total1=product2.calculateTotel(salesTax)
// console.log(total1)
// class MathUtil{
//     static PI=3.14159;
//     static getDiameter(radius){
//         return radius*2
//     }
//     static getcircumference(radius){
//         return 2 * this.PI *radius;
//     }
//     static getArea(radius){
//         return this.PI*radius*radius;
//     }
// }
// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.getcircumference(10))
// console.log(MathUtil.getArea(10))
// class User{
//     static userCount=0;
//     constructor(username){
//         this.username=username;
//         User.userCount ++;
//     }
//    static getUserCounter(){
//     console.log(`there are ${User.userCount}`)
//    } 
//     sayHello(){
//         console.log(`Hello,my username is${this.username}`)
//     }
// }
// const user1=new User("Rehinas")
// const user2=new User("Ajmal")
// user1.sayHello()
// console.log(user1.username)
// console.log(User.userCount)
// console.log(user2.username)
// class Student{
//     name;
//     yob;
//  constructor(name,yob){
//     this.name=name;
//     this.age=yob;
//  }
//  getAge(){
//     return new Date().getFullYear()-this.yob
//  }
//  getName(){
//     return this.name
//  }
// }
// var student1=new Student("rehinas",2000);
// var student2=new Student("anisha",1999);
// var student3=new Student("aparna",2000);
// console.log(student1.getAge())
// console.log(student2)
// console.log(student3)
// class Student{
//     name;
//     yob;
//     place;
//     constructor(name,yob,place){
//         this.name=name;
//         this.yob=yob;
//         this.place=place
//     }
//     getAge(){
//         return new Date().getFullYear()-this.yob
//     };
//     getName(){
//         return this.name
//     }
// }
// var student1=new Student('Rhinas',2000)
// var student2=new Student("aparna",2000);
// var student3=new Student("anisha",1999);
// console.log(student1.getAge())
//inheritance
// class Animal{
//     alive=true;
//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping `)
//     }

// }
// class Rabbit extends Animal{
//     name="rabbit";
//     run(){
//         console.log(`this ${this.name} is running`)
//     }
// }
// class Fish extends Animal{
//     name="Fish"
//     swim(){
//         console.log(`this ${this.name} is swimming`)
//     }
// }
// class Hawk extends Animal{
//   name="Hawk"
//   fly(){
//     console.log(`hawk is${this.name} is flaying`)
//   }
// }
// const rabbit=new Rabbit();
// const fish=new Fish();
// const hawk=new Hawk();
// console.log(rabbit.alive)
// rabbit.eat()
// rabbit.sleep()
// rabbit.run()
// hawk.fly()
// rabbit.fly()
//inheritence in code malayalam
// class Button{
//     constructor(name){
//         this.button=document.createElement("Button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onclick=fn
//     }
// }
// var b1=new Button("mybutton")
// b1.onClick(function(){
//     console.log("clicked")
    
// })
// class Button{
//     constructor(name){
//         this.button=document.createElement("Button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onclick=function(){
//              this.button.style.background="green"
//              fn()
//         }.bind(this)
//     }
// }
// var b1=new Button("mybutton")
// b1.onClick(function(){
//     console.log("clicked")
    
// })
//setters //getters
// class Button{
//     constructor(name){
//      this.button=document.createElement("button")
//      this.button.innerHTML=name;
//      document.body.appendChild(this.button)
//     }
//     set width(width){
//         this.button.style.width=width+"px";
//     }
//     set height(height){
//         this.button.style.height=height+"px";
//     } 
//     get width(){
//         return this.button.style.width;
//     }
//     get height(){
//         return this.button.style.height;
//     }
// }
// var b1={
//     init(name){
//       this.button=document.createElement("button")
//       this.button.innerHTML=name;
//       document.body.appendChild(this.button)

//     },
//      set width(width){
//         this.button.style.width=width+"px";
//     },
//     set height(height){
//         this.button.style.height=height+"px";
//     } ,
//     get width(){
//         return this.button.style.width;
//     },
//     get height(){
//         return this.button.style.height;
//     }

// }
// b1.init("click")
// b1.width=100;
// b1.height=
// var b1=new Button("clickme")
// b1.width=100;
// b1.height=100
// console.log(b1.width,b1.height)
// class Button{
//     constructor(name){
//         this.button=document.createElement('button');
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onclick=fn
//     }
// }
// var b1=new Button("my-button");
// b1.onClick(function(){
//     console.log("clicked")
// })
// class GreenButton extends Button{
//     constructor(name){
//         super(name)
//     }

//     onClick(fn){
//           super.onClick=function(){
//             this.button.style.background="green"
//             fn()
//         }.bind(this)
//     }
// }
// var b1=new GreenButton("Gbutton")
// b1.onClick(function(){
//     console.log("btn clicked")
// })
// class Button{
//     constructor(name){
//        this.button=document.createElement("button");
//        this.button.innerHTML=name;
//        document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onClick=fn
 
//     }
// }
// var b1=new Button("Hello")
// console.log(b1)
// function myButton(name){
//        this.button=document.createElement("button");
//        this.button.innerHTML=name;
//        document.body.appendChild(this.button)
// }
// myButton.prototype.onclick=function(fn){
//     this.button.onclick=fn
// }
// function myGreenButton(){
//       myButton.call(this.name)
// }
// myGreenButton.prototype=Object.create(myButton.prototype)

// var b2=new myGreenButton("yo!");
// b2.onclick(function (){
//     console.log("clicked")
// })
// console.dir(myButton)
// console.dir(b2)
//super keyword in brocode
// class Animal{
//      constructor(name,age){
//        this.name=name;
//        this.age=age;
//      }
//       move(speed){
//         console.log(`the ${this.name}moves at a speed of ${speed}mbh`)
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age)
//        this.runspeed=runspeed
//     }
//        run(){
//         console.log(`This ${this.name} can run`)
//         super.move(this.runspeed)
//        }
// }
// class Fish extends Animal{
//      constructor(name,age,swimspeed){
//         super(name,age)
//        this.swimspeed=swimspeed;
//     }   
//     swim(){
//         console.log(`This ${this.name} can swim`)
//         super.move(this.swimspeed)

//     }

// }
// class Hawk extends Animal{
//       constructor(name,age,flyspeed){
//         super(name,age)
//        this.flyspeed=flyspeed;
//     }
//     fly(){
//         console.log(`this ${this.name} can fly`)
//         super.move(this.flyspeed)
//     }
// }
// const rabbit=new Rabbit("rabbit",1,25);
// const fish=new Fish("fish",1,12)
// const hawk=new Hawk("hawk",3,50)
// // console.log(fish.name)
// // console.log(fish.age)
// // console.log(fish.swimspeed)
// rabbit.run()
// fish.swim()
// hawk.fly()
//Gtters and setters
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }
    set width(newWidth){
        if(newWidth>0){
            this._width
        }
    }
}

const rectangle=new Rectangle(-10000,"pizza")
console.log(rectangle.width);
console.log(rectangle.height)                                                                           
                                                                 