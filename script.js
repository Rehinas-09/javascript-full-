// function myfun(ar){
//     console.log(ar)}
// const obj1={
//     name:'rehinas',
//     place:'wayanad',
//     rank:1,
// };
// const ranks=[1,4,6,7,12]
// function myFunction({name,place}){
//     console.log(name,place)
//     var [a,b,c]=getValue()
//     console.log([a,b,c])
//     // const {
//     //     name,
//     //     ...others
//     // }=obj1;
//     // console.log(name,others)
//     // const [a,b,...rest]=ranks;
//     // console.log(a,b,rest)
// }
// function getValue(){
//     return ranks;
// }
// myFunction(obj1)
// var obj1={
//     name:"rehinas",
//     place:"chundale"
// }
// var obj2={
//     name:"ajmal",
//     place:"bathery"
// }
// function abc(){
//     var {
//         name,
//         place
//     }=obj1;
//     var {
//         name:name2,
//         place:place2
//     }=obj2;
//     console.log(name,place,name2,place2)
// }
// abc()
// const arr=[
//     {
//         name:"rehinas",
//         mark:100,
//         place:"chundale"
//     },
//     {
//         name:"ajmal",
//         mark:90,
//         place:'bathery'
//     },
//     {
//         name:"anisha",
//         mark:40,
//         place:"manadhavadi"
//     },
//     {
//         name:"aparna",
//         mark:30,
//         place:"vaduvanjal"
//     }
// ]
// let sum=0;
// arr.forEach((item, index)=>{
//     console.log(index)
// })
// console.log(sum)
// var found=arr.fi((item)=>{
//  return item.mark < 30;
// }
// )
// console.log(found)
// var found=arr.map((item)=>{
//     return {
//         ...item,
//         country:"india"
//     }

// })
// console.log(found)
//reduce
// var value=arr.reduce((total,item)=>{
//     total.push(item.name)
//     return total=item.mark;
// },[])
// console.log(value)
// const nums=[1,2,3,4];
// const squre=nums.map(num=>num*num)
// console.log(squre)
// const names=["Rehi","Ammu","Arun"];
// const nameWithIndex=names.map((name,index)=>`${index+1}.${name}`);
// console.log(nameWithIndex)
const users=[
    {
        id:1,name:'Rehi'
    },
    {
        id:2, name:'Nikil'
    },
    {
        id:3, name:'Ammu'
    }
];
const names=users.map(user=>user.name);
console.log(names)
