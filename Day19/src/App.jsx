import React, { useState } from 'react';
import './App.css';


function App() {
  const state = useState();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const Inccount =()=>{
    setCount3(count3+1);
  }

  return (
    <>
        <h3>Use of hooks in react</h3>
      <div className="app">
        <button onClick={() => { setCount1(count1+1) }}>{count1}</button>
        <button onClick={() => { setCount2(count2+1) }}>{count2}</button>
        <button onClick={Inccount}>{count3}</button>
      </div>
    </>
  );
}

export default App;
