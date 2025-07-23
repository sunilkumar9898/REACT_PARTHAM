import React from 'react'

// const ChildPropCounter = ({ count }) => {
const ChildPropCounter = (props) => {
    const{count} = props
  return (
    <div>
          <h1>{ count}</h1>
    </div>
  )
}

export default ChildPropCounter
