import operate from './operate';

export default function calculate(data, buttonName) {
  
  const {total, next, operation} = data;
  const newData = Object.assign({}, data);

  switch (buttonName) {
    case '+/-':
      newData.total = total * (-1);
      newData.next = next * (-1);
      break;

    case '+':
      newData.total = operate.operate(total, next, '+');
      newData.next = 0;
      break;

    case '-':
      newData.total = operate.operate(total, next, '-');
      newData.next = 0;
      break;

    case 'x':
      break;

    case '÷':
      break;

    case '%':
      break;
  
    default:
      break;
  }

  return newData;
}
