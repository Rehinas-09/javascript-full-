import { test1 } from "./lib2.js";
const name="My Array Library";

const options={
    version:'1.1',
    author:'Rehinas'
}
function addAll(arr=[]){
    console.log('addAll');
    return arr.reduce((totel,item)=>totel+item,0)
    
}
 function findMax(arr=[]){
    console.log('findMax');
    return Math.max(...arr)
    
}
   function log(val){
    console.log('INSIDE',val)
}
export default()=>{
    console.log("hello")
}
export{
    name as library_name,
    options,
    addAll,
    findMax,
};
export  {test1} from './lib2.js';