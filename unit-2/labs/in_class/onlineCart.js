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