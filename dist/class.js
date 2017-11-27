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
var Dota = (function () {
    function Dota(name, hero) {
        this.name = name;
        this.name = name;
        this.hero = hero;
        console.log("dota...");
    }
    Dota.prototype.showHero = function () {
        console.log(this.hero);
    };
    return Dota;
}());
var faker = new Dota("faker", "EZ");
faker.showHero();
var LOL = (function (_super) {
    __extends(LOL, _super);
    function LOL(name, hero, skill) {
        var _this = _super.call(this, name, hero) || this;
        _this.skill = skill;
        _this.skill = skill;
        console.log("lol...");
        return _this;
    }
    LOL.prototype.show = function () {
        _super.prototype.showHero.call(this);
        this.showSkill();
        console.log(LOL.qwer());
    };
    LOL.prototype.showSkill = function () {
        console.log(this.skill, this.name, this.hero);
    };
    LOL.qwer = function () {
        console.log("use qwer to show skill");
    };
    return LOL;
}(Dota));
var lck_faker = new LOL("faker", "EZ", "R");
lck_faker.showHero();
lck_faker.show();
LOL.qwer();
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
man.age = 18;
console.log(man.age);
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
