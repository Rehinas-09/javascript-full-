// function outer(){
//     let msg="hello"
//     function inner(){
//        console.log(msg)
//     }
//    inner()
// }
// outer()
function createCounter(){
let count=0
function increment(){
    count++;
    console.log(`count increased to ${count}`)
}
return{increment}
}

const counter=createCounter()