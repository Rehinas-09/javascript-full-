// const arr=[5,1,3,2,6]
// //double the element in an array
// const output=arr.map((num)=>{
//     return num*2})  
// console.log(output)
// //triple the element in an array
// const triple=arr.map(num=>num*3)
// console.log(triple)
// //coverted to binary
// const binary=arr.map(num=>num.toString(2))
// console.log(binary)

//filter function
// const number=[1,2,3,4,5,6]
// const evenNumber=number.filter(function(num){
//     return num%2==0;
// })
// console.log(evenNumber)
// //example 2
// const ages=[12,18,20,15,30,16]
// const adults=ages.filter((age)=>age>=18);
// console.log(adults)
// //example 3
// const user=[
//     {
//         name:"Rehi",online:true
//     },
//     {
//         name:"Ali",online:false,
//     },
//     {
//         name:"Sara",online:true
//     }
// ]
// const onlineUser=user.filter(user=> user.online)
// console.log(onlineUser)
// //exmaple 4
// const name=['John','Aman','Elizabeth','Bob']
// const longName=name.filter(name=>name.length>4)
// console.log(longName)
//Reduce function
// const number=[1,2,3,4,5]
// const total=number.reduce(function(acc,curr){
//     return acc+curr
// },0)
// console.log(total)
// //example 1
// const numbers=[10,20,30]
// const sum=numbers.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(sum)
// //example 2
// const nums=[5,12,8,130,44]
// const max=nums.reduce((acc,curr)=>{
//   return curr>acc? curr:acc
// },nums[0])
// console.log(max)
//exapmle 3
// const arr=[5,1,3,2,6]
// const output=arr.reduce((acc,curr)=>{
//    if(curr>acc){
//     acc=curr
//    }
//    return acc
// },0)
// console.log(output)
const users=[
    {
        firstname:"rehinas",lastname:"m",age:24
    },
    {
        firstname:"ajmal",lastname:"t k",age:25
    },
    {
        firstname:"aparna",lastname:"appi",age:24
    },
    {
        firstname:"anisha",lastname:"poulose",age:77
    }
]
// const fullname=users.map((user)=>{
//   return user.firstname+" "+user.lastname
// })
// console.log(fullname)
// const count=users.reduce((acc,curr)=>{
//      if(acc[curr.age]){
//        acc[curr.age]=++acc[curr.age]
//      }
//      else{
//         acc[curr.age]
//      }
//      return acc;
// },{})
// console.log(count)
// const fn=user.filter(x=>x.age< 30).map((x)=> x.firstname)
// console.log(fn)

