/* 接口的作用就是为类型命名和为你的代码或第三方代码定义契约 */
interface FullName {
  firstName: string;
  secondName: string;
  job?: string;//可选参数
  readonly age: number;//只读参数
}
function printLabel(name: FullName) {
  console.log(name.firstName + "" + name.secondName);
}
let myObj = {
  age: 10,
  firstName: 'Jim',
  secondName: 'Raynor'
};
printLabel(myObj);

// 数组类型 interface
// 数组类型具有一个index类型表示索引的类型，还有一个相应的返回值类型表示通过索引得到的元素的类型。
// 支持两种索引类型：string和number。
// 数组可以同时使用这两种索引类型，但是有一个限制，数字索引返回值的类型必须是字符串索引返回值的类型的子类型
interface StringArray {
  [index: number]: string;
}
let myArrayd: StringArray;
myArrayd = ["Bob", "Fred"];
/* 索引签名设置为只读，这样就防止了给索引赋值 */
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  xx: number;
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
let readArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

/* 可索引的类型 */
// 错误：使用'string'索引，有时会得到Animal!
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkay {
  [x: string]: Animal;
  [y: number]: Dog;
}


/* 任意个参数 */
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
interface SearchFunc {
  (source: string, subString: string, opacity: 0.2): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
  return true
}


/* 类静态部分与实例部分的区别 */
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): any;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


/* 函数类型 interface */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearchx: SearchFunc;
mySearchx = function (src: string, sub: string) {
  let result = src.search(sub);
  if (result == -1) {
    return false;
  } else {
    return true;
  }
}


/* 继承接口 */
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


/* 接口继承类 */
// 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() { }
}
class TextBox extends Control {
}
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }