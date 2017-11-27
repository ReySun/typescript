/* 泛型(Generic) */
// 泛型是为了提升代码的复用性而开发的，与Java，C#中的泛型类似。
// 比如我们有个最小堆算法，需要同时支持number和string。这样可以把集合类型改为any。
// 这样就完全放弃了类型检查。这样实现有很大的瑕疵，而使用泛型解决更为优雅。
// 我们可以声明一个最小堆适用于number类型newMinHeap()，然后声明一个最小堆适用于string类型newMinHeap()
function identity1(arg: any): any {
    return arg;
}
function identity2<T>(arg: T): T {
    return arg;
}


/* 使用方法 */
// 1. 传入所有的参数，包含类型参数
let output1 = identity2<string>("myString");  // type of output will be 'string'
// 2. 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output2 = identity2("myString");  // type of output will be 'string'


/* 使用泛型变量 */
function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


/* 泛型类型  */
// 使用不同的泛型参数名 数量上和使用方式上能对应上就可以
function identity3<T>(arg: T): T {
    return arg;
}
let myIdentity2: <U>(arg: U) => U = identity3;
// 使用带有调用签名的对象字面量来定义泛型函数
let myIdentity3: {<T>(arg: T): T} = identity3;


// 泛型接口：
interface GenericIdentityFn1 {
    <T>(arg: T): T;
}
function identity4<T>(arg: T): T {
    return arg;
}
let myIdentity4: GenericIdentityFn1 = identity4;
// 我们可能想把泛型参数当作整个接口的一个参数
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
function identity5<T>(arg: T): T {
    return arg;
}
let myIdentity5: GenericIdentityFn2<number> = identity5;


// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };







class MinHeap<T>{
  list: T[] = [];
  add(element: T): void {
      // ...
      this.list.push(element)
  }
  min() {//min(): T 报错？
      return this.list.length ? this.list[0] : null;
  }
}
var heap1 = new MinHeap<number>();
heap1.add(3);
heap1.add(5);
console.log(heap1.min());//3
var heap2 = new MinHeap<string>();
heap2.add('a');
heap2.add('c');
console.log(heap2.min())

// 泛型也支持函数。下面zip函数声明了两个泛型类型T1T2，并把两个数组压缩到一起
function zip<T1, T2>(l1: T1[], l2: T2[]) {
  //zip<T1, T2>(l1: T1[], l2: T2[]): [T1,T2][]  报错？
  var len = Math.min(l1.length, l2.length);
  var ret = [];
  for (let i = 0; i < len; i++) {
      ret.push([l1[i], l2[i]]);
  }
  return ret;
}
console.log(zip<number, string>([1, 2, 3], ['Jim', 'Sam', 'Tom']))