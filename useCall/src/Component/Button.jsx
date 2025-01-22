import React from 'react'

function Button({inc}) {
    console.log("Button......")
    for(let x=0; x<1000; x++) {
      console.log("Button......")
    }
  return (
    <div>
        <button onClick={inc}>Increament</button>
    </div>
  )
}

export default React.memo(Button)