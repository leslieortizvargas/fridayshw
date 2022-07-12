// compare firstNum and secondNum and return the smaller of the two
function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(1, 10));
// → 1
console.log(min(0, -30));
// → -30