/**
 * Created by sun on 16/3/13.
 */

function main() {
    console.log("Hello World!");

    prototypeTest();
}

// 原型
function prototypeTest() {
    var obj = {};
    console.log(obj.prototype);
    console.log(obj.__proto__);
    console.log(Object.getPrototypeOf(obj));
}

main();