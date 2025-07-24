import React from 'react'
import GrandCHildB from './GrandChild/GrandCHildB'

const ChildB = (props) => {
    const { userDetails, setUser } = props
  return (
    <div>
          <h1>This is Child B </h1>
          <h4>{ userDetails?.name}</h4>
          <h5>{ userDetails?.age}</h5>
          <button onClick={(() => setUser({ name: "sunil", age: 25 }))}>SetUserData</button>

          <GrandCHildB userDetails={ userDetails} />
    </div>
  )
}

export default ChildB
