function getMean(array) {
  
}

function getMedian(array) {
  
}

function getMode(array) {
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num] modeObj[num] = 0;
    modeObj[num]++;
  });
  
  var maxFrequency = 0; 
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [ num ];  
      maxFrequency = modeObj[num];
    }
  }
}

function meanMedianMode(array) {
  
}
