interface Person {    //interface定义接口(用来检测类型)
  firstName: string;  
  lastName: string;
}
class Name{ //类名必须大写
  age:number;//类型必须提前定义
  constructor(public firstName, public lastName){
    this.age=18
  }
}
function allname(str:Person){
  console.log(str)
}
allname(new Name('',''))