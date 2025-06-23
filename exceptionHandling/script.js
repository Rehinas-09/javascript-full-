console.log('strated');
let a,b,result;
try{
    console.log("on Try")
    a=getVal1();
    b=getVal2();
    result=ProcessValue(a,b)
}
catch(e){
    console.log("on Catch")
    console.log("inside catch",e)
    result=0;
    
}
finally{
    console.log("In finally")
}
console.log(result)
console.log('ended')

function getVal1(){
    throw new Error("created error")
    return 12;
}
function getVal2(){
    return 22;
}
function ProcessValue(a,b){
    return a+b;
}