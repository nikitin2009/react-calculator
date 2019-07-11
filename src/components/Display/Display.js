import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Display.module.css';

const Display = ({result, error}) => {
  return (
    <div className={ Styles.display } >
      { error || result }
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
}

export default Display;
