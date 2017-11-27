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
var Personx = (function () {
    function Personx() {
    }
    Personx.prototype.walking = function () {
        console.log('walking on the road');
        console.log(this.speak());
    };
    return Personx;
}());
var Male = (function (_super) {
    __extends(Male, _super);
    function Male() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Male.prototype.speak = function () {
        console.log('learing typescript for ng4.');
        return 'speak';
    };
    return Male;
}(Personx));
var person;
person = new Male();
person.speak();
person.walking();
