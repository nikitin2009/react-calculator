import React from 'react';
import Button from '../Button';

import Styles from './ButtonPanel.module.css';

function ButtonPanel() {
  return (
    <div className='panel'>

      <div className={ Styles.panel_row }>
        <div className={ Styles.panel_button }>
          <Button name="AC" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="+/-" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="%" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="÷" />
        </div>
      </div>

      <div className={ Styles.panel_row }>
        <div className={ Styles.panel_button }>
          <Button name="7" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="8" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="9" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="x" />
        </div>
      </div>

      <div className={ Styles.panel_row }>
        <div className={ Styles.panel_button }>
          <Button name="4" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="5" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="6" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="-" />
        </div>
      </div>

      <div className={ Styles.panel_row }>
        <div className={ Styles.panel_button }>
          <Button name="1" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="2" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="3" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="+" />
        </div>
      </div>

      <div className={ Styles.panel_row }>
        <div className={ Styles.panel_button_2x }>
          <Button name="0" color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="." color='#E0DBD9' />
        </div>
        <div className={ Styles.panel_button }>
          <Button name="=" />
        </div>
      </div>
      
    </div>
  );
}

export default ButtonPanel;
