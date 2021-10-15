import React from 'react';
import './App.css';

function App() {

  return (
    <div class="MenuBarTextAlign">
      <div class="btn-toolbar" role="toolbar">
        <div class="btn-group mr-3" role="group" aria-label="Group1">
          <button type="button" class="btn btn-primary">Menu</button>
          <button type="button" class="btn btn-primary">Post</button>
          <button type="button" class="btn btn-primary">News</button>
        </div>

        <div class="btn-group" role="group" aria-label="Group2">
          <button type="button" class="btn btn-primary">Contact</button>
          <button type="button" class="btn btn-primary">info</button>

        </div>
      </div>
    </div>
  
  );
}

export default App;