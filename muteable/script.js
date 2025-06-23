// let firstname="Rehinas";
// let age=21;
// let student=true

// console.log("hello",firstname)
// console.log("you are age "+age+" years old")
// console.log(student)
// document.getElementById("P1").innerHTML="Hello "+firstname
// document.getElementById("P2").innerHTML="you are "+age +"years old"
// // document.getElementById("P3").innerHTML="enrolled "+student;
// let students=20;
// students=students-1
// let username=window.prompt('What is your name')
// console.log(username)
// document.getElementById("mybutton").onclick=function(){
//     username=document.getElementById('mytext').value;
//     console.log(username)

// }
//type conversion
// let age=window.prompt("how old are you?")
// age=Number(age)
// console.log(typeof age)
// console.log("Happy birthday you are",age,"years old are you")
// let x;
// let y;
// let z;
// x= Number("3.14")
// y=String(3.14)
// z=Boolean("pizza")
// console.log(x,typeof x)
// console.log(y,typeof y)
// console.log(z,typeof z)
// const pi=3.14;
// let radius;
// let circumference;
// radius=window.prompt("Enter the radius of a circle ");
// radius=Number(radius);
// pi= 420.69
// circumference=2*pi*radius;
// console.log("the circumference",circumference)
// let x;
// let y=5;
// let z=0;
// let maximum;
// let minimum;
// maximum=Math.max(x,y,z)
// minimum=Math.min(x,y,z)
// console.log(minimum)
// x=Math.PI;
// x=Math.pow(x,3)
// console.log(x)
// let a;
// let b;
// let c;
// a=window.prompt("Enter side A");
// a=Number(a);
// b=window.prompt("Enter side B");
// b=Number(b)
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("side c:",c)
// document.getElementById("submitButton").onclick=function(){
//     a=document.getElementById("textbox").value;
//     a=Number(a)
//     b=document.getElementById("textbox").value;
//     b=Number(b)
//     c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
//     document.getElementById('clabel').innerHTML="side c"+c;
// }
// let count=0;
// document.getElementById("decreaseBtn").onclick=function(){
//     count-=1;
//     document.getElementById("countlabel").innerHTML=count;
// }
// document.getElementById("textReset").onclick=function(){
//     count=0;
//     document.getElementById("countlabel").innerHTML=count;
// }
// document.getElementById("increaseBtn").onclick=function(){
//     count+=1;
//     document.getElementById("countlabel").innerHTML=count;;
// }


// console.log(x);
// console.log(y)
// console.log(z)
// let x;
// let y;
// let z;
// document.getElementById("rollButton").onclick=function(){

//        x=Math.floor(Math.random()*6+1);
//        y=Math.floor(Math.random()*6+1);
//        z=Math.floor(Math.random()*6+1);
//        document.getElementById("xlabel").innerHTML=x;
//        document.getElementById("ylabel").innerHTML=y;
//        document.getElementById("zlabel").innerHTML=z;
// }
// let userName="Rehinas M";
// let Phone="123-456-7890"
// // console.log(userName.length)
// // console.log(userName.charAt(2))
// // console.log(userName.indexOf("i"))
// ph=Phone.replaceAll("-","/")
// userName=userName.toLocaleLowerCase()
// console.log(ph)
// let fullname="Rehinas M";
// let firstname;
// let lastname;
// firstname=fullname.slice(0,fullname.indexOf(" "))
// lastname=fullname.slice(fullname.indexOf(" "))
// console.log(lastname)
// console.log(firstname)
//method chaining
// let userName="bro";
// let letter=userName.charAt(0)
// letter=letter.toLocaleUpperCase();
// console.log(letter)
//
// if(age>=18){
//     console.log("you are an adult")
// }
// else if(age<0){
//     console.log("you are not born yet")
// }
// else if(age>=65){
//     console.log("you are a senior citizen")
// }
// else{
//     console.log("you are a child")
// }
// document.getElementById("myBtn").onclick=function(){
//     const mycheckbox=document.getElementById("mycheckbox")
//     const visa=document.getElementById("visaBtn")
//     const mastercard=document.getElementById("mastercardBtn")
//     const paypal=document.getElementById("paypalBtn")
//     if(mycheckbox.checked){
//              console.log("you are subscribe!")
//     }
//     else{
//        console.log("you are not subscribe")
//     }
//     if(visa.checked){
//         console.log("you are paying with visa")
//     }
//      else if(mastercard.checked){
//           console.log("you are paying with mater card")
//      }else if(paypal.checked){
//         console.log("you are paying with paypal")
//      }
//      else{
//         console.log("you must select a payment method")
//      }

// }
// let grade="B";
// switch(grade){
//     case "A":
//         console.log("you did great");
//         break;
//     case "B":
//         console.log("you did good")
//         break;
//     case "C":
//         console.log("you did it");
//         break;
//     case "D":
//         console.log("you pssed bearly")
//         break;
//     case "F":
//         console.log("you are faild")
//         break;
//     default:
//         console.log("you enter a wrong choice")
//         break;
                   
// }
// let x="3.14";
// if(x===3.14){
//     console.log("that is pie")
// }
// else{
//     console.log("not pie")
// }
// let temp=15;
// if(temp>0 && temp<30){
//      console.log("The weather is good")
// }
// else{
//     console.log("the weather is bad")
// }
// let sunny=false
// let temp=15;
// if(!(temp>0)){
//    console.log("It is warm outside")
// }
// else {
//     console.log("it's cold outside")
// }
// if(sunny){
//     console.log("it's sunny outside")
// }
// else{
//     console.log("its clody outside")
// }
// let userName=" ";
// while(userName==" "){
//     userName=window.prompt("enter your name")
// }
// console.log("Hello",userName)
// let userName;
// while(userName==" "){
//     userName=window.prompt("Enter your name");
// }
// console.log("hello",userName)
// for(let i=1;i<=10;i+=1){
//     console.log(i)
// }
// console.log("happy new year")
// for(let i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//    console.log(i);
// }
// let symbol=window.prompt("Enter a symbol to use")
// let rows=window.prompt('enter number of rows')
// let columns=window.prompt('enter number of columns')
// for(let i=1;i<=rows;i+=1){
//     for(let j=1;j<=columns;j+=1){
//         document.getElementById("myRectngle").innerHTML += symbol;
//     }
//     document.getElementById("myRectngle").innerHTML +="<br>"
// }
// function happyBirthday(){
//     console.log("Happy birthday to you");
//     console.log("happy birthday to you");
//     console.log("happy birthday dear__")
//     console.log("Happy birthday to you")

// }
happyBirthday()
return statement
let area;
let width;
let height;
width=window.prompt('Enter width?');
height=window.prompt('Enter height?')
area=getArea(width,height)
console.log("Area is",area)
function getArea(width,height){
   return width*height;
}
