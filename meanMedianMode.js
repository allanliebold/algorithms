function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b) { return a - b });
  var median;
  if (array.length % 2 !== 0) {
    median = array[array.length / 2)];
  }
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
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
    
 if (modes.length === Object.keys(modeObj).length) modes = [];
    
 return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}
