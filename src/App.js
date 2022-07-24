import { useState,useEffect } from 'react';
import axios from 'axios';
import './app.css'

function App() {
  const client = axios.create();
  const [activated, setActivated] = useState('')
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


  useEffect(() => {
    setInterval(() => {
      client.get('https://blynk.cloud/external/api/isHardwareConnected?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi')
    .then(res=> {
      if (res.data === true) {
        setActivated('online')
      } else {
        setActivated('offline')
      }
    })
    }, 30000)
    
  }, [])

  useEffect(() => {
      client.get('https://blynk.cloud/external/api/isHardwareConnected?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi')
    .then(res=> {
      if (res.data === true) {
        setActivated('online')
      } else {
        setActivated('offline')
      }
    })
    
  }, [])

  const onChange = (e) => {
    setData(e.target.value);
  }
  return (
    <div className="App">
      <h3>machine is {activated}</h3>
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
