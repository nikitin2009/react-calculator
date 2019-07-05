import React, {Component} from 'react';

import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className='calculator'>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
