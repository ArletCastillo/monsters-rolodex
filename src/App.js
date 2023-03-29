import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      //console.log(this.state);
    }
    ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase().trim();
    this.setState(() => {
      return { searchField }
    });
   }

  render() {

    // Destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={ onSearchChange } placeholder='search monsters' className='monsters-search-box' />
        <CardList monsters={ filteredMonsters } />
      </div>
    );  
  }
}

export default App;
