import React , {useReducer} from 'react';

const iniState = {
  myData : 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {myData: state.myData + action.payload}
    case 'SUB':
      return {myData: state.myData - action.payload}
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
    <div>Value : {data.myData} </div>
      <button onClick={()=>dispatch({type: 'ADD', payload:5})}>+</button>
      <button onClick={()=>dispatch({type: 'SUB', payload:5})}>-</button>
      <button onClick={()=>dispatch({type: 'CLEAR'})}>Clear</button>

  </div>
);

}

export default App;