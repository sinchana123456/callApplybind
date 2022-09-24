// JavaScript source code
var obj = { num: 3 };

var addToThis = function (a, b, c) {
    return this.num + a + b + c;

};
var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));
var bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3));
