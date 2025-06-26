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
// class Rectangle{
//      constructor(width,height){
//         this.width=width;
//         this.height=height
//      }
//      set width(newWidth){
//          if(newWidth > 0){
//                Number(this._width=newWidth)
//          }
//          else{
//             console.error("width must be a positive number")
//          }
//      }
//       set height(newHeight){
//          if(newHeight> 0){
//               Number( this._height=newHeight);
//          }
//          else{
//             console.error("Height must be a positive number")
//          }
//      }
//      get width(){
//         return `${this._width.toFixed(1)}cm`;
//      }
//      get height(){
//         return `${this._height.toFixed(1)}cm`;
//      } 
//      get area(){
//         return `${this._width+this._height.toFixed(1)}cm`
//      }
//     }     
// const rectangle=new Rectangle(3,4)
// rectangle.width=7;
// rectangle.height=4;
// console.log(rectangle.width);
// console.log(rectangle.height)
// console.log(rectangle.area)
//swapr the value of two veriable
// let a=1;
// let b=2;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)
//swap colors
// const colors=["red","green","blue","white"]
// console.log(colors)
// [colors[0],colors[3]]=[colors[3],colors[0]]
// console.log(colors)
// const colors=["red","green","blue","black","white"]
// const [firstColor,secondColor,thirdColor,...rest]=colors;
// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(rest)
//extract value from object
// function displayPerson({firstName,lastName,age,job="unemployed"}){
//         console.log(`name:${firstName} ${lastName}`)
//         console.log(`age:${age}`)
//         console.log(`job:${job}`)
// }
// const person1={
//     firstName:"rehinas",
//     lastName:"mamburam",
//     age:24,
// }
// const person2={
//     firstName:"Ajmal",
//     lastName:"thanikadan",
//     age:25,
//     job:"tech-support"
// }
// displayPerson(person2)
//nested object
// const person={
//     fullname:"rehinas m",
//     age:24,
//     isStudent:true,
//     hobbies:["karate","jellyfishing","cooking"],
//     address:{
//         street:"kalluvayal",
//         city:"bathery",
//         country:"India"
//     }

// }
// // console.log(person.fullname)
// // console.log(person.age)
// // console.log(person.isStudent)
// // console.log(person.hobbies[2])
// // console.log(person.address.country)
// for(const property in person.address){
//     console.log(person.address[property])
// }
// class Person{
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age,
//         this.address=new Address(...address)
//     }
// }
// class Address{
//     constructor(street,city,country){
//         this.street=street;
//         this.city=city;
//         this.country=country;
//     }
// }
// const person1=new Person("rehinas",24,"kalluvayal","bathery","India")
// const person2=new Person("Ajmal",25,"kalluvayal","bathery","India")
// const person3=new Person("aparna",24,"thomatuchal","vaduvanchal","Iindia")
// console.log(person1.age)
// console.log(person1.address.city)
// console.log(person2.address)
// const fruit=[{name:"apple",color:"red",calories:95},
//              {name:"orange",color:"orange",calories:45},
//              {name:"banana",color:"yellow",calories:105},
//              {name:"coconut",color:"white",calories:159},
//              {name:"pineapple",color:"yellow",calories:37}];
// // console.log(fruit[2].calories)                     
// fruit.push({name:"grapes",color:"purple",calories:"75"})
// fruit.splice(1,2)
// console.log(fruit)
// fruit.forEach(element=>console.log(element))
// const fruitName=fruit.map(element=>element.name)
// const fruitColors=fruit.map(element=>element.color)
// const calories=fruit.map(element=>element.calories)
// console.log(fruitName)
// console.log(fruitColors)
// console.log(calories)
//.....filter().....
// const yellowfruit=fruit.filter(fruit=>fruit.color==="yellow")
// console.log(yellowfruit)
// const calories=fruit.filter(fruit=>fruit.calories>=100)
// console.log(calories)
// const lowcalories=fruit.filter(fruit=>fruit.calories<100);
// console.log(lowcalories)
//---reduce--
// const maxfruit=fruit.reduce((max,fruit)=>
//     fruit.calories>max.calories?fruit:max)
// const minFruit=fruit.reduce((min,fruit)=>
//                                  fruit.calories<min.calories?fruit:min)
// console.log(maxfruit)
// console.log(minFruit)
// let fruit=["apple","orange","banana","coconut","pineapple"]
// fruit.sort()
// console.log(fruit.sort())
// let number=[1,10,2,9,3,8,4,7,5,6]
// number.sort((a,b)=>a-b);
// console.log(number)
//fisher-yates algorithm
// const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K'] 
// // cards.sort(()=>Math.random()-0.5)
// // console.log(cards) 

// function shuffle(array){
//     for(i=array.length-1;i>0;i--){
//         const random=Math.floor(Math.random()*(i+1))
//        array[i],array[random]=array[random],array[i];
// }
// }
// console.log(shuffle(cards))
// const obj1={
//     name:"Rehinas",
//     place:"wayanad",
//     rank:100
// }
// const mark=[1,4,6,7,12]
// function myFunction(){
//     //  const name=obj1.name;
//     //  const place=obj1.place;
//     //  const rank=obj1.rank;

//     const[a,b,c,d,e]=mark
//     console.log(mark)
//      const{
//         name,
//         ...rest
//      }=obj1
//      console.log(name,rest)
// }
// myFunction()
// const marks=[1,4,6];
// var obj={
//     name:"rehinas",
//     place:"wayanad",
//     rank:100
// }
// function myFunction({name,place}){
//     console.log(name,place)
// }
// myFunction(obj);
//prototyping
// let arr=["rehinas","ajmal"]
// let obj={name:"rhinas",
//     city:"chundale",
//     getIntro:function(){
//         console.log(this.name+" from "+this.city)
//     } 
// }
// function fun(){
// } 
// let object={
//     name:"rehinas",
//     city:"wayanad",
//     getIntro:function(){
//         console.log(this.name+" from "+this.city)
//     }
// }    
// let object1={
//     name:"ajmal",
// } 
//Date object in javascript
// const date=new Date()
// const year=date.getFullYear();
// const month=date.getMonth()
// const day=date.getDate()
// const hour=date.getHours()
// const mnt=date.getMinutes()
// const sec=date.getSeconds()
// const week=date.getDay()
// console.log(year)    
// console.log(month) 
// console.log(day)
// console.log(hour)
// console.log(mnt) 
// console.log(sec)   
// console.log(week) 
// date.setFullYear(2025) 
// date.setMonth(6)
// date.setDate(4)
// date.setHours(2)
// date.setMinutes(3)
// date.setSeconds(4)
// console.log(date)          
// const date1=new Date("2023-12-31");
// const date2=new Date("2023-12-30");
// if(date2>date1){
//     console.log("HAPPY NEW YEAR!")
// }                                      