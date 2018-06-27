function twoSum(numArray, sum) {
  // Returns every pair of numbers from 'numArray' that adds up to the 'sum'
  var pairs = [];
  var hashtable = [];
  
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum; 
    if (hashtable.indexOf(counterpart) !== -1) {
       pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
}
