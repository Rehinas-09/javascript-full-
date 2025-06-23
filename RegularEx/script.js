function textOnchange(arg){
    const label=document.getElementById('validate_label')
    const error=validate(arg.value)
    if(error){
        label.innerText=error
    }
    else{
        label.innerText=''
    }
}
// const regexp=/fish.+/i;
// // const result=regexp.test('my Cat');
// // console.log(result)
// const str1="The cat is white";
// const str2="cat eats fish";
// const str3="these are good fishes";
// const str4=`
// good meat
// is always good
// `;
// var result1=regexp.test(str1)
// console.log(result1)
// var result2=regexp.test(str2)
// console.log(result2)
// var result3=regexp.test(str3)
// console.log(result3)
// var result4=regexp.test(str4)
// console.log(result4)     
// function textOnchange(arg){
//     const label=document.getElementById('validate_label');
//     const error=validate (arg.value);
//     if(error){
//         label.error;
//     }
//     else{
//     label.innerHTML=' '
//     }
// }
// function validate(value){
//     const regexp=/^[a-z][a-z0-9]*$/i;
//     const result=regexp.test(value);
//     if(result){
//         return ' '
//     }
//     else{
//         return 'invalid string'
//     }
// }
// const regexp=/./
// const string="Helll7lo";
// const result=regexp.test(string)
// console.log(result)
// function validate(value){
// const regex=/^\d{1,2}-\d{1,2}-d{4}$/i    
// const result=regex.test(value);
// if(result){
//     return ' '
// }
// else{
//     return 'Invalid String'
// }
// }   