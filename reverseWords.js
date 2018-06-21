function reverseWords(string) {
  // return string with each word reversed
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]; 
    }
  }
}

reverseWords('this is a string'); // should return 'siht si a gnirts'
