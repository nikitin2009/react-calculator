import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  
  const x = numberOne ? new Big(numberOne) : 0;
  const y = numberTwo ? new Big(numberTwo) : 0;
  let result;

  switch (operation) {
    case '+':
      result = x.plus(y);
      break;

    case '-':
      result = x.minus(y);
      break;

    case 'x':
      result = x.times(y);
      break;

    case '÷':
      result = x.div(y);
      break;

    default:
      result = y || x;
      break;
  }

  return result.toString();
}
