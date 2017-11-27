// 类 class
class Dota {
    hero: string;//默认是public    还有private只能被类内部访问，prevented被类及子类访问
    constructor(public name: string, hero: string) {//此处必须加public，而hero在之前 已申明public
        this.name = name;
        this.hero = hero;
        console.log("dota...");
    }
    showHero() {
        console.log(this.hero);
    }
}
var faker = new Dota("faker", "EZ");
faker.showHero();
class LOL extends Dota {
    constructor(name: string, hero: string, public skill: string) {//子类实例化的时候，先自动执行父类的constructor代码，再执行自己的constructor代码
        super(name, hero);
        this.skill = skill;
        console.log("lol...");
    }
    show() {
        super.showHero();
        this.showSkill();
        console.log(LOL.qwer());
    }
    private showSkill() {//只能在类的内部调用，即show方法里面的示例
        console.log(this.skill, this.name, this.hero);
    }
    //静态方法，可以让lol类调用，而不能用lol的实例调用
    static qwer() {
        console.log("use qwer to show skill");
    }
}
var lck_faker = new LOL("faker", "EZ", "R");
lck_faker.showHero();
lck_faker.show();
// lck_faker.showSkill(); //不能访问，protected和private类似，但是可以被子类访问
LOL.qwer();


/* 存取器 getters/setters */
class Car3 {
    private _carColor: string
    constructor(protected engine: string) {

    }
    getCarcolor(): string {
        return this._carColor
    }
    setCarcolor(color: string) {
        this._carColor = color;
    }
}
let redCar = new Car3("petrol");
redCar.setCarcolor('red');
console.log(redCar.getCarcolor());//red
class human {
    _name: string;
    _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        //在此判断是否符合设置的年龄规范
        this._age = age;
    }
}
var man = new human("people", 100);
console.log(man.age);//直接调用get方法
man.age=18;//直接调用set方法
console.log(man.age);//对比age


/* 把类当做接口使用 */
// 类定义会创建两个东西：类的实例类型和一个构造函数。
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
