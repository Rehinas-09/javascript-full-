//spred and rest operator
// var obj={
//     a:1,
//     b:2,
//     c:"Hello"
// }
// // var obj2={
// //     ...obj
// // }
// var objB={
//     a1:1,
//     b1:2,
//     c1:"hello 2"

// }
// var obj2={
//     ...obj,
//     ...objB,
//     z:"hi"
// }
// console.log(obj2)
// var a=[1,2,3,4];
// var b=[6,7,8,9];
// var c=[...a,...b]
// console.log(c)
// var obj={
//     a:1,
//     b:2,
//     c:{
//         name:"raman",
//         age:45
//     }
// }
// var obj2={...obj};
// obj.d=44;
// console.log(obj2,obj)
// var a=Math.max(1,2,33,49,15,6)
// console.log(a)
// var arr=[1,2,33,49,15,6];
// var a=Math.max(...arr);
// console.log(a)
// function sum(a,b,c){
//     return a+b+c
// }
// const nums=[1,2,3]
// console.log(sum(...nums))
// function sumAll(...numbers){
//     return numbers.reduce((accu,curr)=>accu+curr,0);
// }
// console.log(sumAll(1,2,3,4))
// const[first,second,...rest]=[10,20,30,40,50];
// console.log(first)
// console.log(second)
// console.log(rest)
// const user={name:"Rehi",age:24,city:"wayanad"}
// const {name,...rest}=user;
// console.log(name);
// console.log(rest)
// const obj1={
//     name:'Rehinas',
//     place:'kerala',
//     rank:100
// }
// const mark=[1,2,3,4,5]
// function Myfun(){
//     // const name=obj1.name;
//     // const place=obj1.place;
//     // const rank=obj1.rank;
//     // const {
//     //     name,
//     //     ...rest
//     // }=obj1
//     const[a,,b,...rest]=mark;
//     console.log(a,b,rest)
// }
// Myfun()
// const fruits=['apple','orange','banana','cherry']
// fruits.forEach((f,index)=>{
//     console.log(`${index}:${f}`)
// })
// const num=[1,2,3,4]
// let t=0;
// num.forEach((number)=>{
//     t+=number
// })
// console.log(t)
// const numbers=[5,12,8,130,44]
// const found=numbers.find((n)=>n>10);
// console.log(found)
// const users=[
//     {
//         name:"Rehi",age:25
//     },
//     {
//         name:"john",age:30
//     },
//     {
//         name:"sara",age:28
//     }
// ]
// const user=users.find((u)=>u.name=="sara")
// console.log(user)
// const nums=[4,6,14,20,21];
// const div=nums.find((n)=>n%7==0)
// console.log(div)
// const obj={
//     name:"r",
//     subject:{
//         teacher:"bob"
//     }
// }
// const arr=[1,2,3,]
// const {
//     subject:{
//         teacher
//     }
// }=obj
// console.log(teacher)

