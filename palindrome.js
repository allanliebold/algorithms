function isPalindrome(string) {
  // checks if a string is the same forward and backward, 
  // ignoring spaces, special characters, and capitalization
  string = string.toLowerCase();
  
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrome("Madam I'm Adam"); // return true

console.log(isPalindrome("racecar")); // log true
console.log(isPalindrome("this is not a palindrome")); // log false
