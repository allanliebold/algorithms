function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
}

isPalindrome("Madam I'm Adam");
