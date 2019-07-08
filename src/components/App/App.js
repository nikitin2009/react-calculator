import React, {Component} from 'react';

// Components
import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

// Helpers
import calculate from '../../logic/calculate';

// Styles
import Styles from './App.module.css';

class App extends Component {

  state = {
    total:     null,
    next:      null,
    operation: null,
  }

  handleClick = (buttonName) => {
    const data = {...this.state};

    this.setState(calculate(data, buttonName));
  }

  render() {
    const {total, next} = this.state;
    const result = next || total || '0';

    return (
      <div className={ Styles.calculator }>
        <Display result={ result } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
