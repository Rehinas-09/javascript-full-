// console.log('strated');
// let a,b,result;
// try{
//     console.log("on Try")
//     a=getVal1();
//     b=getVal2();
//     result=ProcessValue(a,b)
// }
// catch(e){
//     console.log("on Catch")
//     console.log("inside catch",e)
//     result=0;
    
// }
// finally{
//     console.log("In finally")
// }
// console.log(result)
// console.log('ended')

// function getVal1(){
//     throw new Error("created error")
//     return 12;
// }
// function getVal2(){
//     return 22;
// }
// function ProcessValue(a,b){
//     return a+b;
// }
// console.log('hello');
// console.log(x)
// try{
//     console.log(x)
// }
// catch(error){
//    console.error(error)
// }
// finally{
//     console.log("this always executed!")
// }
// console.log('you have reached in the end!')
// try{
//     const divided=Number(window.prompt("Enter a dividend"))
// const divisor=window.prompt("Enter a divisor");
// if(divisor==0){
//     throw new Error("you can't divide by zero")
// }
// if(isNAN(divided)|| isNaN(divisor)){
//      throw new Error("values must be a number")
// }
// const result=divided/divisor;
// console.log(result)
// }
// catch(error){
//     console.error(error)
// }
console.log("started")
let a,b,result;

// console.log("you have reached the end")
try{
    console.log("on try")
    a=getVal1();
    b=getVal2();
    result=processValues(a,b)
}
catch(error){
    console.log("on catch")
    result=0;
    AbstractRange()
}
finally{
   console.log("finally")
}
console.log(result)
function getVal1(){
    console.log('inside getVal1')
  return 12;
}
function getVal2(){
    return 22
}
function processValues(a,b){
    return a+b;
}
                                                                                                                       