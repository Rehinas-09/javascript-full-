// let button=document.getElementById("btn")
// button.onclick=()=>{
//     console.log("event started")
//     const arr=[]
//     arr.forEach((item)=>{
//         console.log(item)
//     })
//     $.ajax({
//          url: 'https://jsonplaceholder.typicode.com/todos/1',
//          success:(data)=>{
//               console.log("ajax1 started")
//               arr.push(data.title)

//               console.log("ajax1 ended")
//          },
//          async:true
//     })
//     // $.ajax({
//     //      url: 'https://jsonplaceholder.typicode.com/todos/1',
//     //      success:(data)=>{
//     //           console.log("ajax2 started")
//     //           arr.push(data.title);
//     //           console.log("ajax2 ended")
//     //      },
//     //      async:true
//     //   })
//     // document.getElementById('mytext').value=arr.join("\n")

//     console.log("event ended")

// }
//async and sync allbacks
// console.log("hello")
// const button = document.getElementById("btn")
// button.onclick = () => {

//     console.log("click event strted")
    // const arr=[1,2,3,4]
    // arr.forEach((item)=>{
    //       console.log(item)
    // })
//     const arr = []
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         success: (data) => {
//             console.log("ajax1 started")
//             arr.push(data.title)
//             // $.ajax({
//             //     url: 'https://jsonplaceholder.typicode.com/todos/1',
//             //     success: (data) => {
//             //         console.log("ajax2 started")
//             //         arr.push(data.title)
//             //         console.log("ajax2 endedd")
//             //          document.getElementById('mytext').value = arr.join()
//             //     },
//             //     async: true
//             // })
//             console.log("ajax1 ended")
//         },
//         async: true
//     })
//     // $.ajax({
//     //     url:'https://jsonplaceholder.typicode.com/todos/1',
//     //     success:(data)=>{
//     //         console.log("ajax2 started")
//     //         arr.push(data.title)
//     //         console.log("ajax2 endedd")
//     //     },
//     //     async:true
//     // })
//     // document.getElementById('mytext').value = arr.join()
//     console.log("click event ended")
// }
// console.log("start")
// setTimeout(function(){
//     console.log("this run after 2 second")
// },2000)
// console.log("End")
// function getdata(callback){
//     console.log("fetch data...")
//     setTimeout(function(){
//         const data={name:"Rehi",age:25};
//         callback(data)
//     },3000)
// }
// getdata(function(result){
//     console.log("Data recieved:",result)
// })
// function loadFile(filename,callback){
//     console.log(`loading file:${filename}`);
//     setTimeout( function() {
//         let content="<p>This is the file content</p>"
//         callback(content)       
//     }, 1000);
// }
// loadFile("about.html",function(fileContent){
//     document.body.innerHTML=fileContent
// })
// let pizza;
// function orderPizza(){
//     console.log('order pizza')
//     setTimeout(()=>{
//          pizza=`pizza`
//          console.log("pizza is ready")
//     },2000)
//     console.log("pizza was orderd")
// }
// orderPizza()
// console.log('call quali')
// console.log(`Eat ${pizza}`)
// function orderPizza(callback){
//       setTimeout(()=>{
//         let pizza="pizza";
//         callback(pizza)

//       },2000)

// }
// function pizzaready(pizza){
//     console.log(`eat ${pizza}`)

// }
// orderPizza(pizzaready)
// console.log(`call qoli`)
// window.addEventListener("click",callback)
// function callback(){
//     console.log("cliked")
// }
// console.log("1")
// console.log("2")
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// console.log("3")
// console.log("4")
// function sum(a,b){
//   console.log(a+b)
// }
// function Calculator(a,b,sumCallback){
//      sumCallback(a,b);

// }
// Calculator(1,2,sum)
const hello=()=>{
    console.log("hello")
}
setTimeout(hello,3000)


