console.log("Hello there!")

let myFirstVariable = 10;
myFirstVariable;

var myFirstGloballyScopedVar = 11;

//for(var i = 0; i < 10; i = i + 1){ //test var

/*for(let i = 0; i < 10; i = i + 1){ // test let
    setTimeout(function () {
        console.log(i);
    }, 2000); 

} */

const masterKey = "http://www.somewebsite.com/data";

// masterKey = "http://www.maliciouswebsite.com/data";

const january = 1;
const february = 2;

if(january === 3) {
    console.log("January is the 3rd month.");
} else if(february === 2) {
    console.log("January is the 2rd month.");
}
 else {
     console.log("January is NOT the 3rd or 2nd month");
 }

 if (february === 2){}

// === means we are comparing data AND datatype.
// 1 == "1" this is TRUE
// 1 === "1" this is FALSE

while (false) {}
//while (january === 1) {}


do {

} while (false);


for (let i = 0; true; i++) {

} 

function myFunction(parameter1, parameter2) {
    console.log(arguments[2]);
    console.log(parameter1);

    return "hello";
}

myFunction(argument1, argument2, argument3);
myFunction("1", true, 400);

setTimeout(function (weNeedData) {
    console.log(weNeedData);
   }, 1000);


// Arrow Function
setTimeout((weNeedData,param2) => {
    console.log(weNeeData);
    console.log();    
}, 1000);

setTimeout(weNeedData => console.log(weNeedData), 1000);


// Type coercion
// Is where JavaScript converts one datatype to another AUTOMATICALLY.
// 100 == "100" // The string will try to be converted to a number.

console.log(100 == "100");
console.log(100 === "100");

let userInput;

// Type Coercion into Booleans
//Falseys
0;
"";
undefined;
NaN; // Does not convert to a boolean, need to use isNaN() function.
null;

if (userInput) {
    console.log("This value is true.");
} else {
    console.log("This is value is false.");
}




// Manual type conversion

parseInt("100.100"); // takes the string argument, and converts it to a number; Becomes 100
parseFloat("100.100") // Becomes 100.1

january.toString(); // Takes number from variable or property and converts to a string.

// myArray.toString();

// Logical Operators and Comparison Operators

/*

==
===

*
/ 
+
-

=
++
--
+-
-=
*=
/=

><
>=
<=

&&
||

!
!=
!==

*/

if("100" !== 100) {
    console.log("is true");
} else {
    console.log("is false");
}


// Objects and Arrays

let myArray =[1, 2, 3, 4];

myArray[3];
myArray[0] = 100;
myArray[17] = 9;
console.log(myArray.length);

// add to end and begining.
myArrat.push();
myArray.unshift();
//remove to end and begining.
myArray.pop();
myArray.shift();


let myObject = {
    firstNum: "1",
    "second Num": 2,
    thirdNum: 3,
    fourthNum: 4
};

myObject.firstNum;
myObject["second Num"];
myObject.thirdNum = "three";

let myAssignedFunc =function () {};

let myObjectwithFunc = {
    funcName: () =
}