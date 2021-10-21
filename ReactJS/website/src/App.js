import React , {useReducer} from 'react';

const iniState = 0;
const reducer = (state, action) => {
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
const [data, dispatch] = useReducer(reducer, iniState)

  return (
  <div>
    <h1>App Component</h1>
    <div>Value : {data} </div>
      <button onClick={()=>dispatch('ADD')}>+</button>
      <button onClick={()=>dispatch('SUB')}>-</button>
      <button onClick={()=>dispatch('CLEAR')}>Clear</button>

  </div>
);

}

export default App;