function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ' ) {
      newString += currentLetter;
      continue;
    }
    
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    
    newString += alphabet[newIndex];
  }
}

caesarCipher('zoo keeper', 2); // should return 'bqq mggrqt'
