function sieveOfEratosthenes(num) {
  // return all prime numbers up to 'num' in an array
  var primes = [];
  for (var i = 0; i <= num; i++) {
    primes[i] = true;  
  }
  
  primes[0] = false;
  primes[1] = false;
  
  for (var i = 2; i <= Math.sqrt(num); i++) {
    for (var j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }
}

sieveOfEratosthenes(20); // should return [2, 3, 5, 7, 11, 13, 17, 19]
sieveOfEratosthenes(10);
