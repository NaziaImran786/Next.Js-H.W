'use client';
import React, { useState } from 'react'

function Project() {
    let [num, setnum] = useState(0)
  return (
    <div className="bg-purple-300" id="main">
      <h1>I m Project Page.</h1>
      <button className='h-16 w-32' onClick={() => {setnum(num = num + 1)}}>Click</button>
      <p>My number is {num}</p>
    </div>
  )
}

export default Project
