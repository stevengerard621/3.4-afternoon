import React, {Component} from 'react';
import './App.css';
import data from './components/data'
import Card from './components/Card'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      people: data,
      i: 0
    }
  }

  handleClick = (e) => {
    if (e.target.name === 'next') {
      this.setState({
        i: this.state.i + 1
      })
    } else {
      this.setState({
        i: this.state.i - 1
      })
    }
  }

  render() {
    return (
      <body className="App">
        <header className='app-header'>
          <p className="container">HOME</p>
        </header>
        <div className='card'>
          <Card person={this.state.people[this.state.i]}/>
        </div>
        <div className='footer container'>
          <button><i className="fas fa-chevron-left"></i>Previous</button>
          <button>Next<i className="fas fa-chevron-right"></i></button>
        </div>
      </body>
    );
  }
}

export default App;
