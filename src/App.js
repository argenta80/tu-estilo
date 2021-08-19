import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';

// Components
import Header from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <NavBar />
        <Header title ='Tu estilo, una empresa joven pero con mucha experinecia' />
        <div className='Card-Container'>
        </div>
        <div>
          <ItemListContainer />
        </div>
      </div>
    );
  }
}

export default App;