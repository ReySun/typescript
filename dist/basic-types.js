"use strict";
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
var u = undefined;
var n = null;
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
var _a;
