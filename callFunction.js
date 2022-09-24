// JavaScript source code
var obj = { num: 3 };
var obj2 = { num: 2 };

var addToThis = function (a,b,c) {
    return this.num + a+b+c;

};
var arr = [1, 2, 3];
//console.log(addToThis.call(obj, 4, 5, 6));
console.log(addToThis.apply(obj2, arr));