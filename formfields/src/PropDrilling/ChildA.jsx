import React from 'react'
import GrandChildA from './GrandChild/GrandChildA';

const ChildA = (props) => {
    const {heading , user} = props
  return (
      <div>
          <h1>This is Child A</h1>
          <h6>{heading}</h6>
          <h3>{user?.name}</h3>

          <GrandChildA userData={ user} />
      </div>
  );
}

export default ChildA
