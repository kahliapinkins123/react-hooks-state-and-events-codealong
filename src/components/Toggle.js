import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function clickHandler(){
    setIsOn(isOn=>!isOn);
  }

  const color = isOn ? 'red' : 'white';

  return <button onClick={clickHandler} style={{background:color}}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
