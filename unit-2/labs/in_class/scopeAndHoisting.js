//! Scope

let globalVariable = true;
function checkGlobalVariable() {
    console.log(globalVariable);
}

checkGlobalVariable();

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function newScope() {
    y = 33;
    console.log(y);
    let z = 45;
}

newScope();
console.log(y);
//console.log(z);

//! Var vs Let
/* 
    Variable Keywords:
        - const: cannot be reassigned
        - var: scoped to the nearest function block
        - let: scoped to the nearest enclosing block
*/

var a = 12;
function varTest() {
    var a = 33;

    if(true) {
        var a = 45;
        console.log(`Var - within If: ${a}`);
    }
    console.log(`War outside of If: ${a}`);
}
varTest();
console.log(`Var - Outside Function: ${a}`);

//* Let - scoped to enclosed block
let b = 12;
function letTest() {
    let b = 33;

    if (true) {
        let b = 45;
        console.log(`Let - within IF: ${b}`);
    }
    console.log(`Let - within function: ${b}`);
}
letTest();
console.log(`Let - Outside funtion: ${b}`);

//!! Hoisting
/*
    - Js reads from top to bottom in two passes
        1st pass :
            - Made by the compiler. This is where hoisting is initiated.
            - compiled for execution
        2nd pass:
            - variables are assigned.
            - Execution phase
                - runs any hoisted code
*/

let personName = 'Everly';
console.log(personName);


c(); // doesn't break because functino c() is hoisted to the top of our code

function c() {
    console.log("I have been hoisted");
}

newFunction();

let newFunction = () => {
    console.log("hoisted?");
}

let mystatement;

let expressionFn = () => {
    let myStatement = "hello";

    //return statement
    newExpressionFn(myStatement);
}

console.log(expressionFn());

let newExpressionFn = (statement) => {
    console.log(`${statement} there!`);
}

function declarationFn(statement) {
    console.log(`${statement} there!`);
}