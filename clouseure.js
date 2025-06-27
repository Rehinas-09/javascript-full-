// function outer(){
//     let msg="hello"
//     function inner(){
//        console.log(msg)
//     }
//    inner()
// }
// outer()
// function createCounter(){
// let count=0
// function increment(){
//     count++;
//     console.log(`count increased to ${count}`)
// }
// return{increment}
// }

// const counter=createCounter()
//CLOSURE IN JAVASCRIPT
// function outer(){
//     let message="hello"
//     function inner(){
//       console.log(message)
//     }
//     inner()
// }
// function increment(){

// }
// outer()
// function createCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         console.log(`count increased to ${count}`)
//     }
//     return(increment)
// }
// let counter=createCounter()
// counter.increment()

// increment()
// increment()
// increment()
// function creategame(){
//     let score=0
// function increaseScore(point){
//     score+=point
//     console.log(`+${point}pt`)
// }
// function decreaseScore(point){
//     score-=point
//     console.log(`-${point}pt`)
// }
// function getScore(){
//     return score
// } 
// return {increaseScore,decreaseScore,getScore}
// }
// const game=creategame()
// game.increaseScore(5)
// game.increaseScore(6)
// game.decreaseScore(3)
// console.log(`total score ${game.getScore()}`)
// function add(a,b){
//     function myAdd(){
//         const c=a+b;
//         return c;
//     }
//     return myAdd
// }
// function main(){
//     const res=add(3,4,)
//     const val=res()
//     console.log(val)
// }
// function main(a){
//     [1,2,3,4].forEach(i=>console.log(i,a))
// }
// main(10)
// main()
// var obj=[
//     {
//         name:'One',
//         msg:"Hello I am One"
//     },{
//         name:"Two",
//         msg:"Hello I am Two"

//     },
//     {
//         name:"three",
//         msg:"Hello I am three"
//     }
// ]  
// function main(){
//     obj.forEach((item)=>{
//         const bt=document.createElement('button')
//         bt.innerHTML=item.name;
//         bt.onclick=getCallBack(item.msg);
//         document.body.appendChild(bt)
//     })
// }
// main()
// function getCallBack(arg){
//    return function(){
//     alert(arg)
// }
// }
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()
// function init(){
//     var name="Mozilla"
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
// }
// init()
// if(Math.random()>0.5){
//     var x=1;
// }
// else{
//     var x=2;
// }
// console.log(x)
//if a veriable created in const,let class it be in a temporal dead zone
// function makeAdder(x){
//     return function(y){
//         return x+y;
//     }
// }
// const add5=makeAdder(5)
// const add10=makeAdder(10)
// console.log(add5(2));
// console.log(add10(2));
// const size12=makeSizer(12)
// const size14=makeSizer(14)
// const size16=makeSizer(16)
// document.getElementById("size-12").onclick=size12
// document.getElementById("size-14").onclick=size14
// document.getElementById("size-16").onclick=size16
// function makeSizer(size){
//     return()=>{
//         document.body.style.fontSize=`${size}px`
//     }
// }
// const counter=(function(){
//     let privatecounter=0;
//     function changeBy(val){
//         privatecounter+=val
//     }
//     return{
//         increment(){
//             changeBy(1)
//         },
//         decrement(){
//             changeBy(-1)
//         },
//         value(){
//             return privatecounter;
//         }
//     }
// })();
// console.log(counter.value())
// counter.increment();
// counter.increment();
// console.log(counter.value())
// counter.decrement()
// console.log(counter.value())
// const e=10;
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d+e;
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4))
//without anonymous function
// const e=10;
// function sum(a){
//     return function sum2(b){
//         return function sum3(c){
//             return function sum4(d){
//                return a+b+c+d+e
//             }
//         }
//     }
// }
// const sum2=sum(1)
// const sum3=sum2(2)
// const sum4=sum3(3)
// const result=sum4(4)
// console.log(result)
// function outer(){
//     let getY;
//     {
//         const y=6;
//         getY=()=>y
//     }
//     console.log(typeof y)
//     console.log(getY())
// }
// outer();
// function z(){
//     var b=900;
// function x(){
//     var a=7;
//     function y(){
//         console.log(a,b)
//     }
//    y()
// }
// x()
// }
// z() 
// var z=x() 
// /console.log(z) 
// function hello(){
//    window.alert("Hello")
// }
// setTimeout(hello,3000)

// const timeOutId=setTimeout(function(){window.alert("hi")},3000)
// clearTimeout(timeOutId);
// let timeoutId;
// function startTimer(){
//    timeoutId=  setTimeout(()=>{
//         window.alert("hello")
//     },3000)
//     console.log("started")
// }
// function clearTimer(){
//     clearTimeout(timeoutId)
//     console.log("cleard")

// }
//time method-time tracker
// console.time("test")
// for(let i=0;i<1000000;i++){

// }
// console.timeEnd("test")
// function loadData(){
//     console.time("loadData")
//     for(let i=0;i<10000;i++){

//     }
//     console.timeEnd("loadData")
// }
// loadData()
// function processData(){
//     console.time("processData")
//     for(let i=0;i<1000;i++){

//     }
//     console.timeEnd("processData")
// }
// processData()
// let number=123456.789;
// number=number.toLocaleString("em-US")
// number=number.toLocaleString("hi-IN")
// number=number.toLocaleString("de-DE")
// number=number.toLocaleString(undefined)
// number=number.toLocaleString("em-US",{style:"currency",currency:'USD'})
//  number=number.toLocaleString("hi-IN",{style:"currency",currency:'INA'})
//  number=number.toLocaleString("de-DE",{style:"currency",currency:'EUR'})
// console.log(number)
//  function updateClock(){
//     const now=new Date();
//     let hours=now.getHours().toString().padStart(2,0)
//     const meridiem=hours>=12 ? "PM":"AM";
//     hours=hours%12||12;
//     const minutes=now.getMinutes().toString().padStart(2,0)
//     const seconds=now.getSeconds().toString().padStart(2,0)
//     const timesString=`${hours}:${minutes}:${seconds} ${meridiem}`
//     document.getElementById("clock").textContent=timesString;
//  }
// updateClock()
// setInterval(updateClock,1000)
// const dispaly=document.getElementById("display")
// let timer=null;
// let startTime=0;
// let elapsedTime=0;
// let isRunning=false;
// function start(){
//    if(isRunning){
//     startTime=Date.now()-elapsedTime;
//    }
//    console.log(startTime)
// }
// start()
// function stop(){

// }
// function reset(){

// }
// function update(){

// }

























                                                                                