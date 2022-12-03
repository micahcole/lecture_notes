/*
    ! Conditionals
        - Evaluates an expression and responds if it is true
        - Falsy
            - false
            - 0
            - " ", ' ', (empty strings)
            - null
            - undefined
            - NaN (not a number)
*/

let isOn = true;

if(isOn == true) {
    console.log('The light is on!');
}
/*
    Structure:

        if(condition evaluated) {
            ... code that runs if expression is true.
        }

*/

if(isOn) {
    console.log('The light is on, yay!');
}

// String Interpolation

let newString = `2 + 2 is ${2+ 2}`;
let firstName = "Sam";
let lastName = "Jones";
//let fullName = firstName + : + lastName;
console.log(`${firstName} ${lastName}`);


isOn = false;

if(isOn == false) {
    console.log('The light is off');
}

let weather = 65;

if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}

//And, Or, Not

let rain = true;
weather = 68;

if(weather < 70 && rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

if(weather > 70 || rain) {
    console.log('Wear a jacket');
}

if(!rain) {
    console.log('Seems to be a clear day');
}

let grade = 88;
grade = 74;

if(grade > 75) {
    console.log('passing');
} else if(grade >= 69) {
    console.log('Please see the teacher');
} else {
    console.log('Failing');
}