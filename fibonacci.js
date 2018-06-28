// Fibonacci Sequence - 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

function fibonacci(position) {
  if (position < 3) return 1; 
  else return fibonacci(position - 1) + fibonacci(position - 2); 
}

