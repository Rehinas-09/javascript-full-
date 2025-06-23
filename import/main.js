import { createButton } from "./widjet.js";
createButton('feature 1',()=>{
     alert('featu')
})
createButton('feature 2',()=>{
    createButton('start disco',changebg);
    createButton('stop disco')
})
let isgreen=true
let handle=null
function changebg(){
    handle= setTimeout(()=>{
         document.body.style.background=isgreen?'green':"blue";
         isgreen=!isgreen;
    },500)
}
function stopchangingbg(handle){
    if(handle){
        clearInterval(handle)
        handle=null;
        document
      
    }
}