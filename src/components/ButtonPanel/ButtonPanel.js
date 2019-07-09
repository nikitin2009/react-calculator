import React from 'react';
import Button from '../Button';

import Styles from './ButtonPanel.module.css';

function ButtonPanel({clickHandler}) {

  const rows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const rowsJSX = rows.map( row => (
    <div
      key={ row }
      className={ Styles.panelRow }
    >
      { row.map( name => (
        <div
          key={ name }
          className={ name === '0' ? Styles.panelButton2x : Styles.panelButton }
        >
          <Button
            name={ name }
            color={ ['÷', 'x', '-', '+', '='].includes(name) }
            clickHandler={ clickHandler }
          />
        </div>
      )) }
    </div>
  ));

  return (
    <div className='panel'>
      { rowsJSX }
    </div>
  );
}

export default ButtonPanel;
