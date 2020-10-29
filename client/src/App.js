import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css';


function App() {
  const [serverMsg, setServerMsg] = useState('')

  useEffect(() => {
    const getMsg = async () => {
      const msg = await axios.get('/getMsg').then(res => {
        console.log('i got msg:', res.data)
        return res.data
      })
      setServerMsg(msg)
    }
    getMsg();
    // return () => {
    //   cleanup
    // }
  }, [])
  return (
    <div className="App">
      A cooking app will be built here!
      my server say: {serverMsg}
    </div>
  );
}

export default App;
