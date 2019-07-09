import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {

  if (operation === '÷' && numberTwo === '0') {
    alert('Can\'t divide by zero');
    return '0';
  }
  
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
