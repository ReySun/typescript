/* 模块结构设计在模块化开发中，共同遵循一些设计原则有利于代码的消费，维护，下面列出几点模块化设计的原则： */
// 1. 尽可能地在顶层导出：顶层导出可以降低调用方使用的难度，过多的"."操作使得消费者要记住过多的细节，尽量使用默认导出，顶层导出。
// 2. 明确地列出导入的名字：在import的时候尽可能明确指定import的变量，这样只要接口不变，调用方式就可以不变，降低了导入跟导出模块的耦合度，做到面向接口编程。
// 3. 使用命名空间导入模式导出
export class Dog {
    // ...
}
export class Cat {
    // ...
}
export class Tree {
    // ...
}
export class Flower {
    // ...
}