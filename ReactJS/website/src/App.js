import React , {useReducer} from 'react';
import UserComponent from './components/usercomponent'


export const dbContext = React.createContext();

const iniState = 0;


const reducerX10 = (state, action) => {
  switch (action) {
    case 'ADD':
      return state + 1
    case 'SUB':
      return state - 1
    case 'CLEAR' : 
      return iniState
      default:
      return state
  }
}

function App() {
const [data, dispatch] = useReducer(reducerX10, iniState)

  return (
  <div>
    <h1>App Component</h1>
    <div>Value : {data} </div>
    <dbContext.Provider value = {{dataState: data, dataDispatch: dispatch}}>
      <UserComponent />
    </dbContext.Provider>
  
  </div>
);

}

export default App;