// #1 Timeouts------------------------------------------------------------------------------------------------------------------------------
function runTimes(){
    console.log(1);
    setTimeout(function(){ console.log(2)}, 1000);
    setTimeout(function(){ console.log(3)}, 0);
    console.log(4);
}

//runTimes();
// prints 1 4 3 2

// #2 Indentation------------------------------------------------------------------------------------------------------------------------------
function foo1(){
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}

//console.log(foo1());//prints an object { bar: 'hello' }
//console.log(foo2());//prints undefined because of the line break after return, be careful!!

// #3 CLosures------------------------------------------------------------------------------------------------------------------------------
function outer(){
    let state = 'ORIGINAL_NAME';

    function inner() {
        return `Hello ${state}`;
    }
    return inner;
}

 const my_outer = outer();
 //console.log(my_outer());


 // #Bonus 3 Closure trick question
for (let i = 0; i < 3; i++) { //Note the var type   
    const log = () =>{  //This is a closure
        console.log(i);   
    }
    
    //setTimeout(log, 100);
}
// What does this print?
//it prints 3 3 3 because i is a var, the variable gets hoisted to global scope 
// if we change var for let, the lexical scope is block and it prins 0 1 2
 

// #4 Higher order functions: .map() and .filter()------------------------------------------------------------------------------------------------------------------------------
const array4 = [1, 5, 8, 7];
const map4 = array4.map(x => x * 2);
// console.log(map4);
const filter4 = array4.filter(x => x % 2 == 0);
// console.log(filter4);


// #5 Hoisting------------------------------------------------------------------------------------------------------------------------------
//foo5(); //we call the function before we declare it, but it gets hoisted up
//const_foo5(); // this will fail "cannot access 'const_foo5'" before initialization, const/let never hoists
// var_foo5(); // this will fail "foo is not a function", only left part of var assignation hoists

function foo5(){
    console.log("hoisting up!!")
}

const const_foo5 = function (){
    console.log("won't hoist up!!")
}

var var_foo5 = function (){
    console.log("won't hoist up either, only left part is hoisted!!")
}

// #6 Callbacks vs Promises------------------------------------------------------------------------------------------------------------------------------
function callbackNumber(cb){
    setTimeout(()=> {
        cb(10);
    }, 100);
}

// callbackNumber(n => {
//     console.log(n);
// });
//Won't do anything until callback is resolved

function getNumberPromise(){
    return new Promise((resolve, reject) => {
        callbackNumber(resolve);
    });
}

const promise = getNumberPromise();
// console.log(promise);
// promise.then(n => {
//     console.log (n);
//     console.log(promise);
// });
//Immediately returns a future promise to resolve

// #7 this values ------------------------------------------------------------------------------------------------------------------------------
const person7 = {
    name: "John",
    sayName: function(){
        console.log(this.name);
    }
}

// person7.sayName(); // prints Jhon, person calling sayName
// const localSayName = person7.sayName;
// localSayName(); // prints undefined, because it's pulling this from the global context!!!
// const boundSayName = person7.sayName.bind(person7);
// boundSayName(); // prints Jhon, JS binds this to person7 object


const arrow_person7 = {
    name: "John",
    sayName: () => {
        console.log(this.name);
    }
}

arrow_person7.sayName(); // prints undefined, because it's pulling this from the global context!!!


