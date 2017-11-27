"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
