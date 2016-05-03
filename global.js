"use strict";

var PS = PS || {};

console.log(PS);
/*
(function(PS){
    console.log(PS);
})(PS);*/
var test = function(PS){
    var TE = TE || {};
    TE.test = "테스트";

    PS.test = TE.test;
    console.log(PS);

    var ST = ST || {};
};
//console.log(test(PS));
test(PS);
var HM = HM || {};
console.log(HM);

(function(HM){
    console.log(PS);
    console.log(HM);
})(HM);

console.log(PS);