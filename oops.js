// let baseSalary=30000;
// let overtime=10;
// let rate=20;
// function getWage(baseSalary,overtime,rate){
//     return baseSalary+(overtime*rate)
// }
// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
// };
// function createcircle(radius){

// }
// circle.draw();
// class Student{
//     name;
//     yob;
//     constructor(name,yob){
//         this.name=name;
//         this.yob=yob;
//     }
//     getAge(){
//           return new Date().getFullYear()-this.yob;
//     };dddddddd
//     getName(){
//         return this.name;
//     }
// }
// var Student1=new Student("Rehinas",2000)
// var Student2=new Student("Ajmal",2000)
// var Student3=new Student("Aparna",200)
// console.log(Student1)
// console.log(Student2)
// console.log(Student3)
// let Person=function(name,gender,birthYear){
//     this.name=name;
//     this.gender=gender;
//     this.birthYear=birthYear
//     this.calcAge=function(){
//         let age= new Date().getFullYear()-this.birthYear
//         console.log(age)
//     }
// }
// let john=new Person('john','Male',1990)
// let marry=new Person('Mary','female',1995)
// let steve=new Person('steve','Male',1989)
// console.log(steve)
// marry.calcAge()
// console.log(marry)
// john.calcAge()
// console.log(john)
// class and object
// const student={
//     fullName:"Rehinas",
//     marks:80,
//     printMarks:function(){
//         console.log("marks=",marks)
//     }
// }
// console.log(student)
// let arr=["apple","mango","banana"]
// console.log(arr)
// console.log(typeof(arr))
// class Student{
//     name;
//     yob;
//     place
//     getAge(){
//         return new Date().getFullYear()-this.yob
//     }
//     constructor(name,yob){
//         this.name=name;
//         this.yob=yob
//     }
// }
// const anu=new Student("rehinas",9999);
// console.log(anu)
// anu.getAge()

// console.log(student1)
// var student1={
//     name:"rehinas",
//     yob:1994,
//     getAge: function(){
//         return new Date().getFullYear()-this.yob
//     }
// }
// console.log(student1)
// var student1={
//     name:"rehinas",
//     yob:1994,
//     getAge: function(){
//         return new Date().getFullYear()-this.yob
//     }
// }
// console.log(student1)
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`Hi,I'm ${this.name} and I'm ${this.age} year old.`)
//     }
// }
// const p1=new Person("rhinas",24)
// p1.greet()
// class Calculater{
//     add(x,y){
//        return x+y;
//     }
//     multiply(x,y){
//         return x*y
//     }
// }
// const calc=new Calculater();
// console.log(calc.add(5,3))
// console.log(calc.multiply(4,2))
// class Product{
//     constructor(name="unknown",price=0){
//         this.name=name;
//         this.price=price;
//     }
//     show(){
//         console.log(`${this.name} costs ${this.price}`)
//     }
// }
// const p1=new Product("Book",200);
// const p2=new Product();
// p1.show()
// p2.show()
// class Button{
//     constructor(name){
//         this.button=document.createElement('button')
//         this.button.innerHTML=name
//         document.body.appendChild(this.button)
//     }
//     set width(width){
//         this.button.style.width=width+'px'
//     }
//     set height(height){
//         this.button.style.height=height+"px"
//     }
//      get width(){
//          return  parseInt( this.button.style.width=width+'px')
//     }

// }
// var b1=new Button("click me")
// b1.width=100
// b1.height=100
// console.log(b1.width)
// b1.setWidth(100)
// b1.setHeight(100)
// class Person{
//     constructor(name){
//         this.__name=name
//     }
//     get name(){
//         return this.__name.toUpperCase()
//     }
//     set name(newName){
//         this.__namename=newName.trim();
//     }
// }
// const p=new Person("Rehi ")
// console.log(p.name)
// p.name="  john  "
// console.log(p.name)
// let arr=["rhinas","ajmal"];
// let object1={
//     name:"ajmal",
//     city:"bathery",
//     getIntro:function(){
//      console.log(this.name+"from"+this.city)
//     }
// }
// let object2={
//     name:"rehinas"
// }
// object2.__proto__=object1
// let Person=function(name,gender,birthYear){
//     this.name=name;
//     this.gender=gender;
//     this.birthYear=birthYear;
// }
// Person.prototype.age=function(){
//     let age= new Date().getFullYear()-this.birthYear;
//     console.log(age)
// }
// Person.prototype.city='London'
// let john=new Person("john","male",2001)
// console.log(john)
// john.age()
// let merry=new Person("merry","female",1995)
// console.log(merry)
// merry.age()
// let steve=new Person("Steve","male",1989)
// console.log(steve)
// steve.age()
// class Button{
//     constructor(name){
//         this.button=document.createElement('button')
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//           this.button.onclick=fn;
//         };
//     }
// class greenButton extends Button{
//     onClick(fn){
//         super.onClick(
//              this.button.onclick=function(){
//             this.button.style.background='green'
//             fn();
//         }.bind(this)
//         )
//     }
//     printMe(){
//         console.log("me")
//     }
// }    

// var b1=new greenButton('click me')
// b1.onClick(function(){
//     console.log("clicked")
// })
// b1.printMe()
// class Button{
//     constructor(name){
//         this.button=document.createElement("button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onclick=fn
//     }
// }
// class greenButton extends Button{
//     constructor(name){
//         super(name);

//     }
//     onClick(fn){
//         super.onClick(function(){
//             this.button.style.background="green"
//             fn()
//         }.bind(this));
        
//     }
// }
// const btn=new greenButton("click me")
// btn.onClick(function(){
//     console.log("clicked")
// })
// class Parent{
//     constructor(){
//         this.type="Parent";
//     }
//     sayHello(){
//         console.log("Hello from parent")
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super();
//         this.role="child";
//     }
//     sayhello(){
//         console.log("Hello from child")
//     }
// }
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} barks`)
//     }
// }
// const dog=new Dog("tommy");
// dog.speak()
// class Button{
//     constructor(label){
//         this.label=label;
//         this.button=document.createElement('button');
//         this.button.innerHTML=label
//         document.body.appendChild(this.button)
//     }
//     onClick(fn){
//         this.button.onclick=fn;
//     }
// }
// class Redbutton extends Button{
//     constructor(label){
//         super(label);
//         this.button.style.background="red";
//         this.button.style.color="white"
//     }
// }
// const redbtn=new Redbutton("delete");
// redbtn.onClick(()=>{
//     console.log("button clicked")
// })
// class Vehicle{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         console.log(`Driving at ${this.speed} km/h`)
//     }
// }
// class Car extends Vehicle{
//     honk(){
//         console.log("beep beep!")
//     }
// }
// const vehi=new Car("BMW",160)
// vehi.drive()
// class Component{
//     constructor(text){
//         this.div=document.createElement("div")
//         this.div.innerText=text
//         document.body.appendChild(this.div)
//     }
// }
// class Card extends Component{
//     constructor(text){
//         super(text);
//         this.div.style.color='red';
//         this.div.style.padding='2px';
//     }
// }
// const card=new Card("hello")
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
// const btn=new Button("click")
// console.log(btn)
function myButton(name){
   this.button=document.createElement('button');
   this.button.innerHTML=name;
   document.body.appendChild(this.button)
}
myButton.prototype.onClick=function(fn){
    this.button.onClick=fn;
}
var b2=new myButton()
b2.onClick(function(){
    console.log("clicked")
})
console.log(b2)
//inheritence

