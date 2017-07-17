// 布尔类型 boolean
let isTrue: boolean = true;

// 数字 number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 字符串 string
let color: string = "blue";
color = 'red';

// 数组 array
let array: number[] = [1, 2];
let arrayList: Array<number> = [1, 2];


// 元组 tuple
let x: [number, string];
x = [2, 'string'];

// 枚举 enum 
enum Color { red, green = 5, blue };// 默认下标是0 。可以手动修改下标
let red: Color = Color.red;
let green: Color = Color.green;
let blue: Color = Color.blue;
console.log(red, green, blue); // 0 5 6

// 任意类型 any
let notSure: any;
notSure = 2;
notSure = 'notSure'; // 不抱错

// 空值 void
function hello(): void {
    console.log('hello');
}
let unusable: void = undefined;//基本数据类型仅null和undefined

//never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// 解构
let input = [1, 2];
let [first, second] = input;
console.log(first);//相当于input[0]：1
console.log(second);//相当于input[1]：2
[first, second] = [second, first];//交换位置
function f([first, second]: [number, number]) {
    console.log(first);//1
    console.log(second);//2
}
f([1, 2]);

// 剩余变量 ...name
let [num, ...rest] = [1, 2, 3, 4];
console.log(first);//1
console.log(rest);//[2,3,4]
let o = { a: "foo", b: 12, c: "bar" };
let { a, b } = o;
console.log(o, a, b);//{ a: 'foo', b: 12, c: 'bar' } 'foo' 12

// 类 class
class dota {
    hero: string;//默认是public    还有private只能被类内部访问，prevented被类及子类访问
    constructor(public name: string, hero: string) {//此处必须加public，而hero在之前 已申明public
        this.name = name;
        this.hero = hero;
        console.log("dota...")
    }
    showHero() {
        console.log(this.hero)
    }
}
var faker = new dota("faker", "EZ")
faker.showHero()
class lol extends dota {
    constructor(name: string, hero: string, public skill: string) {//子类实例化的时候，先自动执行父类的constructor代码，再执行自己的constructor代码
        super(name, hero);
        this.skill = skill;
        console.log("lol...")
    }
    show() {
        super.showHero();
        this.showSkill();
    }
    private showSkill() {//只能在类的内部调用，即show方法里面的示例
        console.log(this.skill)
    }
    //静态方法，可以让lol类调用，而不能用lol的实例调用
    static qwer() {
        console.log("use qwer to show skill")
    }
}
var lck_faker = new lol("faker", "EZ", "R")
lck_faker.showHero()
lck_faker.show()
lol.qwer()

// 公共、私有、受保护的、静态属性的修饰符和参数属性pubilc private protected static
class Car2 {
    static num: number = 1;
    private engine: string;
    constructor(engine: string) {
        this.engine = engine;
        console.log(Car2.num);
    }
}
// let car2 = new Car2("petrol").engine;//不能访问，protected和private类似，但是可以被子类访问

// 存取器 getters/setters
class Car3 {
    private _carColor: string
    constructor(protected engine: string) {

    }
    getCarcolor(): string {
        return this._carColor
    }
    setCarcolor(color: string) {
        this._carColor = color;
    }
}
let redCar = new Car3("petrol");
redCar.setCarcolor('red');
console.log(redCar.getCarcolor())//red
class human {
    _name: string;
    _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age
    }
    get age() {
        return this._age
    }
    set age(age) {
        //在此判断是否符合设置的年龄规范
        this._age = age
    }
}
var man = new human("people", 100)
//man.age=18;//直接调用set方法
console.log(man.age);//直接调用get方法

// 抽象类 abstrac
// Typescript也有抽象类的概念，它是供其它类继承的基类，一般不会直接被实例化。
// 不同于接口，抽象类必须包含一些抽象方法，同时也可以包含非抽象的成员
// 接口更注重功能的设计，抽象类更注重产品族的体现
abstract class Person {
    abstract speak(): void;//必须在派生类中实现
    walking(): void {
        console.log('walking on the road');
    }
}
class Male extends Person {
    speak(): void {
        console.log('learing typescript for ng4.');
    }
}
let person: Person;//ok 创建一个抽象类引用
// person=new Person();//error: 不能创建抽象类实例
person = new Male();//ok 创建一个男人实例
person.speak();//learing typescript for ng4.
person.walking();//walking on the road

// 函数 function 命名函数 + 匿名函数
function max(x: number, y: number): number {
    return x > y ? x : y;
}
let myMax = function (x: number, y: number): number {
    return x > y ? x : y;
};

// 重载 overload
function css(config: object): void; // css({width:'100px'})
function css(config: string, value: string): void; //css('width','100px')
function css(config: any, value?: any) {
    if (typeof config == 'string') {
        // ...
    } else if (
        typeof config == 'object') {
        // ...
    }
}
// 注意，function css(config: any, value?: any) 并不是重载列表的一部分

// 模块 “内部模块”称做“命名空间”，“外部模块”简称为“模块”。一般提到的模块即是”外部模块“。
export const COMPANY = "GooGle";//导出变量
export interface IdentityValidate {//导出接口
    isGfStaff(s: string): boolean;
}
export class ErpIdentityValide implements IdentityValidate {//导出类
    isGfStaff(erp: string) {
        // return erpService.contains(erp);
        return erp.length > 3 ? false : true
    }
}
// 导出语句
// 我们可能需要对导出的部分重命名，就用到了
class ErpIdentityValide2 implements IdentityValidate {//导出类
    isGfStaff(erp: string) {
        // return erpService.contains(erp);
        return erp.length > 3 ? false : true
    }
}
export { ErpIdentityValide2 };
export { ErpIdentityValide2 as gfIdentityValide }
// 重新导出
// 有时候需要修改，扩展已有的模块，并重新导出给其它模块使用，可以使用重新导出做个包装
// 导出原先的验证器但做了重命名
// export { ErpIdentityValide3 as RegExpBasedZipCodeValidator } from "./ErpIdentityValide3";
// // 或者一个模块可以包裹多个模块，并把他们导出的内容联合在一起通过语法：export * from "./module"

