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
    error:     null,
  }

  handleClick = buttonName => this.setState(prevState => calculate(prevState, buttonName));

  render() {
    const {total, next, error} = this.state;
    const result = next || total || '0';

    return (
      <div className={ Styles.calculator }>
        <Display result={ result } error={ error } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
