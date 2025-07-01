// const display=document.getElementById("display");
// function appendtoDisplay(input){
//     display.value+=input;
// }
// function clearDisplay(){
//     display.value=" "
// }
// function calculate(){
//     try{
//         display.value=eval(display.value)
//     }
//     catch(error){
//       display.value="Error"
//     }

// }
// document.title="My webSite"
// document.body.style.backgroundColor="black"
// console.dir(document)
// const username=""
// const welocmeMsg=document.getElementById("welcome-msg");
// welocmeMsg.textContent += username ===""?"Guest":username; 
// const myHeading=document.getElementById("my-heading");
// myHeading.style.backgroundColor="yellow";
// myHeading.style.textAlign="center";
// const fruits=document.getElementsByClassName("fruits")
// console.log(fruits)
// fruits[0].style.backgroundColor="yellow"
// for(let fruit of fruits){
//     fruit.style.backgroundColor='yellow'
// }
// Array.from(fruits).forEach(fruit=>{
//     fruit.style.backgroundColor="yellow"
// })
// const h4Elements=document.getElementsByTagName("h4")
// const liElements=document.getElementsByTagName("li")
// console.log(h4Elements)
// for(let h4Element in h4Elements){
//      h4Element.style="yellow"
// }
// for(let h4Elemnt of h4Elements){
//     h4Elemnt.style.backgroundColor="yellow"
// }
// Array.from(h4Elements).forEach(h4Element=>{
//     h4Element.style.backgroundColor="yellow"
// })
// for(let liElement of liElements ){
//     liElement.style.backgroundColor="lightgreen"
// }
// Array.from(liElements).forEach(h4Element=>{
//     h4Element.style.backgroundColor="lightgreen"
// })
// const element=document.querySelector(".fruits");
// element.style.backgroundColor="yellow"
// const fruits=document.querySelectorAll(".fruits")
// fruits[0].com
//dom navigation
// const element=document.getElementById("desserts")
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow"
// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow"
// })
// const element=document.getElementById("desserts");
// const lastChild=element.lastElementChild;
// lastChild.style.backgroundColor="yellow";
// const ulElements=document.querySelectorAll("ul")
// ulElements.forEach(ulElement=>{
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor="yellow";
// })
// const element=document.getElementById("onions");
// const nextSibiling=element.nextElementSibling;
// nextSibiling.style.backgroundColor="yellow"
// const element=document.getElementById("desserts")
// const prevSibiling=element.previousElementSibling;
// prevSibiling.style.backgroundColor="yellow"
// const element=document.getElementById("carrots")
// const parent=element.parentElement
// parent.style.backgroundColor="yellow"
//step 1 create element
// const newH1=document.createElement("h1")
// // setp 2 add attributes
// newH1.textContent="I like pizza";
// newH1.id="myH1"
// newH1.style.color="tomato"
// newH1.style.textAlign="center"

//setp 3 append the element to the dom
// document.body.append(newH1)
// //document.body.prepend(newH1)
// document.getElementById("box2").append(newH1)
// // document.getElementById("box2").prepend(newH1)
// // const box2=document.getElementById("box3")
// // document.body.insertBefore(newH1,box2)
// // const boxes=document.querySelectorAll(".box")
// // document.body.insertBefore(newH1,boxes[1])
// document.getElementById('box2').removeChild(newH1)
//create the element
// const newListItem=document.createElement("li")
// newListItem.textContent="coconut"
// newListItem.style.fontWeight="bold"
// newListItem.style.backgroundColor="lightgreen"

// //append to body
// // document.body.prepend(newListItem)
// // document.getElementById("fruits").append(newListItem)
// // document.getElementById("fruits").prepend(newListItem)
// // const orange=document.getElementById("banana");
// // document.getElementById("fruits").insertBefore(newListItem,banana)
// const boxes=document.querySelectorAll('#fruits')
// document.body.insertBefore(newListItem,boxes[0])
// const myBox=document.getElementById("myBox");
// const myButton=document.getElementById("myButton")

