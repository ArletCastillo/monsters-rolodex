import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '63f014a36e8e69a3e6943927'
        },
        {
          name: 'Frank',
          id: '63f014b6f7e4fcce192d9ddf' 
        },
        {
          name: 'Jacky',
          id: '63f014c8f9283ee223e48dd4'
        },
        {
          name: 'Brad',
          id: '63f014d9e4364855f4d3c8e5'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );  
  }
}

export default App;
