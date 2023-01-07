/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 23;

if (17 > age) {
    console.log("Sorry, you're too young to do anything.");
} else if (25 <= age) {
    console.log("You can rent a car!");
} else if (21 <= age) {
    console.log("You can drink!");
}else if (18 <= age) {
    console.log("You can vote!");
} else {
    console.log("You're old...");
}

//! Switch

/*
    keywords:
        - switch
        - case 
        - break
            - takes us out of our code block
        - default
            - runs if no cases match

        Structure:

        switch(expression) {
            case ... :
                return;
                break;
            case ... :
                return;
                break;
            case ... :
                return;
                break;
            default:
                return;
        }
*/

let officeCharacter = "Michael";

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears, Beets, Battlestar Galactica");
        break;
    case "Pam":
        console.log("Yup");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let num = 5;
switch (true) {
    case (num < 0 && num > -10):   
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;
}

//! Ternary

/*
    Always an If/Else statement at minimum.

    Structure:

    expression ? true : false;
*/

let expression = true;
let newNum= 0;
if(expression) {
    console.log('Runs True');
} else {
    console.log('Runs False');
}

expression ? console.log('runs true') : console.log('runs false');

//* Else/If
if(newNum == 0) {
    console.log('Hello');
} else if (newNum < 0) {
    console.log('hi');
} else {
    console.log('goodbye');
}

(newNum == 0) ? console.log('Hello') : (newNum < 0) ? console.log('hi') : console.log('goodbye again');

(newNum == 0) ?
    console.log('Hello') :
    (newNum < 0) ?
    console.log('hi') :
    console.log('goodbye again');

let value;
let numOne = 1;
let numTwo = 2;

((numOne + numTwo) > 1) ? (numOne + numTwo) : 0;

console.log(value);




/* 
! Challenge
    Provided are two arrays of item expenses held within an "online cart". 

    - Create a variable that represents sales tax. This will need to hold a number. *can be sales tax in your area or a made-up value.

    - Create a variable that will hold the total of this online cart.

    - Create a function that accepts an array as a parameter.
        - generate a subtotal of all the items provided through the array.
        - Update your total variable with the subtotal and sales tax.

    - Invoke your function by passing in the individual arrays provided.

    - Using string interpolation, console log "Total: [cart total]"
        - hint: https://www.w3schools.com/jsref/jsref_tofixed.asp
*/
const firstCart = [
    4.50, 3.25, 14.99, 25.99, 42.99
];
const secondCart = [
    1.99, 13.50, 22.99, 129.00
];

let tax = 0.06;

function priceCalc(array) {
    let total = 0;
    for(i = 0; i < array.length; i++){ //creates a variable that goes fron 0 - the length of our array
        total = total + array[i]; //iterates through arrays and adds them to the total
    }
    total = total + (total * tax); // adds tax to total
    console.log(` Total: ${total.toFixed(2)}`);
}

priceCalc(firstCart);
priceCalc(secondCart);
priceCalc(firstCart);
