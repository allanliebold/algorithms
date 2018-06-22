function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
  }
  // return reversed array
}
