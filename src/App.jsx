/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react"

const BulbContext = createContext();
function App() {
  const [bulbOn, setBulbon] = useState(true);

  return (
    <div>
      <BulbContext.Provider>
        <LightBulb bulbOn={bulbOn} setBulbon={setBulbon}/>
      </BulbContext.Provider>
    </div>
  )
}

function LightBulb({bulbOn,setBulbon}){
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbon={setBulbon}/>
  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "BulbOn" :"bulb off"}
  </div>
}

function ToggleBulbState({setBulbon}){
  function toggle(){
    console.log("hi there")
    setBulbon(setcurrent => !setcurrent)
  }
  return <div>
    <button onClick={toggle}>Toggle bulb State</button>
    
  </div>
}

export default App
