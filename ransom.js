function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(function(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  noteArr.forEach(word => {
    var notePossible = true;
    noteArr.forEach(word => {
      
    }
  });
}

harmlessRansomNote('', 'this is all the magazine text in the magazine');
