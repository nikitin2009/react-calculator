import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.module.css';

const Button = ({name, color, clickHandler}) => {
  const buttonClass = color ? Styles.buttonOperation : Styles.button;

  return (
    <button
      className={ buttonClass }
      onClick={ () => clickHandler(name) }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
