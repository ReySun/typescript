// 模块 “内部模块”称做“命名空间”，“外部模块”简称为“模块”。一般提到的模块即是”外部模块“。
export const COMPANY = "GooGle";//导出变量
export interface IdentityValidate {//导出接口
    isGfStaff(s: string): boolean;
}
export class ErpIdentityValide implements IdentityValidate {//导出类
    isGfStaff(erp: string) {
        // return erpService.contains(erp);
        return erp.length > 3 ? false : true
    }
}
// 导出语句
// 我们可能需要对导出的部分重命名，就用到了
class ErpIdentityValide2 implements IdentityValidate {//导出类
    isGfStaff(erp: string) {
        // return erpService.contains(erp);
        return erp.length > 3 ? false : true
    }
}
export { ErpIdentityValide2 };
export { ErpIdentityValide2 as gfIdentityValide }
// 重新导出
// 有时候需要修改，扩展已有的模块，并重新导出给其它模块使用，可以使用重新导出做个包装
// 导出原先的验证器但做了重命名
// export { ErpIdentityValide3 as RegExpBasedZipCodeValidator } from "./ErpIdentityValide3";
// // 或者一个模块可以包裹多个模块，并把他们导出的内容联合在一起通过语法：export * from "./module"

// // 导入 重命名
// import { ErpIdentityValide3 as ERP } from "./ErpIdentityValide3";
// let erpValidator = new ERP()
// console.log(erpValidator);
// // 导入 将整个模块导入到一个变量，并通过它来访问模块的导出部分
// import * as _$ from "./ErpIdentityValide3";
// let myValidate = new _$.ErpIdentityValide3();

// 内部模块
// 内部模块创建一个封闭的作用域，供同一个js文件内的代码使用。(也可以使用///引入其他文件的内部模块。)
namespace com.gf.Utils {
    export function foo(msg: string) {
        console.log(msg);
    }
    export var name = 'somerandomtools';
}
import Utils = com.gf.Utils;//alias
Utils.foo('hi');
Utils.name = 'Jack';










