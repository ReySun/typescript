// 此例子来源于《Learing Typescript中文版》和《揭秘Angular 2》
/* 1. 方法装饰器 */
// demo 1
function logMethod(target: any, key: string, descriptor: any) {
    // 保存原有方法的引用
    var originalMethoad = descriptor.value;
    console.log(originalMethoad);//[Function]
    console.log(descriptor);
    /*{   value: [Function],
            writable: true,
            enumerable: true,
            configurable: true } */
    descriptor.value = function (...args: any[]) {
        // 将方法参数转化为字符串
        console.log(args);//[ 'hello gulp ts-decorator' ]
        console.log(arguments);//类数组对象：{ '0': 'hello gulp ts-decorator' }
        var a = args.map(a => JSON.stringify(a)).join();

        // 执行方法，得到其返回值
        var result = originalMethoad.apply(this, args);
        console.log(result);//ReySun lly says: hello gulp ts-decorator

        // 将返回值转化为字符串
        var r = JSON.stringify(result);

        console.log(`Call: ${key} 。(${a}) => ${r}`); // Call: saySomething 。("hello gulp ts-decorator") => "ReySun lly says: hello gulp ts-decorator"

    }
}
class Person {
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    @logMethod
    public saySomething(something: string): string {
        return this.name + " " + this.surname + " says: " + something;
    }
}

var man = new Person('ReySun', 'lly');
var words = man.saySomething('hello gulp ts-decorator');
// console.log(words);
// 没调用@logMethod时查看是ReySun lly says: hello gulp ts-decorator。
// 调用@logMethod时查看是undefined

// demo 2
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


// 2. 类装饰器
// 类装饰器用来修改类的构造函数，如果装饰器函数返回undefined，那么类任然使用原来的构造函数，否则，覆盖原类 的构造函数
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
    console.log('===' + constructor + '===');//function Greeter2(message) { this.greeting = message;}
    console.log(constructor.prototype);//Greeter2 { greet: [Function] }
    console.log(constructor.prototype == Greeter2);//false
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// function logClass(target: Function) {
//     var original = target;

//     // 保存原构造函数的引用
//     console.log(constructor);//[Function: constructor]
//     function constructor(constructor: any, args: any) {
//         var c: any = function () {
//             return constructor.apply(this, args);
//         }
//         c.prototype = constructor.prototype;
//         return new c()
//     }

//     // 新的构造函数行为
//     var f: any = function (...args) {
//         console.log("NEW: " + original.name);//NEW: Person2
//         return constructor(original, args)
//     }

//     // 复制原型，使instanceof操作能正常使用
//     f.prototype = original.prototype;

//     return f
// }
// @logClass
function logClass2(target: Function) {
    console.log('===' + target + '===');
    console.log(target.prototype == Person2);
}
@logClass2
class Person2 {
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    public saySomething(something: string): string {
        return this.name + " " + this.surname + " says: " + something;
    }
}
var man = new Person2('ReySun', 'lly');
var words = man.saySomething('hello gulp ts-decorator');

