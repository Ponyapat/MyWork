import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


const reducer=(state=iniState , action) => {
  switch (action.type) {
    case "ADD":
      state = {
        amount: state.amount + action.payload,
        age:state.age+action.payload
      }
      break;
    case "SUB":
      state = {
        amount:state.amount - action.payload,
        age:state.age-action.payload
      }
      break;
    default:
      return state;
  }
  return state;

}

const salaryReducer = (state={fullname:"",salary:0}, action) => {
  switch (action.type) {
    case "setFullName":
      state = {
        ...state,
        fullname:action.payload
      }
      break;
    case "setSalary":
      state = {
        ...state,
        salary:action.payload
      }
      break;
    case "editSalary":
      state = {
        ...state,
        salary:state.salary + action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}

const iniState ={
  amount: 200,
  age: 30
}


const store = createStore(combineReducers({reducer, salaryReducer}), window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.subscribe(()=>{
    console.log("Current Value : ", store.getState());
  });

store.dispatch({
  type: "setFullName",
  payload: "Guide"
});

store.dispatch({
  type: "setSalary",
  payload: 25000
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'));

reportWebVitals();