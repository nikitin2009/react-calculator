import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Display.module.css';

const Display = (props) => {
  return (
    <div className={ Styles.display } >{props.result}</div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
}

export default Display;
