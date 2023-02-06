// variables store data for later use

//create a variable with let
let myvariable = "value";
let mynewvariable = 7;
let mybool = true;

//Accessing variable values
console.log(myvariable);
console.log(mynewvariable+5);
console.log(mybool && true);

//update value stored in a variable
mynewvariable= 10;
console.log(mynewvariable);

//increase by 1
mynewvariable=mynewvariable+1;
console.log(mynewvariable);

//decrease by 1
mynewvariable=mynewvariable=-1;
console.log(mynewvariable);

//multiply by 3
mynewvariable=mynewvariable*3;
console.log(mynewvariable);

//divide by 3
mynewvariable=mynewvariable / 3;
console.log(mynewvariable)

//divide and return the remainder
mynewvariable=mynewvariable % 2; // 10/2= 5 with 0 remainder
console.log(mynewvariable);

//shortcuts!
let x =100;
x=x+1 //add 1
x++ //add 1

let y=50
y=y-1 //minus 1
y--; //minus 1

let z =12;
z = z +5 //add 5
z+=5;

let answer = 45;
answer = answer -2; //subtract 2
answer -=2 //sutract 2

//other shortcuts
answer *=7; //multiply by 7
answer /=2; //divide by 2

//keywords
const pi = 3.14;
const username = "myuser123";
//constants cannot change values
var old =123
//var is the old way to create variables instead of let.
//dont use it!

