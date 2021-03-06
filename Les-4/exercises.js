// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2

function wordCount(sentence, word) {
    let sentenceArr = sentence.split(' ');
    let result = 0;
    
    for (let i in sentenceArr) {
     
      if( word === sentenceArr[i].toLowerCase()) {
        result++;
    
      }
    
    
    }
    return result;
    
    }
// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
// 'hello', [{index: 2, multiplier: 2}], 1
function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) {}

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true

function isPangram(sentence) {
  
  let letterArr = sentence.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArr = alphabet.split('');

for (let i in letterArr) {

  let lettersInArray = letterArr[i].toLowerCase();

for ( let j in alphabetArr) {

      let lettersInAlphabet = alphabetArr[j];

        if( (lettersInArray === lettersInAlphabet) && (letterArr.length > alphabetArr.length)) {
            return true;
                }
        else { return false;}
}

}


}

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', ['stream', 'pigeon', 'maters'] → ['stream', 'maters']
// indexOf / charAt
function findAnagrams(word, possibleAnagrams) {}