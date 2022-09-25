// JavaScript source code

//let getA = a => a;

//console.log(getA(1));

//let square = a => a*a;

//let square = (a) => { return a * a };


//console.log(square(6));

//var a = 4;

//let square = () => { return a * a };


//console.log(square());


//var a = 4;

//let square = _ => { return a * a };


//console.log(square());


//var a = 4;
//var b = 3;

//let multiply = () => { return a * b };


//console.log(multiply());


var x = function () {
    this.val = 1;
    setTimeout(function () {
        this.val++;
        console.log(this.val);
    }, 1)

}
var xx = new x();
