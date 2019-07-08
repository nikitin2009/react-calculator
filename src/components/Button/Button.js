import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.module.css';

const Button = (props) => {
  const {name, color, clickHandler} = props;

  return (
    <button
      className={ Styles.button }
      style= {{backgroundColor: color}}
      onClick={ () => clickHandler(name) }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#F48E3C',
};

export default Button;
