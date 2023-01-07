function capitalize(someWord) {
    // your code here
    let firstLetter = someWord[0];
    let restOfWord = someWord.slice(1, someWord.length);
    let fullWord = `${firstLetter.toUpperCase()}${restOfWord.toLowerCase()}`;
    return fullWord;

  }
  
  
  console.log(capitalize('tomato'));     // should print 'Tomato'
  console.log(capitalize('BACON'));      // should print 'Bacon'
  console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
  console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
  