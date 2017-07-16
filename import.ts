import dialog2 from './export';
let div2 = new dialog2().isShow('show');
console.log(div2);

// 兼容其它模块系统 不能与上面同时使用
//  import dialog = require('./export');
// let div = new dialog().isShow('none');
// console.log(div);  