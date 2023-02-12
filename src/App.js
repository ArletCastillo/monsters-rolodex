import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstName: 'Alexa', lastName: 'Castillo'},
      company: 'Grupo Ramos'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi I am {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {firstName: 'Arlet', lastName: 'Castillo'}
              }
            }, () => {
              // optional, runs only after the state is fully updated
              console.log(this.state)
            });
          }}>Change Name</button>
        </header>
      </div>
    );  
  }
}

export default App;
