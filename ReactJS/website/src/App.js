import React , {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  const [currentid, setcurrentid] = useState(1);

  function showData() {
    setcurrentid(id)
  }


  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
    .then(res=>{
      console.log(res)
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
  }, [currentid])

    return (
      <div>

        ID : <input type="text" value={id} 
        onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={showData}>Read Data</button>
        <br />
        <table border='1'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>

        </table>
      </div>
    );



}


export default App;