// function greeter(person:string) {    //在形参定义参数类型
//   console.log("Hello, " + person);
// }
// let user = '你大爷的';
// greeter(user);
// ****************************************************************************

// interface Person {    //interface定义接口
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {  //定义一个方法
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "小", lastName: "米" };
// console.log(greeter(user))
//******************************************************************************** 

// //定义一个接口
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// //定义一个类
// class Student {
//   // TypeScript的默认访问修饰符是public。 
//   //   1）public声明的属性和方法在类的内部和外部均能访问到。 (new出来的对象都可以获得public 声明的属性和方法)
//   //   2）protected声明的方法和属性只能在类的内部和其子类能访问。 
//   //   3）private声明的方法和属性只能在其类的内部访问。

//   fullName: string;//公共属性
//   constructor(public firstName, public middleInitial, public lastName) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("参数1", "参数2", "参数3");
// let str : object[] = [()=>{}]
// console.log(str);
//*************************************************************************** */

// let obj: Object = { name: '小米', age: 18 }
// Object.defineProperty(obj, "name2", {
//   // value: '魅族',
//   // writable: true,
//   enumerable: true,
//   configurable: true,
//   get() {
//     return '你要获取'
//   },
//   set(val){
//     //this.name2 = val
//     console.log(val)
//   }
// })
// console.log(obj)

//****************************************************************************** */
// //枚举
// enum Color {Red, Green=0, Blue};
// let ColorName:string = Color[0];
// console.log(Color.Red,Color.Green);
// console.log(ColorName);
// let prettySure: any[] = [123,"3211"];
// console.log(prettySure);
//**************************************类型断言**************************************** */
// interface Name {
//   name : string;
//   age : number;
// }
// class Message {
//   constructor(public name ,public age){

//   }
// }
// function log(msg : Name){
//   console.log(msg)
// }
// log((new Message("xm",18) as Name))
//******************************************const********************************************** */
// const obj:object = {
//   name:"小米",
//   age:18
// }
// obj.name = ["123"]

//学习笔记二

//**********************************************函数类型************************************************** */
// interface Search {
//   (height: string,
//   width: string):number
// }
// let fn:Search = function(str){
//   return 123
// }
// fn("123","123")

//***********************************************可索引类型********************************************************* */
interface StringArray {
  readonly [index: number]: number|string;
}
let myArray: StringArray = [1, "Fred"];

console.log(myArray[0]);