import React, { useState } from 'react';
function Cards(props){
  let iniDis="block";
  const [dis,setDis]=useState(iniDis);

  const remComp=()=>{
    let newDis="none";
    setDis(newDis);
  }

  return(
    <>
    <div className="container" style={{display:dis}}>
      <h1>{props.heading}</h1>
      <button onClick={remComp}>Delete</button>
      <p>{props.para}</p>
    </div>
    </>
  );

};

export default Cards;