import React from 'react'

function Favourite(props:{color:string}) {  
  return (
    <div>
      <p>My Favourite color is {props.color}</p>
    </div>
  )
}

export default Favourite
