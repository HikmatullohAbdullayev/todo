import React, { useReducer, useRef, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function reducer(state, action) {
  
}


function App() {
  const [task, dispatch] = useReducer(reducer, null)

  return (
    <>  
    <div className="task">
      <h2>hozir kino ko'rvomman</h2>
    <h2>Add task</h2>
    <div className="top">
      <div className="bg-cyan-600">
        <label htmlFor="inp">text</label>
        <input type="text" name="" id="inp"  />
      </div>
      <button className='bg-cyan-950'>Add</button>
    </div>
    <div className="flex">
      <div className='bg-red-600'>
        <label htmlFor="chek">chek</label>
        <input type="checkbox" name="" id="chek" />
      </div>
      <div className="bg-green-600 ">
        <label htmlFor="text">text</label>
        <input type="text" name="text" id="text" />
      </div>
      <button>Edit </button>
      <button>Delete</button>
    </div>
   </div>
     
    </>
  )
}

export default App
