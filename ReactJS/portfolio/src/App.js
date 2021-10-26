import React from 'react';
import { BrowserRouter , Link , Route , Switch } from 'react-router-dom';
import Skill from './components/skill';
import contact from './components/contact';
import home from './components/home';
import './App.css';


function App() {
  return(
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand"  href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="./components/skill">Skill</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" href="#">Pricing</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link disabled" href="#">Disabled</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="./components/skill" component={Skill} />
      </Switch>
    </div>
    </BrowserRouter>
  );




}

export default App;