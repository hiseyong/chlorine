import { useState,useEffect } from 'react';
import axios from 'axios';
import './app.css'

function App() {
  const client = axios.create();
  const [activated, setActivated] = useState('')
  const [working, setWorking] = useState('')
  const [data, setData] = useState(50);
  const onClick = () => {
    client.get(`https://blynk.cloud/external/api/update?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v0=${data}`)
    client.get('https://blynk.cloud/external/api/update?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v1=1')
    .then(response => {
      if(response.status === 200) {
        if (activated === 'offline🔴') {
          alert('machine is offline')
        }
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
        setActivated('online🟢')
      } else {
        setActivated('offline🔴')
      }
    })
    client.get('https://blynk.cloud/external/api/get?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v2')
    .then(res => {
      if (res.data === 0) {
        setWorking('there is no problem')
      } else {
        setWorking('something is wrong(기계에 남은 알약이 없거나 무언가 끼었을 수 있음. 그러나 다시 작동시킬 수는 있음)')
      }
    })
    }, 5000)


     client.get('https://blynk.cloud/external/api/isHardwareConnected?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi')
    .then(res=> {
      if (res.data === true) {
        setActivated('online🟢')
      } else {
        setActivated('offline🔴')
      }
    })
    client.get('https://blynk.cloud/external/api/get?token=PCPldifAmHkzG2fmrG4WR9UzhZzPb5mi&v2')
    .then(res => {
      console.log(res.data)
      if (res.data === 0) {
        setWorking('there is no problem')
      } else {
        setWorking('something is wrong(기계에 남은 알약이 없거나 무언가 끼었을 수 있음. 그러나 다시 작동시킬 수는 있음)')
      }
    })
  }, [])

  const onChange = (e) => {
    setData(e.target.value);
  }
  return (
    <div className="wrapper">
      <center>
        <h1>
          pool disinfectant inserter
        </h1>
        <hr/>
      <h3>machine is {activated}</h3>
      <h3>{working}</h3>
      <hr/>
      <h1>{data}</h1>
      <input type="range" min="1" max="100" value={data} onChange={onChange} className='range'/>
      <br/>
      <button onClick={onClick} className='button-27' role='button'>INSERT</button>
      </center>
      <footer>
        <nav>
          <a href='https://blog.naver.com/hiseyong' target='_blank'>Blog</a>|
          <a href='https://github.com/hiseyong' target='_blank'>Github</a> 
        </nav>
        <p>
          <span>dev: hiseyong</span>
          <br/>
          <span>email: hiseyong1008@gmail.com</span>
          <br/>
          <span>Copyright 2022. hiseyong. All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
