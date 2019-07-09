import operate from './operate';

export default function calculate(data, buttonName) {
  
  const {total, next, operation} = data;

  switch (buttonName) {
    case 'AC':
      data.total = null;
      data.next = null;
      data.operation = null;
      break;
      
    case '+/-':
      if (next) {
        data.next = operate('-1', next, 'x');
      }
      break;

    case '%':
      if (next) {
        data.next = operate(next, '100', '÷');
      }
      break;

    case '=':
      data.total = operate(total, next, operation);
      data.next = null;
      data.operation = null;
      break;
        
    case '+':
    case '-':
    case 'x':
    case '÷':
      data.total = operate(total, next, operation);
      data.next = null;
      data.operation = buttonName;
      break;
      
    case '.':
      if (next) {
        data.next += next.includes('.') ? '' : '.';
      } else {
        data.next = '0.';
      }
      break;

    default:
      if (next && next !== '0') {
        data.next += buttonName;
      } else {
        data.next = buttonName;
      }
      break;
  }

  return data;
}
