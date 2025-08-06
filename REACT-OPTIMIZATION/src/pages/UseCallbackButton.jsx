import React from 'react'

const UseCallbackButton = React.memo(({ onclick }) => {
    console.log("Button rendered");

  return (
    <div>
           <button onClick={onclick}>Click Me</button>
    </div>
  )
})

export default UseCallbackButton
