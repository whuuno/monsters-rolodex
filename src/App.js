import { useState, useEffect} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = ()=>{
  console.log("render");
  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchStringVal= event.target.value.toLocaleLowerCase();
    setSearchString(searchStringVal);
  }

  useEffect(()=> {
    console.log("Effect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(
      (monster)=> {
        return monster.name.toLocaleLowerCase().includes(searchString);
      }
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  return(
    <div className='App'>
      <h1 className='app-title'>Monster Roledex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='Search Your Avatar' 
        className= "monster-search-box" 
      />
      <CardList monsters = {filteredMonsters}/>
    </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchString: ''
//     }
//   }

//   onSearchChange = (event) => {
//     const searchString= event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchString}
//     });
//   }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((users) => {
  //     this.setState(()=>{
  //       return {
  //         monsters : users,
  //         searchString: ''
  //       }
  //     }, ()=>{});
  //     })
  // }



//   render(){

//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter((monster)=> {
    //     return monster.name.toLocaleLowerCase().includes(searchString);
    //   });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Roledex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className= "search-box" />
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
