"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, key, descriptor) {
    var originalMethoad = descriptor.value;
    console.log(originalMethoad);
    console.log(descriptor);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log(arguments);
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = originalMethoad.apply(this, args);
        console.log(result);
        var r = JSON.stringify(result);
        console.log("Call: " + key + " \u3002(" + a + ") => " + r);
    };
}
var Person = (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.saySomething = function (something) {
        return this.name + " " + this.surname + " says: " + something;
    };
    __decorate([
        logMethod
    ], Person.prototype, "saySomething", null);
    return Person;
}());
var man = new Person('ReySun', 'lly');
var words = man.saySomething('hello gulp ts-decorator');
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function f2() {
    console.log("f2():evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f2():called");
    };
}
function g() {
    console.log("g():evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g():called");
    };
}
var C = (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f2(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
var Greeter2 = (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    Greeter2 = __decorate([
        sealed
    ], Greeter2);
    return Greeter2;
}());
function sealed(constructor) {
    console.log('===' + constructor + '===');
    console.log(constructor.prototype);
    console.log(constructor.prototype == Greeter2);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function logClass2(target) {
    console.log('===' + target + '===');
    console.log(target.prototype == Person2);
}
var Person2 = (function () {
    function Person2(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person2.prototype.saySomething = function (something) {
        return this.name + " " + this.surname + " says: " + something;
    };
    Person2 = __decorate([
        logClass2
    ], Person2);
    return Person2;
}());
var man = new Person2('ReySun', 'lly');
var words = man.saySomething('hello gulp ts-decorator');
