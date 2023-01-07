let marvelHero = {
    fullName: 'Peter Parker',
    codeName: "Spider-Man",
    age: 25,
    active: true
}

/* 
* Object Literal
    When our values are written within our keys. "Hard Coded"

*   Structure

        keyword objectName = {
            key: value,
        }

        ref: 
        let ourObj = {
            firstKey: 'string'
        }
    
    Are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpson Roasting on an Open Fire',
                aired: '1989-12-17',
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01',
            },
            [
                '1989-12-17', "1990-01-14"
            ]
        ],
        'season two': [/* .... */],
        "season three": [/* .... */]
    },
    currently_running: true,
}

//* Dot Notation & Square Brackets
// console.log(theSimpsons.genre);
// console.log(theSimpsons['est']); // wrap in quotes

// console.log(theSimpsons.seasons["season one"]); // must use square brackets for multi-word keys.

theSimpsons.characters = ['Homer', 'Marge','Bart','Lisa','Maggie'];
// console.log(theSimpsons);

// How add another character to the characters.
theSimpsons.characters.push('Ned');
// console.log(theSimpsons);

// change the aired date of episode 2 in season 1 to Jan 14th 1990
theSimpsons.seasons["season one"][1].aired = '1990-01-14';
// console.log(theSimpsons.seasons["season one"][1]);
// console.log(theSimpsons.seasons["season one"][2][1]);

//! Object Methods
//* Object.keys();

console.log('Keys: ', Object.keys(theSimpsons));

//* Object.values();
console.log('Values: ', Object.values(theSimpsons));

//* Object.create();
const futurama = Object.create(theSimpsons);
// console.log(futurama);
futurama.id = 2;
futurama.est = 1999;
//console.log(futurama);

// const sample = {};

//* delete object.key
futurama.currently_running = false;

//console.log('BEFORE: ', Object.keys(futurama));
delete futurama.currently_running;
//console.log('AFTER: ', Object.keys(futurama));

//! Destructuring

const {characters, seasons} = theSimpsons;
console.log('Destructuring Characters', characters);
console.log('Seasons', seasons);
characters.push('Meo'); //Typo
//console.log(characters);
characters[6] = 'Moe';
console.log(characters);


//! Spread with Objects
const simpsonCharacters = {
        simpsonHouse :['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
        moesTavern: ['Moe', 'Barney']
};

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const location = {
    ...simpsonCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}; 

//* both the Original and Copied Array

const persons = [
    {
        name: 'Jane',
        age: 28
    },
    {
        name: 'John',
        age: 35
    }
]

/*
const copiedPerson = persons.map(person => ({
    name: person.name,
    age: person.age
}));
*/

const copiedPersons = [...persons];

persons.push({ name: 'Anna', age: 29 });
copiedPersons[0].name = "Sue";

console.log('Persons: ', persons);
console.log('Copied Persons: ', copiedPersons);

//* Variables within Memory

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

a = 5;
b = 'def';
console.log(x, y ,a, b);

let arr = [];
arr.push(1);

let reference = [1];
let refCopy = reference;

//* Rest Syntax
/*
    - Looks exactlye like spread syntax
    - Spread -> "expands" an array
    - Rest -> "condenses" and array
*/

const fullNameAgain = [ 'Jane', 'Doe', "Mrs.", {
    month: 03, date: 22, year: 1973
}];

let janesName = fullNameAgain[0]

//const [newFirst, newLast, ...otherInfo] = fullNameAgain;
//console.log(newFirst);
// console.log(newLast);
// console.log(otherInfo);

newFirst = "Alex";
console.log(newFirst);