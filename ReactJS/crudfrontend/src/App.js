import React from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import home from './components/home';
import ProductAdd from './components/productsadd';
import ProductEdit from './components/productsedit';
import ProductInfo from './components/productsinfo';
import ProductLists from './components/productslist';

function App() {
  return(
    <div>
      <BrowserRouter>
        <MainMenu />
        <div class="container">
          <MainRoute />
          
        </div>
      </BrowserRouter>
      
    </div>
  );
}

function MainMenu() {
  return(
  <nav class='navbar navbar-expand-md navbar-dark bg-dark'>
    <a class='navbar-brand' href="/">Product App </a>
    <button class='navbar-toggler' type='button'
    data-toggler="collapse"
    data-target="#MainMenu" 
    aria-controls="MainMenu"
    aria-expanded="false"
    aria-label='Toggle navigation' >
      <span class='navbar-toggler-icon'></span>
    </button>
    <div class='collapse navbar-collapse' id='MainMenu'>
      <ul class='navbar-nav mr-auto'>
        <li class='nav-item active'>
          <a class='nav-link' href="/">Home</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href="/productslists">All Product</a>
        </li>
      </ul>
    </div>
  </nav>
  );

}

  function MainRoute() {
    return(
      <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/productslists' component={ProductLists} />
        <Route exact path='/products/:id' component={ProductInfo} />
        <Route exact path='/productsadd' component={ProductAdd} />
        <Route exact path='/productsedit/:id' component={ProductEdit} />
      </Switch>
    )
  } 

export default App;