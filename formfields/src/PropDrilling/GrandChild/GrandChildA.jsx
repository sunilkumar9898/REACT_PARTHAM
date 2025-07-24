import React from 'react'

const GrandChildA = (props) => {
  const{userData} = props
  return (
    <div>
      <h1>This is Grand Child A</h1>
      <h2>{ userData.age}</h2>
    </div>
  )
}

export default GrandChildA
