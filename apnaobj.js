// const Student={
//     fullname:"Rehinas",
//     marks:"70",
//     printMarks:function(){
//         console.log("Marks:"+this.marks)
//     }
// }
// console.log(Student.printMarks())
// let arr=["apple","orange","mango","kiwi"]
// console.log(typeof(arr))
// const employee={
//     clacTax(){
//         console.log("tax rate is 10%")
//     }
// }
// console.log(employee.clacTax())
// const KaranaArjun={
//     salary:50000,
//     clacTax(){
//         console.log("tax rate is 20%")
//     }
// }
// const KaranaArjun1={
//     salary:50000,
// }
// const KaranaArjun2={
//     salary:50000,
// }
// KaranaArjun.__proto__=employee;
// KaranaArjun1.__proto__=employee;
// KaranaArjun2.__proto__=employee;
// class ToyotaCar{
//     constructor(){
//         console.log("creating new object")
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//          console.log("stop")
//     }
//     setBrand(brand){
//         this.brandName=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// class Parent{
//     hello(){
//         console.log("hello")
//     }
// }
// class child extends Parent{
// }
// const sub=new child()
// sub.hello()
// class Person{
//     constructor(name){
//         this.spesies="home sapiens",
//         this.name=name;
//     }
//     eat(){
//         console.log('eat')
//     }


// }
// class Engineer extends Person{
//     constructor(branch){
        
//         super();//to invoke parent class constructor
//         this.branch=branch
//     }
//     Worker(){
//         super.eat()
//        console.log("solve problem, Build something")
//     }
// }
// let eng=new Engineer("computer application");
// class User{
//     constructor(name,email){
//          this.name=name;
//         this.email=email;
//     }
//      viewData(){
//         console.log("name email")
//     }
// }
// // const user=new User("rehinas","rehinas@gmail.com")
// // console.log(user.viewData())
// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//     }
//      editData(){
//         console.log("you can edit all the data inside the details")
//      }
// }
// const ad=new Admin("rehinas","rehinas@gmail.com")
// console.log(ad)