// // function chnageColor(event){
// //     event.target.style.backgroundColor="tomato"
// //     event.target.textContent="OUCH";
// // }
// myButton.addEventListener("click",event=>{
//     myBox.style.backgroundColor="tomato";
//     myBox.textContent="Ouch"
// })
// myButton.addEventListener("mouseover",event =>{
//     myBox.style.backgroundColor="yellow";
//     myBox.textContent="Dont do it!"
// })
// myButton.addEventListener("mouseout",(event)=>{
//      myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click me"
// })
// const myBox = document.getElementById("myBox")
// document.addEventListener("keydown", (event) => {
//     //    console.log(`key down =${event.key}`)
//     myBox.textContent ="smile"
//     myBox.style.backgroundColor="tomato"
// })
// // document.addEventListener("keyup", (event) => {
// //     console.log(`key up = ${event.key}`)
// // })
// document.addEventListener("keyup",(event)=>{
//     myBox.textContent="helloo"
//     myBox.style.backgroundColor="lightblue"
// })
// const myBox=document.getElementById("myBox")
//  const moveAmount=10;
//  let x=0;
//  let y=0;
//  document.addEventListener("keydown",event=>{
//      if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y-=moveAmount;
//                 break; 
//             case "ArrowDown":
//                 y+=moveAmount;
//                 break; 
//             case "ArrowLeft":
//                x-=moveAmount;
//                break;
//             case "ArrowRight":
//                x+=moveAmount;
//                break;                                 

//      }
//      myBox.style.top=`${y}px`;
//      myBox.style.left=`${x}px`;
//     } 
// })    
// const myButton=document.getElementById("myButton");
// const myImg=document.getElementById("myImg");
// myButton.addEventListener("click",event=>{
//     if(myImg.style.visibility==="hidden"){
//         myImg.style.display="visible"
//         myButton.textContent="Hide"
//     }
//     else{
//         myImg.style.visibility="hidden"
//     myButton.textContent="show"

//     }
// })
// let buttons=document.querySelectorAll(".myButtons");
// console.log(buttons)
// buttons.forEach(button=>{
//    button.style.backgroundColor="green";
//    button.textContent+=","
// });
// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="tomato"
//     })
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="hsl(205,100%,10%"
//     })
// })
// const newButton=document.createElement("button");
// newButton.textContent="Button 5";
// newButton.classList="myButtons"
// document.body.append(newButton)
// buttons=document.querySelectorAll(".myButtons");
// console.log(buttons)
// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.remove()
//         buttons=document.querySelectorAll(".myButtons");
//         console.log(buttons)
//     });
// })
// const myButton=document.getElementById("myButton");
// const myH1=document.getElementById("myH1")
// myButton.classList.add("enabled")
// myButton.classList.remove("enabled");
// myButton.classList.add("hover")
// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover")
// })
// myH1.classList.add(enabled)
// myButton.classList.add("enabled")
// myH1.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//       event.target.textContent+="oo"
//     }
//     else{
//              event.target.classList.replace("enabled","disabled")
//     }
    
// })
// myButton.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//       event.target.textContent+="oo"
//     }
//     else{
//              event.target.classList.replace("enabled","disabled")
//     }
    
// })
// let button=document.querySelectorAll("myButtons")
// button.forEach(btn=>{
//     btn.classList.add("enabled")
// })         
// const date=new Date(2000,8,21)
// console.log(date)
// const choice=["rock","paper","scissors"]
// const playerDisplay=document.getElementById("playerDisplay")
// const computerDisplay=document.getElementById("computerDisplay")
// const resultDisplay=document.getElementById("resultDisplay")
// function playGame(playerChoice){
//     const computerChoice=choice[Math.floor(Math.random()*3)];
//     let result=" ";
//     if(playerChoice===computerChoice){s
//         result="IT'S A TIE"
//     }
//     else{
//         switch(playerChoice){
//             case "rock":
//                result = (computerChoice==="scissors")?"you win":"you lose";
//                break;
//             case "paper":
//                result=(computerChoice==="paper")?"you win":"you lose";
//               break;
//             case 'scissors':
//                 result=(computerChoice==="paper")?"you win":"you lose"

//         } 
//     }
//     playerDisplay.textContent=`player:${playerChoice}`;
//     computerDisplay.textContent=`computer:${computerChoice}`;
//     resultDisplay.textContent=result;
//     switch(result){
//         case "you win":
//         resultDisplay.classList.add("greenText");
//         break;
//         case "you lose":
//             resultDisplay.classList.add("redText")
//             break;
//     }  
// } 
// const slides=document.querySelectorAll(".slides img")
// let slideIndex=0;
// let Intervalid=null;

// function initializeSlider(){
//   slides[slideIndex].classList.add("displaySlide")
// }
// function showSlider(){

// }
// function prevSlide(){

// }
// function nextSlide(){

// }
// initializeSlider()  
const cart=["shoes","pants","kurta"];
api.createOrder(cart,function(){
     api.proceedToPayment(function (){
        api.showOrderSummery(function(){
             api.updateWallet()                                 
        })
     })
});
//paramid of doom                                                        