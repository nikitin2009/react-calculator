import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={ Styles.button }
      style= {{backgroundColor: props.color}}
    >
      {props.name}
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
