import React from 'react';
import UserComponent from './components/usercomponent';

export const dbContext = React.createContext();

function App () {
  return(
    <div>
      <h1>App Component</h1>
      <dbContext.Provider value={'Poonyapat'}>
        <UserComponent />
        </dbContext.Provider>
    </div>
  );

} 


export default App;