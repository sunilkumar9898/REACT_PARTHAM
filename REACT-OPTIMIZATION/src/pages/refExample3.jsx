import React, { useEffect, useRef, useState } from 'react'

const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    },[count])
  return (
    <div>
          <h1>Example 3 : Previous Value Tracker</h1>
          <h2>Current: {count}</h2>
          <h3>Previous Value : {prevCount.current}</h3>
          <button onClick={()=>setCount((count)=>count+1)}>Increase Value</button>
    </div>
  )
}

export default PreviousValue;
