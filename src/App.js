import { useState } from 'react';
import axios from 'axios';
import './app.css'

function App() {
  const client = axios.create();
  const [data, setData] = useState(50);
  const onClick = () => {
    client.get(`https://blynk.cloud/external/api/update?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v0=${data}`)
    client.get('https://blynk.cloud/external/api/update?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v1=1')
    .then(response => {
      if(response.status === 200) {
        alert('succes')
      } else {
        alert(`something is wrong ERROR CODE:${response.status}`)
      }
    })
  };

  const onChange = (e) => {
    setData(e.target.value);
  }
  return (
    <div className="App">
      <center>
      <h1>{data}</h1>
      <input type="range" min="1" max="100" value={data} onChange={onChange}/>
      <br/>
      <button onClick={onClick}>GO</button>
      </center>
    </div>
  );
}

export default App;
