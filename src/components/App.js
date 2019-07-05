import React, {Component} from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
