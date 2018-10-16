// Fibonacci Sequence - 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
function fibonacci(position) {
  if (position < 3) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2); 
  }
}

fibonacci(6); // returns 8
// return fibonacci(5) + fibonacci(4)
// fibonacci(5) - return fibonacci(4) + fibonacci(3)
//
// fibonacci(4) - return fibonacci(3) + fibonacci(2) 
// fibonacci(3) - return fibonacci(2) + fibonacci(1)
// fibonacci(2) - less than 3. return 1
fibonacci(7); // returns 13

// Memoized Fibonacci
function fibMemo(index, cache) {
  // index: index of number in fibonacci sequence
  // cache: an array used as memory
  
  cache = cache || []; // either use the cache passed in as an argument or create an empty array
  if (cache[index]) { 
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);  
    }
  }
  
  return cache[index];
}

// Memoization - Check to see if number already exists in cache. If it does, use that number. 
// If it doesn't, calculate it and put it in the cache to use in the future. 
fibMemo(15); // returns 610
