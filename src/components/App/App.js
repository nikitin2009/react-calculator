import React, {Component} from 'react';

import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

import Styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={ Styles.calculator }>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
