import React from 'react';
import './App.css';
import './components/NavBar';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';

// Components
import Header from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div className='App'>
          <Header title ='Tu estilo, una empresa joven pero con mucha experinecia' />
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <div>
                <ItemListContainer />
              </div>
            </Route>
            <Route path='/category/:categoryId'>
              <div>
                <ItemListContainer />
              </div>
            </Route>
            <Route path='/item/:itemId'>
              <div>
                <ItemDetailContainer />
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;