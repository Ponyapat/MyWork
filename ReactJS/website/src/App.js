import React, {useState} from 'react';

function App(){

  const [data, setData] = useState([])
  
  function addData() {
    setData([...data,{
      value: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addData}>Add Data</button>
      <ul>
        {
          data.map(item => ( <li>{item.value}</li> ))
        }
      </ul>
    </div>

  );
  

}


export default App;