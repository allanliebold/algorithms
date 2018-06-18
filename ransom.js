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
      if (magazineObj[word]) {
        magazineObj[word]--;
        if (magazineObj[word] < 0) notePossible = false;
      } else {
        notePossible = false;  
      }
    }
  });
  
  return notePossible;
}

harmlessRansomNote('this is a secret note', 'note the secret that this is a clip from a magazine'
