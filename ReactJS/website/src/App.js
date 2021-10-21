import React from 'react';
import UserComponent from './components/usercomponent';

export const dbContext = React.createContext();
export const userContext = React.createContext();

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <dbContext.Provider value={'Poonyapat'}>
        <userContext.Provider value={'gmail'}>
          <UserComponent />
        </userContext.Provider>
      </dbContext.Provider>
    </div>
  );

}


export default App;