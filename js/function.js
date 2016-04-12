/**
 * Created by sun on 16/4/7.
 */

"use strict";

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

var mul = (a, b) => {
    return a * b;
};
console.log(mul(1, 2));

var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];
console.log(a.map(s => s.length));
