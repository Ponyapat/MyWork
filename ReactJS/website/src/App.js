import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import home from './components/home';
import webboard from './components/webboard';
import contact from './components/contact';
import urlnotfound from './components/urlnotfound';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="/">React</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navMain" aria-controls="navMain"
        aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navMain" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Menu Page</Link>
            </li>
            <li>
              <Link class="nav-link" to="/webboard/1001">Webboard Page</Link>
            </li>
            <li>
              <Link class="nav-link" to="/contact">Contact Page</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/webboard/:kid" component={webboard} />
          <Route exact path="/contact" component={contact} />
          <Route component={urlnotfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );



}

export default App;