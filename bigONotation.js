
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
