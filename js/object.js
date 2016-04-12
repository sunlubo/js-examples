/**
 * Created by sun on 16/4/9.
 */

'use strict';

// 对象字面量
var empty = {};
var point = {x: 0.0, y: 0.0};
var user = {
    username: "sunlubo",
    password: "123",
    age: 23,
    sex: "male",
    birthDate: {
        "year": 1993,
        "month": 1,
        "day": 23
    }
};
// 构造函数
function User() {
    this.username = "sun";
    this.password = "123";
}
console.log([empty, point, user, new User()]);
console.log(point["x"], point["y"]);
console.log(user.username, user.password, user.age, user.sex,
    user.birthDate.year, user.birthDate.month, user.birthDate.day);

// 原型
console.log(user.prototype);
// 获取原型
console.log(user.__proto__); // 少用
console.log(user.constructor.prototype);
console.log(Object.getPrototypeOf(user));

// 继承
function inherit(p) {
    if (p == null) throw TypeError;
    if (Object.create) {
        return Object.create(p);
    }

    var type = typeof p;
    if (type != "object" && type != "function") throw  TypeError;
    function Constructor() {
        this.prototype = p;
    }

    return new Constructor();
}
var obj = inherit(user);
obj.username = "hello";
console.log(obj.username);

// 在JS中，只有在查询属性时才会体会到继承的存在，而设置属性则和继承无关。
var unitCircle = {r: 1};
var c = inherit(unitCircle);
c.x = 1;
c.y = 1;
console.log(unitCircle.r);
c.r = 2;
console.log(unitCircle.r);

// 查询一个不存在的属性不会报错，只会返回undefined
console.log(unitCircle.x);

// 枚举属性
for (var p in user) {
    if (user.hasOwnProperty(p)) console.log(p);
}

// 存储器属性
var serialNum = {
    $n: 0,
    get next() {
        return this.$n++;
    },
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "序列号的值不能比当前值小";
    }
};
console.log(serialNum.next);
serialNum.next = 2;
console.log(serialNum.$n);

// 属性描述符
console.log(Object.getOwnPropertyDescriptor({a: 1}, "a"));
Object.defineProperty(obj, "x", {value: 1, writable: true, enumerable: false, configurable: true});
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyDescriptor(obj, "x"));

// 对象的三个属性：原型、类、可扩展性
console.log(Object.prototype.isPrototypeOf({}));
function classOf(obj) {
    if (obj == null) return "Null";
    if (obj == undefined) return "Undefined";
    return Object.prototype.toString.call(obj).slice(8, -1);
}
console.log(classOf({}));

// 序列化对象
console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(new User())));
console.log(new Date().toJSON());
