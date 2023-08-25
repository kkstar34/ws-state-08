

import React, { useEffect, useState } from 'react'
import Child from './components/Child';
import './App.css';

function App() {

  let firstName = 'John';

  function alertTest(){
    alert('test');
  }

  return (
    <div>
      <h1>Hello</h1>
      <Child  name={firstName} alert={alertTest}></Child>
      
    </div>
  )
}

export default App