import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';

// Components
import Header from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <Header title ='Tu estilo, una empresa joven pero con mucha experinecia' />
        <NavBar />
        <div className='Card-Container'>
        </div>
        <div>
          <ItemListContainer />
        </div>
        <div>
          <ItemDetailContainer />

        </div>
      </div>
    );
  }
}

export default App;