"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var isTrue = true;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var array = [1, 2];
var arrayList = [1, 2];
var x;
x = [2, 'string'];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 5] = "green";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
;
var red = Color.red;
var green = Color.green;
var blue = Color.blue;
console.log(red, green, blue);
var notSure;
notSure = 2;
notSure = 'notSure';
function hello() {
    console.log('hello');
}
var unusable = undefined;
function error(message) {
    throw new Error(message);
}
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _b = [1, 2, 3, 4], num = _b[0], rest = _b.slice(1);
console.log(first);
console.log(rest);
var o = { a: "foo", b: 12, c: "bar" };
var a = o.a, b = o.b;
console.log(o, a, b);
var dota = (function () {
    function dota(name, hero) {
        this.name = name;
        this.name = name;
        this.hero = hero;
        console.log("dota...");
    }
    dota.prototype.showHero = function () {
        console.log(this.hero);
    };
    return dota;
}());
var faker = new dota("faker", "EZ");
faker.showHero();
var lol = (function (_super) {
    __extends(lol, _super);
    function lol(name, hero, skill) {
        var _this = _super.call(this, name, hero) || this;
        _this.skill = skill;
        _this.skill = skill;
        console.log("lol...");
        return _this;
    }
    lol.prototype.show = function () {
        _super.prototype.showHero.call(this);
        this.showSkill();
    };
    lol.prototype.showSkill = function () {
        console.log(this.skill);
    };
    lol.qwer = function () {
        console.log("use qwer to show skill");
    };
    return lol;
}(dota));
var lck_faker = new lol("faker", "EZ", "R");
lck_faker.showHero();
lck_faker.show();
lol.qwer();
var Car2 = (function () {
    function Car2(engine) {
        this.engine = engine;
        console.log(Car2.num);
    }
    return Car2;
}());
Car2.num = 1;
var Car3 = (function () {
    function Car3(engine) {
        this.engine = engine;
    }
    Car3.prototype.getCarcolor = function () {
        return this._carColor;
    };
    Car3.prototype.setCarcolor = function (color) {
        this._carColor = color;
    };
    return Car3;
}());
var redCar = new Car3("petrol");
redCar.setCarcolor('red');
console.log(redCar.getCarcolor());
var human = (function () {
    function human(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return human;
}());
var man = new human("people", 100);
console.log(man.age);
var Person = (function () {
    function Person() {
    }
    Person.prototype.walking = function () {
        console.log('walking on the road');
    };
    return Person;
}());
var Male = (function (_super) {
    __extends(Male, _super);
    function Male() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Male.prototype.speak = function () {
        console.log('learing typescript for ng4.');
    };
    return Male;
}(Person));
var person;
person = new Male();
person.speak();
person.walking();
function max(x, y) {
    return x > y ? x : y;
}
var myMax = function (x, y) {
    return x > y ? x : y;
};
function css(config, value) {
    if (typeof config == 'string') {
    }
    else if (typeof config == 'object') {
    }
}
exports.COMPANY = "GooGle";
var ErpIdentityValide = (function () {
    function ErpIdentityValide() {
    }
    ErpIdentityValide.prototype.isGfStaff = function (erp) {
        return erp.length > 3 ? false : true;
    };
    return ErpIdentityValide;
}());
exports.ErpIdentityValide = ErpIdentityValide;
var ErpIdentityValide2 = (function () {
    function ErpIdentityValide2() {
    }
    ErpIdentityValide2.prototype.isGfStaff = function (erp) {
        return erp.length > 3 ? false : true;
    };
    return ErpIdentityValide2;
}());
exports.ErpIdentityValide2 = ErpIdentityValide2;
exports.gfIdentityValide = ErpIdentityValide2;
var com;
(function (com) {
    var gf;
    (function (gf) {
        var Utils;
        (function (Utils) {
            function foo(msg) {
                console.log(msg);
            }
            Utils.foo = foo;
            Utils.name = 'somerandomtools';
        })(Utils = gf.Utils || (gf.Utils = {}));
    })(gf = com.gf || (com.gf = {}));
})(com || (com = {}));
var Utils = com.gf.Utils;
Utils.foo('hi');
Utils.name = 'Jack';
function printLabel(name) {
    console.log(name.firstName + "" + name.secondName);
}
var myObj = {
    age: 10,
    firstName: 'Jim',
    secondName: 'Raynor'
};
printLabel(myObj);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) {
        return "123";
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
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
    return C;
}());
__decorate([
    f2(),
    g()
], C.prototype, "method", null);
var Greeter2 = (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter2;
}());
Greeter2 = __decorate([
    sealed
], Greeter2);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Point = (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
var MinHeap = (function () {
    function MinHeap() {
        this.list = [];
    }
    MinHeap.prototype.add = function (element) {
        this.list.push(element);
    };
    MinHeap.prototype.min = function () {
        return this.list.length ? this.list[0] : null;
    };
    return MinHeap;
}());
var heap1 = new MinHeap();
heap1.add(3);
heap1.add(5);
console.log(heap1.min());
var heap2 = new MinHeap();
heap2.add('a');
heap2.add('c');
console.log(heap2.min());
function zip(l1, l2) {
    var len = Math.min(l1.length, l2.length);
    var ret = [];
    for (var i = 0; i < len; i++) {
        ret.push([l1[i], l2[i]]);
    }
    return ret;
}
console.log(zip([1, 2, 3], ['Jim', 'Sam', 'Tom']));
var _a;
