// const var1="hi reh, how's going";
// const var2='hi reh, how\'s going';
// const var3=`hi reh
// how are you
//   are you okay`
// console.log(var3)
// const products = [
//   { productName: 'Pen', price: 10 },
//   { productName: 'book', price: 20 }
// ];

// document.body.innerHTML = products.map((item) => {
//   return `
//     <div class="item">
//       <h4>Product Name: ${item.productName}</h4>
//       <div>price: ${item.price}</div>
//     </div>`;
// })
// const productName="Pen";
// const price=12 
// const value=`The ${productName} is ${price} Rs`
// const msg=`The product is ${price>10?'constly':'affordable'}`
// console.log(msg)
// console.log(value)
//function deafult parametr and arguments
// function avg(a=getDefault(),b=a){// this kind of argument is called default argument
//     console.log(a,b);
//     const avg=(5+b)/2;
//     return avg; 
// }
// function getDefault(){
//     return 100;
// }
// const av=avg()
// console.log(av)
//rest paramiter
// function test(){
//     const arr=[11,33,43,22]
//     const[a,b,...rest]=arr;
//     console.log(a,b,rest)
// }
// test()
// function test(...totel){
//     const a=totel.reduce((sum,curr)=>sum+curr,0)
//     console.log(a)
// }
// const a=[11,44,64,22,66,3,100]
// test(...a)
// function test({name,age}){
//    console.log(name,age);
// }
// const obj={
//     name:'rehinas',
//     age:24
// }
// test(obj);
// scope
// function test(){
//     console.log(testVar);
//     let testVar;
//     console.log(testVar)
// }
// test()
// function test(){
//     let a=20;
//     if(true){
//         let a=100;
//         console.log(a)
//     }
//     //console.log(a)
// }
// test()
// function test(){
//     const a=[];
//     console.log(a)
// }
// test()
//ineger
// var a=10;
// //boolen
// var b=false;
// //String

// var c='code'
// //Array
// var d=['rehinas','ajmal']
// Object
// var e={
//     name:"rehinas",
//     age:24,
//     topic:['javascript','React','SCSS','git','aws'],
//     caption:'keep calm and js'

// }
//  var JsonE=JSON.stringify(e)
//  var jsonA=JSON.parse(JsonE)
//  console.log(JsonE)
//  console.log(jsonA)
// var jsonE=`
// {
//     "name":"rehinas",
//     "age":24,
//     "topic":["javascript","React","SCSS","git","aws"],  //this is not a object this is a json format
//     caption:"keep calm and js",

// }
// `




