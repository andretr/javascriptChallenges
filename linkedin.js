// #1 ------------------------------------------------------------------------------------------------------------------------------
//When would results be showed in console
// A) immediately B) after results are received from HTTP request C) after 10s D) After 10000s
// let modal = document.querySelector('#results');
// setTimeout(() => {
//     modal.classList.remove('hidden');
// }, 10000);
//console.log('Results shown');
//Answer A) because setTimeout goes to EventLoop, and querySelector is not an HTTP request

// #2 ------------------------------------------------------------------------------------------------------------------------------
//Which statement creates a new Person object called student
function Person() {
    name: "Jhon"
}
var student = new Person(); //This one
// var student = construct Person();
// var student = Person();
// var student = construct Person;

// #3 ------------------------------------------------------------------------------------------------------------------------------
// How to call func to tax $50
function addTax(total) {
    return total * 1.05;
}

// addTax($50);
// addTax 50;
addTax(50);
// return addTax 50;


// #4 ------------------------------------------------------------------------------------------------------------------------------
// What will be logged in console
var a = ['dog','cat', 'hen'];
a[100] ='fox';
// console.log(a.length);
//Answer 101 -> JS fills 3-100 with undefined and a[100] with 'fox'

// #5 ------------------------------------------------------------------------------------------------------------------------------
// Which for is an incorrect way to define an arrow function that returns an empty object
() => { return {}; };
() => (({}));
// () => {} This one!
() => ({});

// #6 ------------------------------------------------------------------------------------------------------------------------------
// What is the name of a function whose execution can be suspended and resumed at a later point
// A) Arrow function
// B) Promise function 
// C) Generator function --> This one!! Generator functions allow to yield inside od it
// D) Async/Await function

// #7 ------------------------------------------------------------------------------------------------------------------------------
//Whats the reult of running this code

/* sum(10,20);
diff(10,20);
function sum(x, y) {
    return x + y;
}
let diff = function(x, y) {
    return x - y;
} */

// A) ReferenceError ---------------> This one!! -10 will never print, let can't be hoisted
// B) ReferenceError > 30 > -10
// C) 30 -10
// D) ReferenceError -10

// #8 ------------------------------------------------------------------------------------------------------------------------------
// How do you get value 42 from x
class X {
    get Y() {
        return 42;
    }
}
var x = new X();
// A) x.get('Y')
// B) x.Y --------------------> This one, 
// console.log(x.Y);
// C) x.get().Y
// D) x.Y()

// #9 ------------------------------------------------------------------------------------------------------------------------------
// When would you use a conditional statement
// A) When you want to loop through a group of statements
// B) When you want your code to choose between multiple options
// C) When you want to repeat a line of code 5 times
// D) When you want to group data together

// #10 ------------------------------------------------------------------------------------------------------------------------------
// Your code is producing this errorL TypeError: Cannot read property reduce of undefined, that does that mean
// A) You are calling a method named reduce on an object that has a null value
// B) You are calling a method named reduce on an object that does not exist
// C) You are calling a method named reduce on an empty array
// D) You are calling a method named reduce on an object that is declaered but has no value

// #11 ------------------------------------------------------------------------------------------------------------------------------
// Which choice is not a unary operator?
// A instanceof ------------> A typeof number
// B void
// C typeof
// D delete


// #12 ------------------------------------------------------------------------------------------------------------------------------
// What will this code print
 var v = 1;

 var f1 = function () {
    console.log(v);
 }

 var f2 = function () {
    var v = 2;  // locally scoped doesn't change global v
    f1();
 }

 f2();
// A) undefined)
// B) error
// C) 1   -----------> this one!! 
// D) 2


// #13 ------------------------------------------------------------------------------------------------------------------------------
// Which statement creates a new function called discountPrice
/* 
let discountPrice(price){
    return price * 0.85;
} */
/* 
discountPrice = function(price){
    return price * 0.85;
} */

/* let function = discountPrice(price){
    return price * 0.85;
}
 */

let discountPrice = function(price){
    return price * 0.85;
}

// #14 ------------------------------------------------------------------------------------------------------------------------------
// This program has a problem. what is it?
var a;
var b = (a=3) ? true : false;
// A) You cannot use ternary operator in the right-hand side of an assignment
// B) You cannot define a variable without initializing it first
// C) The condition in the ternary statement is usign the assignment operator -----> THis one!!!
// D) The code is using the deprecated var keyword

// #15 ------------------------------------------------------------------------------------------------------------------------------
// What is the value of dessert.type after executing this code?
const dessert = {type: 'pie'};
dessert.type = 'pudding';
console.log(dessert.type);
// A) pie
// B) pudding -----> this one!. COnst doesn't prevent chaning properties of an object, it only prevents changing the reference to the object  
// C) error
// D) undefined
