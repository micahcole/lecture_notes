/*
! OOP
    Object Oriented Programming
        - Encapsulated data and behavior through an exposed interface
        - Allow for ingeritance of behavior via parentr class that can share methods.
        - Abstractio of complexity
        - Polymophism of behavior
*/

//* Encapsulation
class Pet {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says, ${this.voice}`;
    }
//     speak() {
//         return `${this.name} says, "woof!"`;
//     }
}

let buttons = new Pet('Buttons', 'male');
let rex = new Pet('Rex', 'male');
// console.log(buttons.speak());
// console.log(rex.speak());
// console.log(`${buttons.name} goes "woof!"`); // not as flexible.

//* Inheritence

class Dog extends Pet {
    constructor(name, sex, voice) {
        super(name, sex);
        this.voice = voice;
    }

    // speak() {
    //     return `${this.name} says, ${this.voice}`;
    // }
}

let spot = new Dog('Spot', 'female', 'ruff!');
console.log(spot.speak());

class Cat extends Pet {
    constructor(name, sex, voice) {
        super(name, sex);
        this.voice = voice;
    }
}

let mayo = new Cat('Mayo', 'male', 'mew');
console.log(mayo);
console.log(mayo.speak());

//* Abstraction
// Hiding complexity via an objects method

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subtotal + this.tax;

        this.tip = total * x;
        let final = total + this.tip;
        return final.toFixed(2);
    }
}

let salesTax = .075;
let tipPercent = .20;

let dinnerBill = new Tab(42.83, salesTax);

function calcTip(bill) {
    return(bill.tipAmount(tipPercent));
};

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With the tip of $${dinnerBill.tip.toFixed(2)}!`);

//* Polymorphism
/*
    - How objects respond in relationship from child to parent.
    -Can't access properties of siblings (like methods)
*/
