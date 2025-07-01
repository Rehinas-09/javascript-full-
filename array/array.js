//  let marks=[97,82,64,36];
// //  console.log(marks)
// //  console.log(marks.length)//property
//  let heros=["iron man","thor","hulk","shaktiman","spiderman"];
// //  console.log(heros)
// //  console.log(typeof(marks))
// for(let i=0;i<heros.length;i++){
//     console.log(heros[i])
// }
// //for of
// for(let item of heros){
//     console.log(item)
// }
// let cities=["delhi","pune","mumbai","hyderabad","gurgaon"]
// for(let city of cities){
//     console.log(city)
// }
// let marks=[85,97,44,37,76,60]
// let sum=0
// let total=marks.length;
// console.log(total)
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i]
// }
// console.log(sum)
// let avg=sum/total;
// console.log(avg)
// let item=[250,645,300,900,5]
// let final=[]
// for (let i=0;i<item.length;i++){
//      let discount=item[i]*10/100;
//      let price=item[i]-discount;
//      final.push(price)
// }
// console.log(final)
// let foodItems=["potato","apple","litchi","tomato"]
// foodItems.push("chips")
//slice
// let marvelHeroes=["thor","spiderman","ironman","antman",]
// console.log(marvelHeroes)
// console.log(marvelHeroes.slice(1,3))
// //splice change original array(add,remove,replace)
// let arr=[1,2,3,4,5,6,7]
// //arr.splice(2,2,101,102)
// //element add
// arr.splice(2,0,101)
// console.log(arr)
// let companies=["Bloomberg","microsoft","Uber","Google","IBM","Netflix"]
// companies.shift()
// console.log(companies)
// companies.splice(1,1,"ola")
// console.log(companies)
// companies.push("amazon")
// console.log(companies)
// let nums=[2,4,5,1,2,3]
// for (let i=0;i<nums.legth;i++){
//     for(let j=0;j<nums.legth-1)
// }
let arr = [5, 3, 8, 1,1, 2];
let result=[]

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;

      }
    }
}
