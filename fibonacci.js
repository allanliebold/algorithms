// Fibonacci Sequence - 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

function fibonacci(position) {
  if (position < 3) return 1; 
  else return fibonacci(position - 1) + fibonacci(position - 2); 
}

fibonacci(6); // returns 8

// Memoized Fibonacci

function fibMemo(index, cache) {
  // index: index of number in fibonacci sequence
  // cache: an array used as memory
}

// Memoization - Check to see if number already exists in cache. If it does, use that number. 
// If it doesn't, calculate it and put it in the cache to use in the future. 
