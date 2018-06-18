
// Constant runtime - Big O Notation "O(1) O of 1"
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

// Linear runtime - Big O Notation "O(n) O of n"
function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]); 
  }
}

// Exponential runtime - Big O Notation "O(n^2)"
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]); 
    }
  }
}

// Logarithmic runtime - Big O Notation "O(log n)"
// The time complexity does not scale with input size 
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid, element;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
