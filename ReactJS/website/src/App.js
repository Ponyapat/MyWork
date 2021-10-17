import  React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import home from './components/home';
import webboard from './components/webboard';
import contact from './components/contact';
import urlnotfound from './components/urlnotfound';
import  './App.css';

function App() {
  return(
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/webboard">Webboard</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/webboard" component={webboard} />
            <Route exact path="/contact" component={contact} />
            <Route  component={urlnotfound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;