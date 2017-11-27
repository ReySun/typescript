/* 函数 function 命名函数 + 匿名函数 */
function max(x: number, y: number): number {
    return x > y ? x : y;
}
let myMax = function (x: number, y: number): number {
    return x > y ? x : y;
};


/* 可选参数和默认参数 */
function buildName(firstName: string, lastName = "Smith", age?: number) {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error
let result4 = buildName("Bob", "Adams");         // ah, just right


/* 剩余参数 */
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");


/* 重载 overload */
// 注意，function css(config: any, value?: any) 并不是重载列表的一部分
function css(config: object): void; // css({width:'100px'})
function css(config: string, value: string): void; //css('width','100px')
function css(config: any, value?: any) {
    if (typeof config == 'string') {
        // ...
    } else if (
        typeof config == 'object') {
        // ...
    }
}
