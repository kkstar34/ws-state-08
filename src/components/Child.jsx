import React, { useState } from 'react'


function Child(props) {

  let [name, setName]  = useState("Moussa");

  let [isTurned, setIsTurned] = useState(false);


  function changeName() {

    setName('Karim');
  }

  function turnBox() {

    setIsTurned(!isTurned);
  }



  return (
    <div>
        <h2>My name is {name}</h2>

        <div className={isTurned ? "box turn" : "box"}>

        </div>

        <button onClick={turnBox}>Turn</button>
    </div>
  )
}

export default Child