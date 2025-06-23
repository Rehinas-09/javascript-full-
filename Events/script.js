let btn=document.getElementById("btn1");
btn.addEventListener('click',(evt)=>{
    console.log("button clicked")
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
})

// console.log(btn)
// btn.onclick=()=>{
//     console.log("button clicked")
// }
// btn.onclick=(e)=>{
//     console.log("handler2")
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)

// }
// let box=document.getElementById("div");
// box.onmouseover=()=>{
//     console.log("you are inside the div")
//
