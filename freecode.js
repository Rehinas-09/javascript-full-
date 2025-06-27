// var ourArray=[50,60,70]
// var ourData=ourArray[0]
// ourArray[1]=45;
// console.log(ourArray)
// console.log(ourData)
// var myArray=[40,30,20]
// var data=myArray[0]
// console.log(data)
// var myArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
// var myData=myArray[2][1];
// console.log(myData)
// var ourArray=["Stimpson","J","cat"];
// ourArray.push(["happy","joy"])
// console.log(ourArray)
// var myArray=[["john",23],["cat",2]];
// myArray.push(["meera",2])
// console.log(myArray)
// var ourArray=[1,2,3];
// var removedFromOurArray=ourArray.pop()
// console.log(ourArray)
// var myArray=[["john",23],["cat",2]];
// var removerFromMyArray=myArray.pop();
// console.log(myArray)
// var ourArray=["Stimpson","j",["cat"]]
// var removedFromOruArray=ourArray.shift();
// console.log(ourArray)
// var myArray=[[""]]
// var ourArray=["Stimpson","J",'Cat'];
// ourArray.shift()
// ourArray.unshift("Happy")
// console.log(ourArray)
// var myArray=[["john",23],["dog",3]]
// myArray.shift()
// myArray.unshift(["meera",20])
// console.log(myArray)
// var myList=[["cereal",3],["milk",2],["banana",3],["juice",2],["eggs",5]]
// function myFun(){
//     console.log("Heyya,world")
// }
// // myFun()
// function reuse(){
//     console.log("hi world")
// }
// reuse()
// function ourFun(a,b){
//     console.log(a-b)
// }
// ourFun(10,5)
// function c(a,b){
//     console.log(a+b)
// }
// c(10,5)
//Golabel Scope
// var myGlobel=16;
// function fun1(){
//     var name="rehinas";
// }
// function fun2(){

//     var output=" ";
//     if(typeof myGlobel != "undefined"){
//         output+="myGlobel "+myGlobel;
//         console.log(output)
//     }
//     if(typeof name != "undefined") {
//         output+="name "+name;
//         console.log(output)
//     }
// }
// fun2()
// var changed=0;
// function change(num){
//     arr.push()
//     return (num+5)/3;
// }
// changed=change(10);
// console.log(changed)
// function h1(arr,test){

// }
// var testArr=[1,2,3,4,5]
// console.log("Before:"+JSON.stringify(testArr))
// h1
// console.log("After: "+JSON.stringify(testArr))
// function demo(arr,test) {
//        arr.push(test)
//      }
// var testArr=[1,2,3,4,5]
// console.log("Before"+JSON.stringify(testArr))
// console.log(demo(testArr,6))
// console.log("After:" +JSON.stringify(testArr))
// function ourTrueOrFalse(isItTrue){
//     if(isItTrue){
//         return "Yes, it's true";
//     }
//     return "No, it's false"
// }
// console.log(ourTrueOrFalse(true))
// function testEqual(val){
//     if(val===12){
//         return "equal"
//     }
//     return "not equel"
// }
// console.log(testEqual(10))
// function compareEquality(a,b){
//     if(a===b){
//         return "Equal";
//     }
//     return "Not Equal"
// }
// console.log(compareEquality(10,"10"))
// function testNotEqual(val){
//     if(val!=99){
//         return "not equal"
//     }
//     return "equal";
// }
// console.log(testNotEqual(10))
// function testGreaterThan(val){
//     if(val>=20){
//         return "20 or over"
//     }
//     if(val>=10){
//         return "10 or over"
//     }
//     return "less than 10"
// }
// console.log(testGreaterThan(10))
// function orderMyLogic(val){
//     if(val<5){
//         return  "Less than 5"
//     }
//     else if(val<10){
//         return "less than 10"
//     }
//     else{
//         return "greterthan or equal to 10"
//     }
// }
// console.log(orderMyLogic(3))
// function chain(num){
//      if(num<5){
//         return "Tiny"
//      }
//      else if(num<10){
//         return "Small"
//      }
//      else if(num<15){
//         return "Medium"
//      }
//      else if(num<20){
//         return "Large"
//      }
//      else{
//         return "huge"
//      }
// }
// console.log(chain(10))
// var name=["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"]
// function golfScore(per,stroke){
//     if(stroke==1){
//         return name[0];
//     }
//     else if()
// }
// function caseInSwitch(val){
//     var answer="";
//     switch(val){
//         case 1:
//             answer="alpha";
//             break;
//         case 2:
//             answer="beta";
//             break;
//         case 3:
//             answer="gamma";
//             break;   
//         case 4:
//             answer="delta";
//             break;
         
//     }
//     return answer;
// }
// console.log(caseInSwitch(2))
// function switchOfStuff(val){
//     var answer="";
//     switch(val){
//         case "a":
//             answer="apple";
//             break;
//         case "b":
//             answer="bird";
//             break;
//         case "c":
//             answer="cat";
//             break;  
//         default:
//            answer="stuff";
//            break;      
//     }
//     return answer;
// }
// console.log(switchOfStuff("a"))
// function chainToSwitch(val){
//     var answer=""
//     switch(val){
//         case "bob":
//             answer="Marly";
//             break;
//         case 42:
//             answer="The Answer";
//             break;
//         case 1:
//             answer="ther is no #1";
//             break;
//         case 99:
//             answer="Missed me by this much!";
//             break;
//         case 7:
//             answer="Ate Nine"
//             break;
//         default:
//             answer="wrong choice";
//             break;                   
//     }
//     return answer;
// }
// function isLess(a,b){
//     return a<b;
// }
// console.log(isLess(20,15))
// function abTest(a,b){
//     if(a<0 || b<0){
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2))
// }
// console.log(abTest(-2,-2))



