// console.log("started");
//   $.ajax({
//            type:'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/1',
//                success:(msg)=>{
//                  console.log(msg)
//             },
//            error:(xhr,statusText)=>{
//                 console.log(statusText)
//            }

//   });
//  const pr=myFetch('https://jsonplaceholder.typicode.com/todos/1');
//  console.log(pr)
// console.log("ended")
// console.log(hi)
// function hi(){
//     console.log("hi")
// }
const card=["shoes","pants","kurta"]
createOrder(card,function(){
    proceedToPayment(orderId)
    
});//orderid

