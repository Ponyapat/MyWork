import React from 'react';
import './App.css';

function App() {

  return (
    
    <div class="MenuBarTextAlign">
     <button type="button">normal</button>
      <button type="button" class="btn">btn</button>
      <button type="button" class="btn-primary">btn-primary</button>
      <button type="button" class="btn-secondary">btn-secondary</button>
      <hr />
      <button type="button" class="btn-info">btn-ibfo</button>
      <button type="button" class="btn-warning">btn-warning</button>
      <button type="button" class="btn-danger">btn-danger</button>
      <button type="button" class="btn-success">btn-success</button>
      <hr />
      <button type="button" class="btn-dark">btn-dark</button>
      <button type="button" class="btn-light">btn-light</button>
      <button type="button" class="btn-link">btn-link</button>
      <hr />

      <div class="btn-group">
        <button class="btn">Menu</button>
        <button class="btn">Webboard</button>
        <button class="btn">Post</button>
        <button class="btn">Contact</button>

      </div>
    
    </div>
  
  );
}

export default App;