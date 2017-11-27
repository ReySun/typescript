"use strict";
function identity1(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
var output1 = identity2("myString");
var output2 = identity2("myString");
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
function identity3(arg) {
    return arg;
}
var myIdentity2 = identity3;
var myIdentity3 = identity3;
function identity4(arg) {
    return arg;
}
var myIdentity4 = identity4;
function identity5(arg) {
    return arg;
}
var myIdentity5 = identity5;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
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
