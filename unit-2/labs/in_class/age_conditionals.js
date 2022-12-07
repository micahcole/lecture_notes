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

