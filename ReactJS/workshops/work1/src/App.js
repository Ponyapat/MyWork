import React,{useState} from "react";
import CounterFunctionComponent from "./CounterFunctionComponent";
import CounterClassComponent from "./CounterClassComponent"


export default  () => {
 let var1 = 0;
 const var2 = "Hello";
 const var3 = true;
 
 const [count, setCount] = useState(0)
 
 
  return (
    <div>
      <h1>Hello React {var1} </h1>
      <h1>Hello React {var2} </h1>
      <h1>Hello React {var3 && "Yes"} </h1>
      <h1>Count : {count} </h1>
    
    <button 
      onClick={() => {
        setCount(count + 1)
    }}>
      ADD
      </button>

      <CounterClassComponent />
      <CounterFunctionComponent />
    
    </div>
  );
};
