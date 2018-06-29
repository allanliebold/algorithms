function sieveOfEratosthenes(num) {
  // return all prime numbers up to 'num' in an array
  var primes = [];
  for (var i = 0; i <= num; i++) {
    primes[i] = true;  
  }
}

sieveOfEratosthenes(20); // should return [2, 3, 5, 7, 11, 13, 17, 19]
