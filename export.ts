// export default const COMPANY = "GooGle";// 默认导出变量
export interface display {//导出接口
    isShow(show: string): string;
}
export default class dialog2 implements display {// 默认导出类
    isShow(show: string) {
        return show === 'show' ? 'block' : 'none'
    }
}
// export default function(s:string){ // 默认导出函数
//     return 'function'
// }

// 兼容其它模块系统 不能与上面同时使用
// export interface display {
//     isShow(show: string): string;
// }
// class dialog3 implements display {
//     isShow(show: string) {
//         return show === 'show' ? 'block' : 'none'
//     }
// }
// export = dialog3; 