// // 导入 重命名
// import { ErpIdentityValide3 as ERP } from "./ErpIdentityValide3";
// let erpValidator = new ERP()
// console.log(erpValidator);
// // 导入 将整个模块导入到一个变量，并通过它来访问模块的导出部分
// import * as _$ from "./ErpIdentityValide3";
// let myValidate = new _$.ErpIdentityValide3();

// 内部模块
// 内部模块创建一个封闭的作用域，供同一个js文件内的代码使用。(也可以使用///引入其他文件的内部模块。)
module com.gf.Utils {
    export function foo(msg: string) {
        console.log(msg);
    }
    export var name = 'somerandomtools';
}
import Utils = com.gf.Utils;//alias
Utils.foo('hi');
Utils.name = 'Jack';

// 接口 interface
// 接口的作用就是为类型命名和为你的代码或第三方代码定义契约
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

// 函数类型 interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

// 数组类型 interface
// 数组类型具有一个index类型表示索引的类型，还有一个相应的返回值类型表示通过索引得到的元素的类型。
// 支持两种索引类型：string和number。
// 数组可以同时使用这两种索引类型，但是有一个限制，数字索引返回值的类型必须是字符串索引返回值的类型的子类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

// 类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 扩展接口
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

// 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        return "123";
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 装饰器 decorators
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性，或参数上。
// 装饰器利，形如@expression，expression，求值后必须为一个函数，它使用被装饰的声明信息在运行时被调用
// 在Angular2中，主要场景是用元数据（Metadata）的Annotation来定义组件
// Decorator是ES7的草案标准，Annotation是Angular2框架对Deorator的实现

// 方法装饰器
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "Hello," + this.greeting;
    }
}
// 当装饰器@enumerable(false)被调用时，它会修改属性描述符的enumerable属性。
// 这里的@enumerable(false)是一个装饰器工厂，
// 所谓的装饰器工厂就是一个简单的函数，它返回一个表达式，以供装饰器在运行时调用。
function enumerable(value: boolean) {//这是一个装饰器工厂//这是装饰器
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

// 执行顺序
// 由上至下依次对装饰器表达式求值。求值的结果会被当作函数，由下至上依次调用
function f2() {
    console.log("f2():evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f2():called");
    }
}
function g() {
    console.log("g():evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g():called");
    }
}
class C {
    @f2()
    @g()
    method() { }
}
// f2():evaluated
// g():evaluated
// g():called
// f():called

// 类装饰器
// 类装饰器在类声明之前被声明（紧贴着类声明）
// 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
// 类装饰器不能用在声明文件中(.d.ts)，也不能用在任何外部上下文中（比如declare的类）
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
// 注意如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。在运行时的装饰器调用逻辑中不会为你做这些。
@sealed
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello," + this.greeting;
    }
}
function sealed(constructor: Function) {//定义@sealed装饰器
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// 当@sealed被执行的时候，它将密封此类的构造函数和原型。(注：参见Object.seal

// 访问符装饰器
// 访问符装饰器声明在一个访问符的声明之前（紧贴着访问符声明）
// 注意：TypeScript不允许同时装饰一个成员的get和set访问符。
// 相反，所有装饰的成员必须被应用到文档顺序指定的第一个访问符。
// 这是因为，装饰器应用于一个属性描述符，它联合了get和set访问符，而不是分开声明的
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x; this._y = y;
    }
    @configurable(false)
    get x() {
        return this._x;
    }
    @configurable(false)
    get y() {
        return this._y;
    }
}
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

// 属性装饰器
// 属性装饰器声明在一个属性声明之前（紧贴着属性声明）
// class Greeter3 {
//     @format("Hello,%s")
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         let formatString = getFormat(this, "greeting");
//         return formatString.replace("%s", this.greeting);
//     }
// }
// import "reflect-metadata";
// const formatMetadataKey = Symbol("format");
// function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// 泛型(Generic)
// 泛型是为了提升代码的复用性而开发的，与Java，C#中的泛型类似。
// 比如我们有个最小堆算法，需要同时支持number和string。这样可以把集合类型改为any。
// 这样就完全放弃了类型检查。这样实现有很大的瑕疵，而使用泛型解决更为优雅。
// 我们可以声明一个最小堆适用于number类型newMinHeap()，然后声明一个最小堆适用于string类型newMinHeap()
class MinHeap<T>{
    list: T[] = [];
    add(element: T): void {
        // ...
        this.list.push(element)
    }
    min() {//min(): T 报错？
        return this.list.length ? this.list[0] : null;
    }
}
var heap1 = new MinHeap<number>();
heap1.add(3);
heap1.add(5);
console.log(heap1.min());//3
var heap2 = new MinHeap<string>();
heap2.add('a');
heap2.add('c');
console.log(heap2.min())

// 泛型也支持函数。下面zip函数声明了两个泛型类型T1T2，并把两个数组压缩到一起
function zip<T1, T2>(l1: T1[], l2: T2[]) {
    //zip<T1, T2>(l1: T1[], l2: T2[]): [T1,T2][]  报错？
    var len = Math.min(l1.length, l2.length);
    var ret = [];
    for (let i = 0; i < len; i++) {
        ret.push([l1[i], l2[i]]);
    }
    return ret;
}
console.log(zip<number, string>([1, 2, 3], ['Jim', 'Sam', 'Tom']))
