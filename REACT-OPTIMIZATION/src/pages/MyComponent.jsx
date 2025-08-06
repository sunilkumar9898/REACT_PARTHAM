import React from 'react'

const MyComponent = React.memo(({ name }) => {
    console.log("My Component Rendered");

  return (
    <div>
          <p>Hello { name}</p>
    </div>
  )
})

export default MyComponent
