
function fizzBuzz(num) {
  for(var i = 0; i < num; i++) {
    if(i % 3 === 0 && i % 5 ===0) {
      console.log('fizzbuzz');  
    } else if(i % 3 === 0) {
      console.log('fizz'); 
    }
  }
}

fizzBuzz(20);
