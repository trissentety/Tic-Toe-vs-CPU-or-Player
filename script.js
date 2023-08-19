

var letterArray = [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]
var letterArray2 = [1,2,1,2,1,2,1,2,1]
var letterArray3 = [0,1,2,0,1,2,0,1,1]


 /*var strings = name.innerText*/
 var pooper = letterArray.toString().split(",").join("");
 var string1 = pooper.slice(0, 9);

 console.log(string1)
 var string2 = pooper.slice(9,18)
 console.log(string2)
 var string3 = pooper.slice(18,27)
 console.log(string3)
 var string4 = pooper.slice(27,36)
 console.log(string4)
 var string5 = pooper.slice(36,45)
 console.log(string5)
 var string6 = pooper.slice(45,54)
 console.log(string6)
 var string7 = pooper.slice(54,63)
 console.log(string7)
 var string8 = pooper.slice(63,72)
 console.log(string8)
 var string9 = pooper.slice(72,81)
 console.log(string9)
 var string10 = pooper.slice(81,90)
 console.log(string10)
console.log(pooper);

// 4


function insertLetter(letter) {
if (letter[0] == 1) {
    document.getElementById("div1").innerHTML = "X";
}
if (letter[0] == 2) {
    document.getElementById("div1").innerHTML = "O";
}
if (letter[1] == 1) {
    document.getElementById("div2").innerHTML = "X";
}
if (letter[1] == 2) {
    document.getElementById("div2").innerHTML = "O";
}
if (letter[2] == 1) {
    document.getElementById("div3").innerHTML = "X";
}
if (letter[2] == 2) {
    document.getElementById("div3").innerHTML = "O";
}
if (letter[3]== 1) {
    document.getElementById("div4").innerHTML = "X";
}
if (letter[3]== 2) {
    document.getElementById("div4").innerHTML = "O";
}
if (letter[4] == 1) {
    document.getElementById("div5").innerHTML = "X";
}
if (letter[4] == 2) {
    document.getElementById("div5").innerHTML = "O";
}
if (letter[5] == 1) {
    document.getElementById("div6").innerHTML = "X";
}
if (letter[5] == 2) {
    document.getElementById("div6").innerHTML = "O";
}
if (letter[6] == 1) {
    document.getElementById("div7").innerHTML = "X";
}
if (letter[6] == 2) {
    document.getElementById("div7").innerHTML = "O";
}
if (letter[7] == 1) {
    document.getElementById("div8").innerHTML = "X";
}
if (letter[7] == 2) {
    document.getElementById("div8").innerHTML = "O";
}
if (letter[8] == 1) {
    document.getElementById("div9").innerHTML = "X";
}
if (letter[8] == 2) {
    document.getElementById("div9").innerHTML = "O";
}
}
var myTimeout = setTimeout( function() {
    insertLetter(string1);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string2);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string3);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string4);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string5);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string6);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string7);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string8);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string9);
}, 1000)
var myTimeout = setTimeout( function() {
    insertLetter(string10);
}, 1000)