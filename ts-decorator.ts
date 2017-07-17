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
var words= man.saySomething('hello gulp ts-decorator');
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