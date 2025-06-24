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
// happyBirthday()
// return statement
// let area;
// let width;
// let height;
// width=window.prompt('Enter width?');
// height=window.prompt('Enter height?')
// area=getArea(width,height)
// console.log("Area is",area)
// function getArea(width,height){
//    return width*height;
// }
// function add(x,y){
//    return x+y;
// }
// function substract(x,y){
//    return x-y
// }
// function multiply(x,y){
//     return x*y
// }
// function divide(x,y){
//    return x/y;
// }
// // console.log(divide(2,3))
// function isEven(number){
//       // if(number%2===0){
//       //    return true;
//       // }
//       // else{
//       //    return false
//       // }
//       return number % 2 ===0?true :false;

// }
// function isValidEmail(email){
//          if(email.includes("@")){
//             return true;
//          }
//          else{
//             return false;
//          }
// }
// console.log(isValidEmail("Brofake.com"))
// let x=1;
// let x=2;
// const textBox=document.getElementById("textBox");
// const fahren=document.getElementById("toFahrenheit");
// const celsious=document.getElementById("toCelsius");
// const result=document.getElementById("result");
// let temp;

// function convert(){
//    if(fahren.checked){
//         temp=Number(textBox.value)
//         temp=temp*9/5+32;
//         result.textContent=temp.toFixed(1)+ " F";
//    }
//    else if(celsious.checked){
//                temp=Number(textBox.value)
//         temp=(temp-32)*(5/9)
//         result.textContent=temp.toFixed(1)+ " F";
//    }
//    else{
//       result.textContent="Select a unit"
//    }
// }
//Aray
// let fruits=["apple","orange","banana","coconut"]
// // for(let i=0;i<fruits.length;i++){
// //        console.log(fruits[i])
// // }
// fruits.sort().reverse()
// for(let fruit of fruits){
//    console.log(fruit);
// }
// const matrix=[[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// matrix[0][0]='x'  
// matrix[0][1]= 'o' 
// matrix[0][2]='x' 
// matrix[1][0]='o',
// matrix[2][0]='x';
// matrix[1][1]='o';
// matrix[1][2]='o';
// matrix[2][1]='o';
// matrix[2][2]='x';

// for(let row of matrix){
//    const rowString=row.join('')
//    console.log(row)
// }
//spread operator
// let numbers=[1,2,3,4,5]
// let maximum=Math.max(...numbers);
// let minimum=Math.min(...numbers)
// console.log(minimum)
// let name="Rehinas M"
// let letters=[...name].join("-")
// console.log(letters)
// let fruits=["apple","orange","banana"]
// let vegetables=["carrots","calery","potet"]
// let newfruits=[...fruits,...vegetables]

// console.log(newfruits)
// function openfridge(...foods){
//   console.log(foods)
// }
// const food1="pizza"
// const food2="hamburger"
// const food3="hotdog"
// const food4="sushi"
// openfridge(food1,food2,food3,food4)
// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//       result +=number
//     }
//     return result;

// }
// function getAvg(...numbers){
//     let result=0;
//     for(let number of numbers){
//       result +=number
//     }
//     return result/numbers.length;

// }
// const total=getAvg(75,100,85,90,50);
// console.log(`you'r totel is ${total}`)
// function conmbainString(...strings){
//    return strings.join(" ")
// }jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
// const fullname=conmbainString("Mr","ajmal");
// console.log(fullname)
// function generatePassword(password_length,includeLowerCase,includeNumbers,includeUpperCase,includeSymbols){
//    const lowerCase='abcdefghijklmnopqrstuvwxyz' 
//    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//    const number='0123456789'
//    const symbol='@!~$#%^&*":;.,'
//    let allowedchrs=" "
//    let password=" "
//    allowedchrs +=includeLowerCase?lowerCase:"";
//    allowedchrs +=includeUpperCase?upperCase:"";
//    allowedchrs +=includeNumbers?number:"";
//    allowedchrs +=includeSymbols?symbol:"";
//    if(password_length<=0){
//       return `(password length must be at least 1)`
//    }
//    if(allowedchrs.length===0){
//       return `(At least 1 set of charcter needs to be selected)`
//    }
//    for(let i=0;i<password_length;i++){
//       const randomIndex=Math.random()
//    }
//    return'';
// }
// const password_length=12;
// const includeLowerCase=false;
// const includeUpperCase=false;
// const includeSymbols=false;
// const includeNumbers=false;
// const password=generatePassword(password_length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
// console.log(`generated password ${password}`)
// function hello(callback){
//      console.log("hello");
//      callback()
  
// }
// function leave(){
//    console.log("leave")
// }
// function wait(){
//    console.log("wait")
// }
// function goodbye(){
//    console.log("good bye")
// }
// hello(goodbye);
// sum(displaypage,1,2)
// function sum(callback,x,y){
//    let result=x+y;
//    callback(result)
// }
// function displayConsole(result){
//    console.log(result)
// }
// function displaypage(result){
//    document.getElementById("myH1").textContent=result
// }
//callback funcion
// function myFunction(arg){
//   console.log(arg)
// }
// myFunction(10)
// console.log("one")
// const a=[2,3,5,6,7]
// a.forEach(function myFunction(arg){
//    console.log(arg)
// })
//  // call back registation

// console.log("two")