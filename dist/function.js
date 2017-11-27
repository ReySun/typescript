"use strict";
function max(x, y) {
    return x > y ? x : y;
}
var myMax = function (x, y) {
    return x > y ? x : y;
};
function buildName(firstName, lastName, age) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", undefined);
var result4 = buildName("Bob", "Adams");
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
function css(config, value) {
    if (typeof config == 'string') {
    }
    else if (typeof config == 'object') {
    }
}
