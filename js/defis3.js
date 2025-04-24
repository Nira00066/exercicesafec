// Upercase

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUppercase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));

function countOccurrences(str, char) {
  const count = str.split(char).length - 1;
  return count;
}
const myString = "hello world"; 
const characterToCount = 'o'; 
const result = countCharacter(myString, characterToCount); 
console.log(result);



const count = (character, string) => { 
    const regExp = new RegExp(character, 'gi') 
    return ((string || '').match(regExp) || []).length 
  } 