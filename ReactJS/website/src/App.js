import React , {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [data, setdata] = useState([]);


  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
      setdata(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
  }, [])

    return (
      <div>
        <table border='1'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
          {
            data.map(i=>(<tr><td>{i.id}</td><td>{i.title}</td><td>{i.body}</td></tr> ))
          }
        </table>
      </div>
    );



}


export default App;