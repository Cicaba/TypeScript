const enum E {
  A, B, C, D
}
interface Test {    //interface定义接口(用来检测类型)
  firstName: string;
  lastName: string;
  test?: string;
  age: number;
}
class Debug {
  log(): this {
    console.log('====================================');
    console.log(this);
    console.log('====================================');
    return this;
  }
  debug(): this {
    debugger;
    return this;
  }
}
class Test extends Debug { //类名必须大写
  constructor(firstName: string, lastName: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 18;
    this.test = '哦豁'
  }
}
new Test('(ˇ?ˇ) 想～', '(☄⊙ω⊙)☄').log();
console.log(E.A)
export default Debug