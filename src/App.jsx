import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test.jsx'

function App() {
  const animals = ["lol",'sss'];

  return (
    <div>
      <h1>Animals: </h1>
      <Test animals={animals} />
    </div>
  );
}

export default App
