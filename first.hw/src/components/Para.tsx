import React from 'react'

function Para(props:{name: string}) {
  return (
    <div>
      <p>My name is {props.name}</p>
    </div>
  )
}

export default Para
